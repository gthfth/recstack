import { NextResponse } from "next/server"
import { INSTANTLY_API_KEY } from "@/lib/config"

export async function POST(request: Request) {
  const { to, subject, body } = await request.json()

  const response = await fetch("https://api.instantly.ai/api/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": INSTANTLY_API_KEY,
    },
    body: JSON.stringify({
      to,
      subject,
      body,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }

  const data = await response.json()
  return NextResponse.json(data)
}

