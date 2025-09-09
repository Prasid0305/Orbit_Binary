
"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useUser } from "@/context/user-context";
import { firstTasksData } from "@/lib/onboarding-data/first-tasks";
import { Skeleton } from "@/components/ui/skeleton";

const statusColors: Record<string, string> = {
    "Done": "bg-green-500/20 text-green-300 border-green-500/30",
    "In Progress": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Todo": "bg-slate-500/20 text-slate-300 border-slate-500/30",
}

export function FirstTasksPage() {
    const { user, loading } = useUser();
    const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({});

    const handleCheckedChange = (id: string, checked: boolean) => {
        setCheckedItems(prev => ({ ...prev, [id]: checked }));
    };

    // Fallback to a default if position is not set or not found
    const taskSections = firstTasksData[user.position as keyof typeof firstTasksData] || firstTasksData.default;

    if (loading) {
        return (
            <div className="space-y-8">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <Skeleton className="h-64" />
                    <Skeleton className="h-64" />
                </div>
                <Skeleton className="h-32" />
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Your First Tasks</h1>
                <p className="text-muted-foreground">Here are your initial assignments to get you started as a {user.position || 'new joiner'}.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {taskSections.map((section, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-4">
                                {section.tasks.map(task => (
                                    <li key={task.id} className="flex items-start gap-4">
                                        <Checkbox 
                                            id={task.id}
                                            className="mt-1"
                                            checked={!!checkedItems[task.id]}
                                            onCheckedChange={(checked) => handleCheckedChange(task.id, !!checked)}
                                        />
                                        <div className="flex-1">
                                            <Label 
                                                htmlFor={task.id} 
                                                className={cn("cursor-pointer text-base", checkedItems[task.id] && "line-through text-muted-foreground/70")}
                                            >
                                                {task.label}
                                            </Label>
                                            <p className="text-xs text-muted-foreground">{task.details}</p>
                                        </div>
                                        <Badge variant="outline" className={cn("text-xs", statusColors[task.status])}>{task.status}</Badge>
                                    </li>
                                ))}
                           </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Relevant Links</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="list-none space-y-2">
                        <li>
                            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-start gap-1">
                                Go to Jira Board <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-start gap-1">
                                Review Git Branching Strategy <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
