import { NextResponse } from "next/server"
import { INSTANTLY_API_KEY } from "@/lib/config"
import { getRecords } from "@/lib/airtable"

export async function POST() {
  try {
    // Fetch the first client from Airtable
    const clients = await getRecords("Clients")
    const firstClient = clients[0]

    if (!firstClient || !firstClient.email) {
      return NextResponse.json({ error: "No client found with an email address" }, { status: 404 })
    }

    // Send email using Instantly
    const response = await fetch("https://api.instantly.ai/api/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": INSTANTLY_API_KEY,
      },
      body: JSON.stringify({
        to: firstClient.email,
        subject: "Test Email from CRM",
        body: `Hello ${firstClient.name},\n\nThis is a test email from your CRM system.\n\nBest regards,\nYour CRM Team`,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email through Instantly")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in test-email route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

