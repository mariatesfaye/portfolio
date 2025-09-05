import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Cpu,
  Award,
  MapPin,
  Monitor,
  Building2,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="w-fit bg-primary/10 text-primary border-primary/20 animate-pulse-glow"
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  Addis Ababa, Ethiopia
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-black text-balance leading-tight">
                  Maria{" "}
                  <span className="animate-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Tesfaye
                  </span>
                </h1>
                <div className="space-y-2">
                  <p className="text-2xl text-muted-foreground font-semibold">Full Stack Software Engineer</p>
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span className="text-sm font-medium">Graduated 2025 • Available for Full-time Roles</span>
                  </div>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-lg animate-text-reveal">
                  Transforming ideas into scalable, user-focused applications. Passionate about solving real-world
                  problems through clean code and innovative system design across Africa's digital transformation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/maria-tesfaye-3283b42a7" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover-lift group"
                  >
                    <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <a href="https://github.com/mariatesfaye" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:bg-primary/5 bg-transparent hover-lift group"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-card/50 border border-primary/10 hover-lift animate-glow">
                  <div className="text-3xl font-black text-primary animate-pulse">200+</div>
                  <div className="text-sm text-muted-foreground font-medium">Problems Solved</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-accent/10 hover-lift animate-glow animate-delay-200">
                  <div className="text-3xl font-black text-accent animate-pulse">5+</div>
                  <div className="text-sm text-muted-foreground font-medium">Major Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-primary/10 hover-lift animate-glow animate-delay-300">
                  <div className="text-3xl font-black text-primary animate-pulse">2025</div>
                  <div className="text-sm text-muted-foreground font-medium">Graduate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl rotate-6 blur-sm"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3"></div>
                <div className="relative w-full h-full bg-card rounded-3xl flex items-center justify-center shadow-2xl border border-primary/10">
                  <div className="text-center space-y-4">
                    <Code className="w-20 h-20 text-primary mx-auto" />
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">Specializing in</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="secondary" className="text-xs">
                          Next.js
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          AI/ML
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Gov Systems
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am a Full Stack Software Engineer with a Bachelor's degree in Software Engineering from Addis Ababa
              University (2025). My expertise lies in building scalable, user-focused applications using modern
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Government Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built e-Government procurement systems for Malawi and Sierra Leone, streamlining digital
                  transformation across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Full Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert in Next.js, React, TypeScript, and cloud-native tools for building scalable
                  applications.
                </p>
              </CardContent>
            </Card>

             <Card className="text-center p-6">
              <CardHeader>
                <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed intelligent scheduling platforms using TensorFlow with genetic algorithm
                  optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground">Building impactful solutions across diverse industries</p>
          </div>

          <div className="space-y-8">
            {/* Perago Systems */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl text-primary">Software Engineer</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-accent">
                      <span>Perago Systems</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Mar 2024 - Present
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600/20 bg-green-50">
                      Current Role
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Working on full-stack development of e-Government procurement systems, focusing on
                  scalable architecture, security, and user experience optimization.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-accent">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Built Malawi E-Government Procurement System (MANEPS) serving thousands of users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Developed Sierra Leone E-Government Portal with secure authentication and OTP verification
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implemented Perago Systems corporate website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Architected microservice integrations and CRUD operations across multiple modules</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-accent">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "TypeScript",
                        "Hono.js",
                        "PostgreSQL",
                        "Mantine UI",
                        "TailwindCSS",
                        "Microservices",
                      ].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Qemer Software */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Code className="w-6 h-6 text-accent" />
                      <CardTitle className="text-2xl text-accent">Software Developer</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                      <span>Qemer Software Technology PLC</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 w-fit">
                    Mar 2024 - Jun 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Contributed to the development of an enterprise inventory management system, focusing on creating
                  intuitive user interfaces and optimizing workflow efficiency for business operations.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Key Contributions:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Designed and built interactive, user-friendly interfaces using React and Node.js</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Enhanced system usability and workflow efficiency for inventory management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborated with cross-functional teams to deliver enterprise-grade solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implemented responsive design patterns for optimal user experience</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Node.js", "JavaScript", "HTML/CSS", "Responsive Design"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">Proficient in modern technologies and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React.js", "TypeScript", "TailwindCSS", "Redux Toolkit"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "NestJS", "Hono.js", "Express.js", "PostgreSQL"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "Java", "Go"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">AI/ML & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "Git", "GitHub", "Jira"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="text-5xl font-black mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world applications with measurable impact across government systems, AI platforms, and enterprise
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 - Malawi */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        Government
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                      Malawi E-Government Procurement System
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Next.js • TypeScript • TailwindCSS • Redux Toolkit • Microservices
                    </CardDescription>
                  </div>
                  <a href="https://www.maneps.mw" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  Built core features for MANEPS Portal including landing page and onboarding modules. Contributed to
                  Back Office system with new modules and critical integrations across microservice architecture.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Streamlined Malawi's procurement processes for citizens and businesses
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Improved system stability and performance optimization
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Digital Transformation</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Large Scale</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Microservices</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - AI Scheduling */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-accent" />
                      <Badge variant="secondary" className="text-xs">
                        AI/ML
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                      AI Intelligent Scheduling Platform
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Next.js • Python • PostgreSQL • TensorFlow • Genetic Algorithm
                    </CardDescription>
                  </div>
                  <a
                    href="https://intelligent-scheduling-system-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">Built responsive UI
                  for conflict-free scheduling with teacher preferences and resource
                  constraints.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Automated academic timetabling, reducing manual workload by 90%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Improved fairness and efficiency in resource allocation
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/10 text-accent border-accent/20">Machine Learning</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Education</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 - Sierra Leone */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        Government
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                      Sierra Leone E-Government System
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Hono.js • PostgreSQL • Zod • TypeScript • Mantine UI
                    </CardDescription>
                  </div>
                  <a href="https://segp.dev.peragosystems.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  Designed secure authentication system with OTP verification and permission-based access. Developed
                  full-stack CRUD operations and portal onboarding across nearly all Back Office modules.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Supporting Sierra Leone's digital transformation initiative
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Scalable, secure, and user-friendly procurement system
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Security</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Authentication</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Full-Stack</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 - Monitorix */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-accent" />
                      <Badge variant="secondary" className="text-xs">
                        System Monitoring
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                      Monitorix - Linux Performance Monitor
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Node.js • Express.js • Real-time Monitoring • System Analytics
                    </CardDescription>
                  </div>
                  <a href="https://github.com/mariatesfaye/Monitorix" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  Built a comprehensive web-based monitoring system to track key system performance metrics including
                  CPU, memory, disk, and network usage with real-time capabilities and efficient backend endpoints.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Enhanced transparency into system health for administrators
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Real-time monitoring with efficient resource tracking</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/10 text-accent border-accent/20">DevOps</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Real-time</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Linux</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 5 - Perago Systems */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover:-translate-y-2 lg:col-span-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        Corporate Website
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                      Perago Systems Official Website
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Next.js • Mantine UI • TailwindCSS • Tabler Icons • Responsive Design
                    </CardDescription>
                  </div>
                  <a href="https://peragosystems.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  Designed and implemented a responsive corporate website in collaboration with a teammate, ensuring
                  modern UI/UX standards, accessibility compliance, and cross-platform compatibility to strengthen
                  Perago's digital presence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Modern UI/UX with accessibility standards</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Cross-platform compatibility and responsiveness</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Strengthened corporate digital presence</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Collaborative development approach</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Corporate</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Responsive</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Accessibility</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Collaboration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Achievements & Certifications</h2>
            <p className="text-lg text-muted-foreground">Recognition of technical excellence and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <CardTitle className="text-lg">VMware IT Academy Certification</CardTitle>
                    <CardDescription>Data Center Virtualization: Core Technical Skills</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Foundational knowledge of virtualization and vSphere</li>
                  <li>• Skills for junior administrator/operator roles</li>
                  <li>• Core concepts of software-defined data center (SDDC)</li>
                </ul>

                {/* Certificate image */}
                <div className="mt-4">
                  <img
                    src="/vmware-certificate.jpg"
                    alt="VMware IT Academy Certificate"
                    width={600}
                    height={400}
                    className="rounded-lg border shadow-md"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Code className="w-8 h-8 text-accent" />
                  <div>
                    <CardTitle className="text-lg">Problem Solving Excellence</CardTitle>
                    <CardDescription>200+ Algorithmic Problems Solved</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dynamic programming and data structures</li>
                  <li>• Graph algorithms and optimization problems</li>
                  <li>• Multiple programming languages proficiency</li>
                </ul>

                {/* LeetCode Stats Image */}
                <div className="mt-4">
                  <img
                    src="https://leetcard.jacoblin.cool/mariaa25?theme=dark&ext=heatmap"
                    alt="LeetCode Stats"
                    className="rounded-lg border shadow-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black mb-4">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life with clean, scalable code. Let's discuss how I can contribute to your
                team's success.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:mariatesfaye67@email.com">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  mariatesfaye67@email.com
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/maria-tesfaye-3283b42a7" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </a>
              <a href="https://github.com/mariatesfaye" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                © 2025 Maria Tesfaye. Transforming ideas into exceptional software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
