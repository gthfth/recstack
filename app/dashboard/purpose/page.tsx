import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Compass, ShieldCheck, Users } from "lucide-react"

export default function PurposePage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Our Purpose</h1>
        <p className="text-xl text-muted-foreground">
          The mission, vision, and values that guide our recruitment system
        </p>
      </div>

      <Tabs defaultValue="mission" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
          <TabsTrigger value="values">Core Values</TabsTrigger>
          <TabsTrigger value="ethics">Ethical Guidelines</TabsTrigger>
          <TabsTrigger value="conduct">Code of Conduct</TabsTrigger>
        </TabsList>

        <TabsContent value="mission" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Compass className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>Our Mission</CardTitle>
                  <CardDescription>Why we exist</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Our mission is to transform the recruitment industry by empowering recruiters with the tools, systems,
                  and support they need to connect exceptional talent with life-changing opportunities.
                </p>
                <p className="leading-7 mt-4">
                  We believe that great recruitment changes lives. By helping software engineers find their ideal roles
                  and helping companies build world-class teams, we create positive ripple effects that extend far
                  beyond the placement itself.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>Our Vision</CardTitle>
                  <CardDescription>Where we're going</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  We envision a world where every software engineer is matched with opportunities that allow them to do
                  their best work, and where companies can build transformative products with the right talent.
                </p>
                <p className="leading-7 mt-4">
                  By 2030, we aim to have empowered 100,000 recruiters worldwide, facilitated 1 million successful
                  placements, and generated $10 billion in economic value through our recruitment system.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Social Impact</CardTitle>
              <CardDescription>How we make a difference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="font-bold text-lg mb-2">Economic Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    We create economic opportunities by connecting talent with companies that value their skills and
                    compensate them fairly, enabling financial security and growth.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Career Development</h3>
                  <p className="text-sm text-muted-foreground">
                    We help software engineers advance their careers by matching them with roles that challenge them and
                    provide opportunities for growth and learning.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Industry Advancement</h3>
                  <p className="text-sm text-muted-foreground">
                    By elevating recruitment practices, we help advance the tech industry as a whole, enabling companies
                    to build better products and services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="values" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  We pursue excellence in everything we do, from the systems we build to the service we provide. We
                  believe that attention to detail and commitment to quality lead to exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  We operate with unwavering integrity, always doing what's right for candidates, clients, and
                  recruiters. We believe that honesty and transparency build trust and long-term success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  We continuously innovate to improve recruitment practices and outcomes. We embrace new technologies
                  and methodologies that enhance the recruitment experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle>Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  We empower recruiters with the knowledge, tools, and support they need to succeed. We believe that
                  when recruiters thrive, candidates and companies benefit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  We foster collaboration among recruiters, candidates, and companies. We believe that the best outcomes
                  emerge when all parties work together toward shared goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  We measure our success by the positive impact we create. We believe that great recruitment changes
                  lives and transforms organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ethics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ethical Guidelines</CardTitle>
              <CardDescription>Principles that guide our recruitment practices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Candidate-Centric Approach</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We prioritize the needs, goals, and well-being of candidates in all recruitment activities. We
                      never pressure candidates into roles that don't align with their career objectives or values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Transparency and Honesty</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We provide accurate and complete information to both candidates and clients. We never misrepresent
                      job opportunities, candidate qualifications, or recruitment processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Data Privacy and Security</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respect and protect the privacy of candidate and client data. We collect only necessary
                      information, secure it appropriately, and use it only for legitimate recruitment purposes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Diversity and Inclusion</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We promote diversity and inclusion in all recruitment activities. We actively work to eliminate
                      bias and ensure equal opportunity for all candidates regardless of background.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Professional Development</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We invest in the continuous professional development of recruiters. We believe that well-trained
                      recruiters provide better service to candidates and clients.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conduct" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recruiter Code of Conduct</CardTitle>
              <CardDescription>Standards for recruiters using our system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg">1. Professional Integrity</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recruiters must maintain the highest standards of professional integrity in all interactions with
                    candidates, clients, and colleagues. This includes honesty, transparency, and accountability for
                    actions and decisions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">2. Candidate Advocacy</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recruiters must act as advocates for candidates, ensuring their interests are represented and
                    protected throughout the recruitment process. This includes providing accurate information,
                    preparing candidates for interviews, and negotiating fair compensation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">3. Client Service</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recruiters must provide exceptional service to clients, understanding their needs and delivering
                    qualified candidates who meet those needs. This includes regular communication, honest feedback, and
                    strategic guidance on talent acquisition.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">4. Confidentiality</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recruiters must maintain strict confidentiality regarding candidate and client information. This
                    includes protecting personal data, respecting privacy preferences, and securing sensitive
                    information.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">5. Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recruiters must commit to continuous learning and improvement. This includes staying current with
                    industry trends, developing new skills, and adapting to changing market conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">6. Community Contribution</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recruiters must contribute to the broader recruitment community by sharing knowledge, mentoring
                    others, and upholding the reputation of the profession. This includes participating in community
                    events and supporting fellow recruiters.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

