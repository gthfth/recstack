import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientList } from "@/components/ClientList"
import { DealList } from "@/components/DealList"
import { ActivityFeed } from "@/components/ActivityFeed"
import { getDb } from "@/lib/db"
import { Users, DollarSign, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"

async function getDashboardData() {
  const db = await getDb()
  const totalPipeline = await db.get("SELECT SUM(value) as total FROM deals")
  const clientCount = await db.get("SELECT COUNT(*) as count FROM clients")
  const dealCount = await db.get("SELECT COUNT(*) as count FROM deals")
  return { totalPipeline: totalPipeline.total, clientCount: clientCount.count, dealCount: dealCount.count }
}

export default async function DashboardPage() {
  const { totalPipeline, clientCount, dealCount } = await getDashboardData()

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPipeline?.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dealCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CRM</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/crm">
              <Button className="w-full">View CRM Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <ClientList />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <DealList />
        </CardContent>
      </Card>

      <ActivityFeed />
    </div>
  )
}

