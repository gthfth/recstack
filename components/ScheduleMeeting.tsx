"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Cal } from "@calcom/embed-react"

export function ScheduleMeeting() {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div>
      <Button onClick={() => setShowCalendar(true)}>Schedule a Meeting</Button>
      {showCalendar && (
        <Cal
          namespace="recruitment-platform"
          calLink="your-calendly-link"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      )}
    </div>
  )
}

