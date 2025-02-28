import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Filter, Plus, Search } from "lucide-react"

export default function CandidatesPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Candidates</h1>
          <p className="text-muted-foreground">Manage and track your candidate pipeline</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add Candidate
        </Button>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4 py-4">
          <div className="flex flex-1 items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search candidates..." className="h-9 w-full md:w-[300px]" />
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-9 w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="screening">Screening</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="offer">Offer</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Candidate" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">michael@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Senior Software Engineer</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800"
                  >
                    Interview
                  </Badge>
                </TableCell>
                <TableCell>San Francisco, CA</TableCell>
                <TableCell>2 days ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Candidate" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Emily Wilson</p>
                      <p className="text-sm text-muted-foreground">emily@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Product Manager</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                  >
                    Offer
                  </Badge>
                </TableCell>
                <TableCell>New York, NY</TableCell>
                <TableCell>5 days ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Candidate" />
                      <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">David Thompson</p>
                      <p className="text-sm text-muted-foreground">david@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>UX Designer</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800">
                    Screening
                  </Badge>
                </TableCell>
                <TableCell>Austin, TX</TableCell>
                <TableCell>1 week ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Candidate" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sarah Lee</p>
                      <p className="text-sm text-muted-foreground">sarah@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Marketing Director</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800"
                  >
                    New
                  </Badge>
                </TableCell>
                <TableCell>Chicago, IL</TableCell>
                <TableCell>2 hours ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Candidate" />
                      <AvatarFallback>RB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Robert Brown</p>
                      <p className="text-sm text-muted-foreground">robert@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Sales Manager</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                  >
                    Hired
                  </Badge>
                </TableCell>
                <TableCell>Miami, FL</TableCell>
                <TableCell>3 weeks ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

