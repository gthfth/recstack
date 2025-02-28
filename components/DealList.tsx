"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

export function DealList() {
  const [deals, setDeals] = useState([])
  const [newDeal, setNewDeal] = useState({ title: "", value: "", stage: "", client_id: "" })
  const [clients, setClients] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    fetchDeals()
    fetchClients()
  }, [])

  const fetchDeals = async () => {
    const response = await fetch("/api/deals")
    const data = await response.json()
    setDeals(data)
  }

  const fetchClients = async () => {
    const response = await fetch("/api/clients")
    const data = await response.json()
    setClients(data)
  }

  const handleAddDeal = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/deals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDeal),
      })
      if (response.ok) {
        toast({ title: "Deal added successfully" })
        setNewDeal({ title: "", value: "", stage: "", client_id: "" })
        fetchDeals()
      } else {
        toast({ title: "Failed to add deal", variant: "destructive" })
      }
    } catch (error) {
      console.error("Error adding deal:", error)
      toast({ title: "Error adding deal", variant: "destructive" })
    }
  }

  const getBadgeColor = (stage: string) => {
    switch (stage) {
      case "Prospecting":
        return "bg-blue-100 text-blue-800"
      case "Qualification":
        return "bg-yellow-100 text-yellow-800"
      case "Proposal":
        return "bg-orange-100 text-orange-800"
      case "Negotiation":
        return "bg-purple-100 text-purple-800"
      case "Closed Won":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Deals</h2>
      </div>
      <form onSubmit={handleAddDeal} className="mb-4 flex gap-2">
        <Input
          placeholder="Title"
          value={newDeal.title}
          onChange={(e) => setNewDeal({ ...newDeal, title: e.target.value })}
          required
        />
        <Input
          placeholder="Value"
          type="number"
          value={newDeal.value}
          onChange={(e) => setNewDeal({ ...newDeal, value: e.target.value })}
          required
        />
        <Select value={newDeal.stage} onValueChange={(value) => setNewDeal({ ...newDeal, stage: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Prospecting">Prospecting</SelectItem>
            <SelectItem value="Qualification">Qualification</SelectItem>
            <SelectItem value="Proposal">Proposal</SelectItem>
            <SelectItem value="Negotiation">Negotiation</SelectItem>
            <SelectItem value="Closed Won">Closed Won</SelectItem>
          </SelectContent>
        </Select>
        <Select value={newDeal.client_id} onValueChange={(value) => setNewDeal({ ...newDeal, client_id: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Client" />
          </SelectTrigger>
          <SelectContent>
            {clients.map((client: any) => (
              <SelectItem key={client.id} value={client.id}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Deal
        </Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal: any) => (
            <TableRow key={deal.id}>
              <TableCell>{deal.title}</TableCell>
              <TableCell>{clients.find((c) => c.id === deal.client_id)?.name}</TableCell>
              <TableCell>${deal.value.toLocaleString()}</TableCell>
              <TableCell>
                <Badge className={getBadgeColor(deal.stage)}>{deal.stage}</Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

