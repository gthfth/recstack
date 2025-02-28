import { NextResponse } from "next/server"
import { createRecord, getRecords } from "@/lib/airtable"

export async function GET() {
  try {
    const deals = await getRecords("Deals")
    return NextResponse.json(deals)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch deals" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { client_id, title, value, stage } = await request.json()
    const newDeal = await createRecord("Deals", { client_id, title, value, stage })
    return NextResponse.json(newDeal)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create deal" }, { status: 500 })
  }
}

