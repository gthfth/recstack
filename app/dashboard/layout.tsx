import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Award,
  BarChart3,
  BriefcaseBusiness,
  Calendar,
  Compass,
  GraduationCap,
  Heart,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { MobileSidebar, Sidebar } from "@/components/ui/sidebar"

const sidebarItems = [
  {
    title: "Guarantees",
    href: "/dashboard/guarantees",
    icon: Award,
  },
  {
    title: "Purpose",
    href: "/dashboard/purpose",
    icon: Compass,
  },
  {
    title: "System Overview",
    href: "/dashboard/system-overview",
    icon: BarChart3,
  },
  {
    title: "Daily Habits",
    href: "/dashboard/daily-habits",
    icon: Calendar,
  },
  {
    title: "Incentives",
    href: "/dashboard/incentives",
    icon: Star,
  },
  {
    title: "Talent Sourcing",
    href: "/dashboard/talent-sourcing",
    icon: Users,
  },
  {
    title: "Candidate Evaluation",
    href: "/dashboard/candidate-evaluation",
    icon: Target,
  },
  {
    title: "Client Management",
    href: "/dashboard/client-management",
    icon: BriefcaseBusiness,
  },
  {
    title: "Placement & Onboarding",
    href: "/dashboard/placement-onboarding",
    icon: ShieldCheck,
  },
  {
    title: "Learning & Development",
    href: "/dashboard/learning-development",
    icon: GraduationCap,
  },
  {
    title: "Enterprise Value",
    href: "/dashboard/enterprise-value",
    icon: Heart,
  },
  {
    title: "CRM",
    href: "/dashboard/crm",
    icon: Users,
  },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <MobileSidebar items={sidebarItems} />
        <Link href="/" className="flex items-center gap-2 font-bold">
          <BriefcaseBusiness className="h-6 w-6 text-primary" />
          <span>RecruitPro</span>
        </Link>
        <div className="relative ml-auto flex-1 md:grow-0 md:basis-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 md:block">
          <Sidebar items={sidebarItems} />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

