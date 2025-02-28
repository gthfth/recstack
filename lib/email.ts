import axios from "axios"
import { INSTANTLY_API_KEY } from "./config"

const instantlyClient = axios.create({
  baseURL: "https://api.instantly.ai/api/v1",
  headers: {
    "X-Api-Key": INSTANTLY_API_KEY,
  },
})

export async function sendEmail(to: string, subject: string, body: string) {
  try {
    const response = await instantlyClient.post("/send", {
      to,
      subject,
      body,
    })
    console.log("Email sent successfully:", response.data)
    return response.data
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export async function getEmailStatus(emailId: string) {
  try {
    const response = await instantlyClient.get(`/email/${emailId}`)
    console.log("Email status:", response.data)
    return response.data
  } catch (error) {
    console.error("Error getting email status:", error)
    throw error
  }
}

