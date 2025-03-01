import { db } from "@/lib/db"
import { QueryResult } from '@vercel/postgres';

interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  created_at: string;
}

interface Deal {
  id: number;
  client_id: number;
  title: string;
  value: number;
  stage: string;
  created_at: string;
  client_name: string;
}

interface Activity {
  id: number;
  client_id: number;
  deal_id: number;
  type: string;
  description: string;
  created_at: string;
  client_name: string;
  deal_title: string;
}

export default async function DashboardPage() {
  const { rows: clients } = await db<Client>`
    SELECT * FROM clients 
    ORDER BY created_at DESC 
    LIMIT 5
  `;

  const { rows: deals } = await db<Deal>`
    SELECT d.*, c.name as client_name 
    FROM deals d 
    LEFT JOIN clients c ON d.client_id = c.id 
    ORDER BY d.created_at DESC 
    LIMIT 5
  `;

  const { rows: activities } = await db<Activity>`
    SELECT a.*, c.name as client_name, d.title as deal_title
    FROM activities a
    LEFT JOIN clients c ON a.client_id = c.id
    LEFT JOIN deals d ON a.deal_id = d.id
    ORDER BY a.created_at DESC
    LIMIT 5
  `;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Recent Clients</h3>
            <div className="space-y-4">
              {clients.map((client) => (
                <div key={client.id} className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Recent Deals</h3>
            <div className="space-y-4">
              {deals.map((deal) => (
                <div key={deal.id} className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">{deal.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {deal.client_name} - ${deal.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Recent Activities</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {activity.type}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.client_name} - {activity.deal_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

