"use client"

import type React from "react"
import type { QueryResultRow } from '@vercel/postgres'

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { addClient, getClientsData } from "@/lib/actions"

interface Client extends QueryResultRow {
  id: number
  name: string
  company: string
  email: string
  phone: string
  created_at: string
}

export function ClientList() {
  const [clients, setClients] = useState<Client[]>([])
  const [newClient, setNewClient] = useState({ name: "", company: "", email: "", phone: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    const { clients } = await getClientsData()
    setClients(clients as Client[])
  }

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addClient(newClient)
      toast({ title: "Client added successfully" })
      setNewClient({ name: "", company: "", email: "", phone: "" })
      fetchClients()
    } catch (error) {
      console.error("Error adding client:", error)
      toast({ title: "Failed to add client", variant: "destructive" })
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
          {clients.map((client) => (
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

