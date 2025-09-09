
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/user-context";
import { learningPathsData } from "@/lib/onboarding-data/learning-paths";
import { AgileScrumDialog } from "@/components/agile-scrum-dialog";
import { Skeleton } from "@/components/ui/skeleton";


export function LearningPathsPage() {
    const { user, loading } = useUser();
    // Fallback to a default if position is not set or not found
    const learningResources = learningPathsData[user.position as keyof typeof learningPathsData] || learningPathsData.default;

    if (loading) {
        return (
            <div className="space-y-8">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
                 <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
                    {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-64" />)}
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Personalized Learning Path</h1>
                <p className="text-muted-foreground">Recommended resources for the <span className="font-semibold text-primary">{user.position}</span> role.</p>
            </div>
             <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
                {learningResources.map(resource => {
                   if (resource.id === 'agile-scrum') {
                       return <AgileScrumDialog key={resource.title} resource={resource} />;
                   }
                   return (
                       <Card key={resource.title} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                            <Image src={resource.image} alt={resource.title} width={400} height={200} data-ai-hint={resource.aiHint} className="w-full h-32 object-cover" />
                            <CardHeader>
                                <Badge variant="outline" className="w-fit">{resource.type}</Badge>
                                <CardTitle className="pt-2">{resource.title}</CardTitle>
                                <CardDescription className="text-xs pt-1">{resource.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <Link href={resource.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline flex items-center">
                                    Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                       </Card>
                   );
                })}
            </div>
        </div>
    );
}
