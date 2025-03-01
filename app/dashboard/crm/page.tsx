import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientList } from "@/components/ClientList"
import DealList from "@/components/DealList"
import ActivityFeed from "@/components/ActivityFeed"
import { EmailSender } from "@/components/EmailSender"
import { TestEmailSender } from "@/components/TestEmailSender"
import { getDealsData } from "@/lib/actions"

export default async function CRMPage() {
  const { deals, totalPipeline } = await getDealsData()

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">CRM Dashboard</h1>
        <TestEmailSender />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalPipeline.toLocaleString()}</div>
        </CardContent>
      </Card>

      <Tabs defaultValue="clients" className="space-y-4">
        <TabsList>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>
        <TabsContent value="clients">
          <ClientList />
        </TabsContent>
        <TabsContent value="deals">
          <DealList />
        </TabsContent>
        <TabsContent value="activities">
          <ActivityFeed />
        </TabsContent>
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Send Email</CardTitle>
            </CardHeader>
            <CardContent>
              <EmailSender />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

