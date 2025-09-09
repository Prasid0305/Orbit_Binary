import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
  } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

type LearningResource = {
    title: string;
    description: string;
    image: string;
    aiHint: string;
    type: string;
    href: string;
};

type AgileScrumDialogProps = {
    resource: LearningResource;
};

const unifiedUrl = "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/";

export function AgileScrumDialog({ resource }: AgileScrumDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <Image src={resource.image} alt={resource.title} width={400} height={200} data-ai-hint={resource.aiHint} className="w-full h-32 object-cover" />
                    <CardHeader>
                        <Badge variant="outline" className="w-fit">{resource.type}</Badge>
                        <CardTitle className="pt-2">{resource.title}</CardTitle>
                        <CardDescription className="text-xs pt-1">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <div className="text-sm font-semibold text-primary flex items-center">
                            Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Unified Learning Resource</DialogTitle>
                    <DialogDescription>
                        All learning resources now point to a single, comprehensive course. Click below to start.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    <Button asChild variant="outline">
                        <Link href={unifiedUrl} target="_blank" rel="noopener noreferrer">
                            Go to AWS Cloud Practitioner Course
                        </Link>
                    </Button>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
