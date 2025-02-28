"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function TestAirtableIntegration() {
  const [clients, setClients] = useState([])
  const [deals, setDeals] = useState([])
  const [activities, setActivities] = useState([])
  const [newClient, setNewClient] = useState({ name: "", company: "", email: "", phone: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const clientsResponse = await fetch("/api/clients")
      const clientsData = await clientsResponse.json()
      setClients(clientsData)

      const dealsResponse = await fetch("/api/deals")
      const dealsData = await dealsResponse.json()
      setDeals(dealsData)

      const activitiesResponse = await fetch("/api/activities")
      const activitiesData = await activitiesResponse.json()
      setActivities(activitiesData)
    } catch (error) {
      console.error("Error fetching data:", error)
      toast({ title: "Error fetching data", variant: "destructive" })
    }
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
        fetchData()
      } else {
        toast({ title: "Failed to add client", variant: "destructive" })
      }
    } catch (error) {
      console.error("Error adding client:", error)
      toast({ title: "Error adding client", variant: "destructive" })
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Test Airtable Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddClient} className="space-y-4">
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
            <Button type="submit">Add Client</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(clients, null, 2)}</pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(deals, null, 2)}</pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(activities, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  )
}

