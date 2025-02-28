import { getDb } from "../lib/db"

async function seedDatabase() {
  const db = await getDb()

  // Sample clients
  const clients = [
    { name: "John Doe", company: "Tech Co", email: "john@techco.com", phone: "123-456-7890" },
    { name: "Jane Smith", company: "Data Inc", email: "jane@datainc.com", phone: "987-654-3210" },
    { name: "Bob Johnson", company: "AI Labs", email: "bob@ailabs.com", phone: "456-789-0123" },
  ]

  for (const client of clients) {
    await db.run("INSERT INTO clients (name, company, email, phone) VALUES (?, ?, ?, ?)", [
      client.name,
      client.company,
      client.email,
      client.phone,
    ])
  }

  // Sample deals
  const deals = [
    { client_id: 1, title: "Software Engineer A", value: 100000, stage: "Prospecting" },
    { client_id: 2, title: "Data Scientist B", value: 120000, stage: "Qualification" },
    { client_id: 3, title: "Product Manager C", value: 150000, stage: "Proposal" },
    { client_id: 1, title: "DevOps Engineer D", value: 130000, stage: "Negotiation" },
    { client_id: 2, title: "UX Designer E", value: 90000, stage: "Closed Won" },
  ]

  for (const deal of deals) {
    await db.run("INSERT INTO deals (client_id, title, value, stage) VALUES (?, ?, ?, ?)", [
      deal.client_id,
      deal.title,
      deal.value,
      deal.stage,
    ])
  }

  // Sample activities
  const activities = [
    { client_id: 1, deal_id: 1, type: "Call", description: "Initial call with candidate A" },
    { client_id: 2, deal_id: 2, type: "Email", description: "Follow-up email to candidate B" },
    { client_id: 3, deal_id: 3, type: "Interview", description: "First round interview with candidate C" },
    { client_id: 1, deal_id: 4, type: "Offer", description: "Sent offer to candidate D" },
    { client_id: 2, deal_id: 5, type: "Call", description: "Scheduling call with candidate E" },
  ]

  for (const activity of activities) {
    await db.run("INSERT INTO activities (client_id, deal_id, type, description) VALUES (?, ?, ?, ?)", [
      activity.client_id,
      activity.deal_id,
      activity.type,
      activity.description,
    ])
  }

  console.log("Database seeded successfully")
}

seedDatabase().catch(console.error)

