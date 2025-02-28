"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function ClientList() {
  const [clients, setClients] = useState([])
  const [newClient, setNewClient] = useState({ name: "", company: "", email: "", phone: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    const response = await fetch("/api/clients")
    const data = await response.json()
    setClients(data)
  }

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      })
      if (response.ok) {
        toast({ title: "Client added successfully" })
        setNewClient({ name: "", company: "", email: "", phone: "" })
        fetchClients()
      } else {
        toast({ title: "Failed to add client", variant: "destructive" })
      }
    } catch (error) {
      console.error("Error adding client:", error)
      toast({ title: "Error adding client", variant: "destructive" })
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Clients</h2>
      </div>
      <form onSubmit={handleAddClient} className="mb-4 flex gap-2">
        <Input
          placeholder="Name"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          required
        />
        <Input
          placeholder="Company"
          value={newClient.company}
          onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
          required
        />
        <Input
          placeholder="Email"
          type="email"
          value={newClient.email}
          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
          required
        />
        <Input
          placeholder="Phone"
          value={newClient.phone}
          onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
          required
        />
        <Button type="submit">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Client
        </Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client: any) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.company}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4 mr-2" /> Email
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

