"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function ActivityFeed() {
  const [activities, setActivities] = useState([])
  const [newActivity, setNewActivity] = useState({ type: "", description: "", client_id: "", deal_id: "" })
  const [clients, setClients] = useState([])
  const [deals, setDeals] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    fetchActivities()
    fetchClients()
    fetchDeals()
  }, [])

  const fetchActivities = async () => {
    const response = await fetch("/api/activities")
    const data = await response.json()
    setActivities(data)
  }

  const fetchClients = async () => {
    const response = await fetch("/api/clients")
    const data = await response.json()
    setClients(data)
  }

  const fetchDeals = async () => {
    const response = await fetch("/api/deals")
    const data = await response.json()
    setDeals(data)
  }

  const handleAddActivity = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newActivity),
      })
      if (response.ok) {
        toast({ title: "Activity added successfully" })
        setNewActivity({ type: "", description: "", client_id: "", deal_id: "" })
        fetchActivities()
      } else {
        toast({ title: "Failed to add activity", variant: "destructive" })
      }
    } catch (error) {
      console.error("Error adding activity:", error)
      toast({ title: "Error adding activity", variant: "destructive" })
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddActivity} className="mb-4 flex gap-2">
          <Select value={newActivity.type} onValueChange={(value) => setNewActivity({ ...newActivity, type: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Call">Call</SelectItem>
              <SelectItem value="Email">Email</SelectItem>
              <SelectItem value="Meeting">Meeting</SelectItem>
              <SelectItem value="Task">Task</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Description"
            value={newActivity.description}
            onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
            required
          />
          <Select
            value={newActivity.client_id}
            onValueChange={(value) => setNewActivity({ ...newActivity, client_id: value })}
          >
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
          <Select
            value={newActivity.deal_id}
            onValueChange={(value) => setNewActivity({ ...newActivity, deal_id: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Deal" />
            </SelectTrigger>
            <SelectContent>
              {deals.map((deal: any) => (
                <SelectItem key={deal.id} value={deal.id}>
                  {deal.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit">
            <PlusCircle className="mr-2 h-4 w-4" /> Log Activity
          </Button>
        </form>
        {activities.map((activity: any) => (
          <div key={activity.id} className="mb-4 pb-4 border-b last:border-b-0">
            <p className="font-semibold">{activity.type}</p>
            <p>{activity.description}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {clients.find((c) => c.id === activity.client_id)?.name &&
                `Client: ${clients.find((c) => c.id === activity.client_id)?.name}`}
              {deals.find((d) => d.id === activity.deal_id)?.title &&
                ` | Deal: ${deals.find((d) => d.id === activity.deal_id)?.title}`}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{new Date(activity.created_at).toLocaleString()}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

