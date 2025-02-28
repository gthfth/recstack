import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  Compass,
  GraduationCap,
  Heart,
  HelpCircle,
  Info,
  LifeBuoy,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function SystemOverviewPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the RecruitPro system - your complete recruitment solution
        </p>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Welcome, John Doe!</CardTitle>
              <CardDescription>Your onboarding progress</CardDescription>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">System Onboarding</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div className="grid gap-4 md:grid-cols-3"> /></div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Completed Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7/12</div>
                  <p className="text-xs text-muted-foreground">Onboarding tasks completed</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Priority actions to complete</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24/7</div>
                  <p className="text-xs text-muted-foreground">Access to dedicated support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue Onboarding</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="tour" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tour">System Tour</TabsTrigger>
          <TabsTrigger value="navigation">Navigation Guide</TabsTrigger>
          <TabsTrigger value="support">Support Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="tour" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">System Tour Video</span>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>System Overview</CardTitle>
                  <CardDescription>Key components of the RecruitPro platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The RecruitPro system is built around 10 core modules that work together to create a comprehensive
                    recruitment solution. Each module is designed to address a specific aspect of the recruitment
                    process, from sourcing candidates to measuring enterprise value.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Core Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">Guarantees - Our commitment to your success</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Compass className="h-4 w-4 text-primary" />
                      <span className="text-sm">Purpose - Mission, vision, and values</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Daily Habits - Activities for consistent success</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-sm">Incentives - Rewards for achievement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">Talent Sourcing - Finding the best candidates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-sm">Candidate Evaluation - Assessing fit and skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BriefcaseBusiness className="h-4 w-4 text-primary" />
                      <span className="text-sm">Client Management - Building relationships</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span className="text-sm">Placement & Onboarding - Securing success</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm">Learning & Development - Continuous improvement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="text-sm">Enterprise Value - Measuring impact</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Getting Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We recommend starting with these key areas to get the most out of the system:
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/dashboard/guarantees">
                        <Award className="mr-2 h-4 w-4" /> Understand Our Guarantees
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/dashboard/daily-habits">
                        <Calendar className="mr-2 h-4 w-4" /> Set Up Your Daily Habits
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/dashboard/talent-sourcing">
                        <Users className="mr-2 h-4 w-4" /> Start Sourcing Talent
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="navigation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Guide</CardTitle>
              <CardDescription>How to navigate the RecruitPro system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <Info className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sidebar Navigation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The main sidebar contains links to all 10 core modules. Click on any module to access its features
                      and tools. On mobile devices, you can access the sidebar by clicking the menu icon in the top-left
                      corner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <Info className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Dashboard</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The dashboard provides an overview of your key metrics and quick access to frequently used
                      features. You can customize your dashboard to show the information most relevant to your work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <Info className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Search</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The search bar at the top of the screen allows you to quickly find candidates, clients, jobs, or
                      system features. Simply type what you're looking for and press Enter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <Info className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">User Profile</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Access your profile, settings, and account information by clicking on your avatar in the top-right
                      corner. From there, you can update your profile, manage notifications, and log out.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <Info className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Keyboard Shortcuts</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Power users can navigate the system quickly using keyboard shortcuts. Press{" "}
                      <kbd className="px-1 py-0.5 bg-muted rounded text-xs">?</kbd> at any time to view available
                      shortcuts.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Help Resources</CardTitle>
                <CardDescription>Get the support you need</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" /> Knowledge Base
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <HelpCircle className="mr-2 h-4 w-4" /> FAQs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" /> Video Tutorials
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" /> System Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Reach out for personalized assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <LifeBuoy className="mr-2 h-4 w-4" /> Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <LifeBuoy className="mr-2 h-4 w-4" /> Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <LifeBuoy className="mr-2 h-4 w-4" /> Email Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <LifeBuoy className="mr-2 h-4 w-4" /> Community Forum
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">
                  Our support team is available 24/7 to help you succeed with the RecruitPro system.
                </p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

