import { NextResponse } from "next/server"
import { createRecord, getRecords } from "@/lib/airtable"

export async function GET() {
  try {
    const clients = await getRecords("Clients")
    return NextResponse.json(clients)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch clients" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { name, company, email, phone } = await request.json()
    const newClient = await createRecord("Clients", { name, company, email, phone })
    return NextResponse.json(newClient)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 })
  }
}

