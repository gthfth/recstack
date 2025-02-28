"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function TestEmailSender() {
  const { toast } = useToast()

  const handleTestEmail = async () => {
    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Failed to send test email")
      }

      const data = await response.json()
      toast({ title: "Test email sent successfully!", description: `Email ID: ${data.id}` })
    } catch (error) {
      console.error("Error sending test email:", error)
      toast({ title: "Failed to send test email", variant: "destructive" })
    }
  }

  return <Button onClick={handleTestEmail}>Send Test Email</Button>
}

