import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle, DollarSign, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function GuaranteesPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Guaranteed Success</h1>
        <p className="text-xl text-muted-foreground">
          Become the World's Best Recruiter for Software Engineers (with Our Proven System)
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">10 Clients</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">Our system guarantees you'll secure 10 high-value clients within your first year.</p>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-[60%] rounded-full bg-primary"></div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">6/10 clients secured</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
              <DollarSign className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">$10M Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">Build a $10M recruitment pipeline with our proven methodologies and tools.</p>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-[42%] rounded-full bg-primary"></div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">$4.2M of $10M pipeline built</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">World's Best Recruiter</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">Our system transforms you into an elite recruiter with industry-leading practices.</p>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-[35%] rounded-full bg-primary"></div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">35% progress to elite status</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Success Metrics</CardTitle>
            <CardDescription>Track your progress towards guaranteed success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Candidates Sourced</span>
                  </div>
                  <span className="text-sm font-medium">128/500</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[25%] rounded-full bg-primary"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Interviews Conducted</span>
                  </div>
                  <span className="text-sm font-medium">42/200</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[21%] rounded-full bg-primary"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Placements Made</span>
                  </div>
                  <span className="text-sm font-medium">12/50</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[24%] rounded-full bg-primary"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Revenue Generated</span>
                  </div>
                  <span className="text-sm font-medium">$240K/$1M</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[24%] rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>Testimonials from recruiters who achieved success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Miller" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">Tech Recruiter</p>
                  <p className="mt-1 text-sm">
                    "I went from struggling to find quality candidates to building a $12M pipeline in just 9 months.
                    This system works!"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="James Davis" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">James Davis</p>
                  <p className="text-sm text-muted-foreground">Senior Recruiter</p>
                  <p className="mt-1 text-sm">
                    "The structured approach and daily habits transformed my recruitment process. I secured 15 clients
                    in my first year!"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emily Wilson" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Emily Wilson</p>
                  <p className="text-sm text-muted-foreground">Tech Recruitment Lead</p>
                  <p className="mt-1 text-sm">
                    "Following this system helped me become the top performer in my agency. The guarantees are real if
                    you follow the process."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Common questions about our guarantees</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How does the guarantee work?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Our guarantee is based on following our proven system of 1 purpose, 10 metrics, and 100 standard
                operating procedures. If you follow the system and don't achieve the guaranteed results, we'll continue
                to support you at no additional cost until you do.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How long does it take to see results?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Most recruiters start seeing significant improvements within 30-60 days of implementing our system. The
                full guaranteed results typically take 9-12 months to achieve.
              </p>
            </div>

            <div>
              <h3 className="font-medium">What support do I receive?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                You'll receive comprehensive training, daily guidance, weekly coaching calls, and access to our
                community of successful recruiters. Our support team is available to help you implement every aspect of
                the system.
              </p>
            </div>

            <div>
              <h3 className="font-medium">What if I'm new to recruiting?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Our system works for recruiters at all experience levels. New recruiters often achieve results faster
                because they don't have to unlearn ineffective habits.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6">
        <Button size="lg" className="px-8">
          Claim Your Guarantee
        </Button>
      </div>
    </div>
  )
}

