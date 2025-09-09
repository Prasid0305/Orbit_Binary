
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowUpRight, PlayCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const unifiedUrl = "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/";

const documents = [
  { title: "Orbit Team Charter", category: "Team Docs", description: "Our team's mission, values, and ways of working.", href: unifiedUrl },
  { title: "Project Phoenix Architecture Overview", category: "Technical", description: "High-level overview of the main project's architecture.", href: unifiedUrl },
  { title: "Jira Project Board", category: "Project Management", description: "The single source of truth for all our tasks.", href: unifiedUrl },
  { title: "Confluence Knowledge Base", category: "Team Docs", description: "Our central hub for all documentation.", href: unifiedUrl },
  { title: "Figma Design System Library", category: "Design", description: "All the UI components and design guidelines.", href: unifiedUrl },
  { title: "Code of Conduct", category: "HR & Culture", description: "Molex company-wide code of conduct.", href: unifiedUrl },
  { title: "API Documentation (Swagger)", category: "Technical", description: "Interactive documentation for our backend APIs.", href: unifiedUrl },
  { title: "On-call & Incident Response Guide", category: "Technical", description: "What to do when things go wrong.", href: unifiedUrl },
  { title: "Expense Reimbursement Policy", category: "HR & Culture", description: "How to get reimbursed for company expenses.", href: unifiedUrl },
]

const videoResources = [
    { title: "Onboarding Kick-off", description: "Welcome to the team! Watch our kick-off meeting to get started.", thumbnail: "https://picsum.photos/400/225?grayscale&random=1", aiHint: "team meeting", duration: "15:30", href: unifiedUrl },
    { title: "Architecture Deep Dive", description: "An in-depth look at our system architecture.", thumbnail: "https://picsum.photos/400/225?grayscale&random=2", aiHint: "architecture diagram", duration: "45:12", href: unifiedUrl },
    { title: "CI/CD Pipeline Explained", description: "Learn how we build, test, and deploy our applications.", thumbnail: "https://picsum.photos/400/225?grayscale&random=3", aiHint: "automation pipeline", duration: "25:45", href: unifiedUrl },
    { title: "A Day in the Life of a Dev", description: "Follow one of our engineers through their daily tasks.", thumbnail: "https://picsum.photos/400/225?grayscale&random=4", aiHint: "developer coding", duration: "10:15", href: unifiedUrl },
    { title: "How to Use Jira Effectively", description: "A guide to our project management workflow.", thumbnail: "https://picsum.photos/400/225?grayscale&random=5", aiHint: "jira board", duration: "12:50", href: unifiedUrl },
]


export function KnowledgeTransferPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Knowledge Transfer</h1>
                <p className="text-muted-foreground">A curated list of essential resources for the Orbit team.</p>
            </div>
             <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {documents.map((doc) => (
                        <TableRow key={doc.title}>
                            <TableCell className="font-medium">{doc.title}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{doc.category}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{doc.description}</TableCell>
                            <TableCell className="text-right">
                                <Link href={doc.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-end gap-1">
                                    Open <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Git Branching Strategy</CardTitle>
                    <CardDescription>We follow a simplified GitFlow model. Here are the main branches and their purposes:</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 list-disc pl-5 text-sm">
                        <li><Badge variant="secondary">main</Badge> - Represents the production-ready code. Only merge from `develop` during a release.</li>
                        <li><Badge variant="secondary">develop</Badge> - This is our main development branch. All feature branches are created from and merged back into `develop`.</li>
                        <li><Badge variant="secondary">feature/...</Badge> - For new features. Branched from `develop`. E.g., `feature/TICKET-123-add-login-page`.</li>
                        <li><Badge variant="secondary">bugfix/...</Badge> - For fixing bugs in `develop`. Branched from `develop`. E.g., `bugfix/TICKET-456-fix-button-style`.</li>
                        <li><Badge variant="secondary">hotfix/...</Badge> - For critical bugs in `main`. Branched from `main` and merged into both `main` and `develop`.</li>
                    </ul>
                </CardContent>
            </Card>

            <div>
                 <h2 className="text-2xl font-bold tracking-tight">Video Resources</h2>
                 <p className="text-muted-foreground">Watch these recordings to get up to speed.</p>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full mt-6"
                >
                    <CarouselContent>
                        {videoResources.map((video, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="overflow-hidden group">
                                     <CardContent className="p-0 relative">
                                        <Link href={video.href} target="_blank" rel="noopener noreferrer">
                                            <Image src={video.thumbnail} alt={video.title} width={400} height={225} data-ai-hint={video.aiHint} className="w-full h-auto object-cover transition-transform group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <PlayCircle className="h-12 w-12 text-white" />
                                            </div>
                                            <Badge variant="secondary" className="absolute bottom-2 right-2">{video.duration}</Badge>
                                        </Link>
                                    </CardContent>
                                    <CardHeader>
                                        <CardTitle className="text-base">{video.title}</CardTitle>
                                        <CardDescription className="text-xs">{video.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="h-12 w-12 bg-background/50 hover:bg-primary/20" />
                    <CarouselNext className="h-12 w-12 bg-background/50 hover:bg-primary/20" />
                </Carousel>
            </div>
        </div>
    )
}
