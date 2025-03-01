'use server'

import { db } from './db'

export async function getDealsData() {
  const { rows: deals } = await db`
    SELECT d.*, c.name as client_name 
    FROM deals d 
    LEFT JOIN clients c ON d.client_id = c.id 
    ORDER BY d.created_at DESC
  `
  const totalPipeline = deals.reduce((sum, deal) => sum + (Number(deal.value) || 0), 0)
  return { deals, totalPipeline }
}

export async function getClientsData() {
  const { rows: clients } = await db`
    SELECT * FROM clients 
    ORDER BY created_at DESC
  `
  return { clients }
}

export async function getActivitiesData() {
  const { rows: activities } = await db`
    SELECT a.*, c.name as client_name, d.title as deal_title
    FROM activities a
    LEFT JOIN clients c ON a.client_id = c.id
    LEFT JOIN deals d ON a.deal_id = d.id
    ORDER BY a.created_at DESC
  `
  return { activities }
}

export async function addClient(data: { name: string; company: string; email: string; phone: string }) {
  const { rows } = await db`
    INSERT INTO clients (name, company, email, phone)
    VALUES (${data.name}, ${data.company}, ${data.email}, ${data.phone})
    RETURNING *
  `
  return rows[0]
}

export async function addDeal(data: { title: string; value: number; stage: string; client_id: number }) {
  const { rows } = await db`
    INSERT INTO deals (title, value, stage, client_id)
    VALUES (${data.title}, ${data.value}, ${data.stage}, ${data.client_id})
    RETURNING *
  `
  return rows[0]
}

export async function addActivity(data: { type: string; description: string; client_id: number; deal_id: number }) {
  const { rows } = await db`
    INSERT INTO activities (type, description, client_id, deal_id)
    VALUES (${data.type}, ${data.description}, ${data.client_id}, ${data.deal_id})
    RETURNING *
  `
  return rows[0]
} 