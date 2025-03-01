'use server'

import { getDealsData, getClientsData } from '@/lib/actions'
import { QueryResultRow } from '@vercel/postgres'

interface DealData {
  deals: QueryResultRow[]
  totalPipeline: number
}

interface ClientData {
  clients: QueryResultRow[]
}

export async function fetchDealListData() {
  'use server'
  
  const dealsData = await getDealsData()
  const clientsData = await getClientsData()

  const deals = dealsData.deals.map(deal => ({
    id: String(deal.id),
    title: deal.title as string,
    stage: deal.stage as string,
    client_id: String(deal.client_id),
    value: deal.value as number,
    created_at: deal.created_at as string
  }))

  const clients = clientsData.clients.map(client => ({
    id: String(client.id),
    name: client.name as string
  }))

  return { deals, clients }
} 