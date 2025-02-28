"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function EmailSender() {
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, body }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      toast({ title: "Email sent successfully!" })
      setTo("")
      setSubject("")
      setBody("")
    } catch (error) {
      console.error("Error sending email:", error)
      toast({ title: "Failed to send email", variant: "destructive" })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="email" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} required />
      <Input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      <Textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required />
      <Button type="submit">Send Email</Button>
    </form>
  )
}

