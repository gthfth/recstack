import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BriefcaseBusiness, CheckCircle, TrendingUp, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BriefcaseBusiness className="h-6 w-6 text-primary" />
            <span>RecruitPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#guarantees" className="text-sm font-medium hover:underline underline-offset-4">
              Guarantees
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Become the World's Best Recruiter for Software Engineers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our proven system guarantees success with 1 guarantee, 1 purpose, 10 metrics, and 100 standard
                    operating procedures.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Claim Your Guarantee <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/book-audit">
                    <Button size="lg" variant="outline">
                      Book a Free Audit
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=550&width=550"
                  alt="Recruitment Success"
                  className="rounded-lg object-cover aspect-square"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="guarantees" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Guarantee
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Guaranteed Success for Software Engineer Recruiters
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We guarantee you'll achieve 10 clients, $10M pipeline, and become the world's best recruiter with our
                  proven system.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary mx-auto">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">10 Clients</h3>
                <p className="text-muted-foreground">
                  Guaranteed to secure 10 high-value clients within your first year using our system.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">$10M Pipeline</h3>
                <p className="text-muted-foreground">
                  Build a $10M recruitment pipeline with our proven methodologies and tools.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary mx-auto">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">World's Best Recruiter</h3>
                <p className="text-muted-foreground">
                  Our system transforms you into an elite recruiter with industry-leading practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Comprehensive System</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A complete recruitment platform designed for 10,000 recruiters to achieve guaranteed success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1 Guarantee: Become the world's best recruiter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1 Purpose: Provide opportunities through ethical recruitment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>10 Metrics: Track your success with key performance indicators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>100 Standard Operating Procedures: Follow our proven system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Daily habits that guarantee success</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Comprehensive training and support</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Recruitment System"
                  className="rounded-lg object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
            <span>RecruitPro</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} RecruitPro. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 md:ml-auto">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

