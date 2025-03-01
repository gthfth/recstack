"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { toast } from 'sonner'
import { addActivity } from '@/lib/actions'
import { fetchActivityFeedData } from './ActivityFeedServer'

interface Activity {
  id: string
  type: string
  description: string
  client_id: string
  deal_id: string
  created_at: string
}

interface Client {
  id: string
  name: string
}

interface Deal {
  id: string
  title: string
}

export default function ActivityFeed() {
  const [newActivity, setNewActivity] = useState({
    type: 'Call',
    description: '',
    client_id: '',
    deal_id: ''
  })
  const [activities, setActivities] = useState<Activity[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [deals, setDeals] = useState<Deal[]>([])

  const fetchData = async () => {
    try {
      const data = await fetchActivityFeedData()
      setActivities(data.activities)
      setClients(data.clients)
      setDeals(data.deals)
    } catch (error) {
      console.error('Error fetching data:', error)
      toast.error('Failed to fetch data')
    }
  }

  const handleAddActivity = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addActivity({
        ...newActivity,
        client_id: Number(newActivity.client_id),
        deal_id: Number(newActivity.deal_id)
      })
      setNewActivity({
        type: 'Call',
        description: '',
        client_id: '',
        deal_id: ''
      })
      toast.success('Activity added successfully')
      fetchData()
    } catch (error) {
      console.error('Error adding activity:', error)
      toast.error('Failed to add activity')
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleAddActivity} className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Type</label>
          <Select
            value={newActivity.type}
            onValueChange={(value) => setNewActivity({ ...newActivity, type: value })}
          >
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="Meeting">Meeting</option>
            <option value="Note">Note</option>
          </Select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Description</label>
          <Input
            value={newActivity.description}
            onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Client</label>
          <Select
            value={newActivity.client_id}
            onValueChange={(value) => setNewActivity({ ...newActivity, client_id: value })}
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Deal</label>
          <Select
            value={newActivity.deal_id}
            onValueChange={(value) => setNewActivity({ ...newActivity, deal_id: value })}
          >
            <option value="">Select a deal</option>
            {deals.map((deal) => (
              <option key={deal.id} value={deal.id}>
                {deal.title}
              </option>
            ))}
          </Select>
        </div>
        <Button type="submit">Add Activity</Button>
      </form>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-6 py-4 whitespace-nowrap">{activity.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{activity.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {clients.find((c) => c.id === activity.client_id)?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {deals.find((d) => d.id === activity.deal_id)?.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(activity.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

