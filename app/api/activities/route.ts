import { NextResponse } from "next/server"
import { createRecord, getRecords } from "@/lib/airtable"

export async function GET() {
  try {
    const activities = await getRecords("Activities")
    return NextResponse.json(activities)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch activities" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { client_id, deal_id, type, description } = await request.json()
    const newActivity = await createRecord("Activities", { client_id, deal_id, type, description })
    return NextResponse.json(newActivity)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create activity" }, { status: 500 })
  }
}

