"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { addDeal } from '@/lib/actions'
import { fetchDealListData } from './DealListServer'

interface Deal {
  id: string
  title: string
  stage: string
  client_id: string
  value: number
  created_at: string
}

interface Client {
  id: string
  name: string
}

export default function DealList() {
  const [newDeal, setNewDeal] = useState({
    title: '',
    stage: 'Lead',
    client_id: '',
    value: 0
  })
  const [deals, setDeals] = useState<Deal[]>([])
  const [clients, setClients] = useState<Client[]>([])

  const fetchData = async () => {
    try {
      const data = await fetchDealListData()
      setDeals(data.deals)
      setClients(data.clients)
    } catch (error) {
      console.error('Error fetching data:', error)
      toast.error('Failed to fetch data')
    }
  }

  const handleAddDeal = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addDeal({
        ...newDeal,
        client_id: Number(newDeal.client_id),
        value: Number(newDeal.value)
      })
      setNewDeal({
        title: '',
        stage: 'Lead',
        client_id: '',
        value: 0
      })
      toast.success('Deal added successfully')
      fetchData()
    } catch (error) {
      console.error('Error adding deal:', error)
      toast.error('Failed to add deal')
    }
  }

  const getBadgeColor = (stage: string) => {
    switch (stage) {
      case 'Lead':
        return 'bg-blue-500'
      case 'Opportunity':
        return 'bg-yellow-500'
      case 'Proposal':
        return 'bg-purple-500'
      case 'Closed Won':
        return 'bg-green-500'
      case 'Closed Lost':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleAddDeal} className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input
            value={newDeal.title}
            onChange={(e) => setNewDeal({ ...newDeal, title: e.target.value })}
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Stage</label>
          <Select
            value={newDeal.stage}
            onValueChange={(value) => setNewDeal({ ...newDeal, stage: value })}
          >
            <option value="Lead">Lead</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Proposal">Proposal</option>
            <option value="Closed Won">Closed Won</option>
            <option value="Closed Lost">Closed Lost</option>
          </Select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Value</label>
          <Input
            type="number"
            value={newDeal.value}
            onChange={(e) => setNewDeal({ ...newDeal, value: Number(e.target.value) })}
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Client</label>
          <Select
            value={newDeal.client_id}
            onValueChange={(value) => setNewDeal({ ...newDeal, client_id: value })}
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </Select>
        </div>
        <Button type="submit">Add Deal</Button>
      </form>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {deals.map((deal) => (
              <tr key={deal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{deal.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getBadgeColor(deal.stage)}>{deal.stage}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${deal.value.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {clients.find((c) => c.id === deal.client_id)?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(deal.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

