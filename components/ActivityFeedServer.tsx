'use server'

import { getActivitiesData, getClientsData, getDealsData } from '@/lib/actions'
import { QueryResultRow } from '@vercel/postgres'

interface ActivityData {
  activities: QueryResultRow[]
}

interface ClientData {
  clients: QueryResultRow[]
}

interface DealData {
  deals: QueryResultRow[]
  totalPipeline: number
}

export async function fetchActivityFeedData() {
  'use server'
  
  const activitiesData = await getActivitiesData()
  const clientsData = await getClientsData()
  const dealsData = await getDealsData()

  const activities = activitiesData.activities.map(activity => ({
    id: String(activity.id),
    type: activity.type as string,
    description: activity.description as string,
    client_id: String(activity.client_id),
    deal_id: String(activity.deal_id),
    created_at: activity.created_at as string
  }))

  const clients = clientsData.clients.map(client => ({
    id: String(client.id),
    name: client.name as string
  }))

  const deals = dealsData.deals.map(deal => ({
    id: String(deal.id),
    title: deal.title as string
  }))

  return { activities, clients, deals }
} 