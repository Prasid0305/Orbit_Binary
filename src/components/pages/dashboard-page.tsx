
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Book, CheckSquare, GitBranch, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useUser } from "@/context/user-context";
import { Skeleton } from "@/components/ui/skeleton";

const quickLinks = [
  {
    title: "Environment Setup",
    description: "Configure your development machine.",
    icon: Terminal,
    href: "/setup",
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Learning Modules",
    description: "Start your personalized learning.",
    icon: Book,
    href: "/learning",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "First Tasks",
    description: "Check your initial assignments.",
    icon: CheckSquare,
    href: "/tasks",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Knowledge Base",
    description: "Docs, guides, and more.",
    icon: GitBranch,
    href: "/docs",
    color: "bg-green-100 text-green-700",
  },
];

const initialOnboardingTasks = [
    { id: "policies", label: "Company Policies Acknowledged", checked: false },
    { id: "env-setup", label: "Environment Setup", checked: false },
    { id: "first-pr", label: "First PR Submitted", checked: false },
    { id: "buddy-sync", label: "Onboarding Buddy Sync", checked: false },
];


export function DashboardPage() {
  const { user, loading } = useUser();
  const [tasks, setTasks] = useState(initialOnboardingTasks);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter(task => task.checked).length;
    const newProgress = Math.round((completedTasks / tasks.length) * 100);
    setProgress(newProgress);
  }, [tasks]);

  const handleTaskCheckedChange = (taskId: string, checked: boolean) => {
    setTasks(prevTasks => 
        prevTasks.map(task => 
            task.id === taskId ? { ...task, checked } : task
        )
    );
  };
  
  if (loading) {
      return (
          <div className="space-y-8">
              <div className="space-y-2">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-24" />)}
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                  <Skeleton className="lg:col-span-2 h-64" />
                  <Skeleton className="h-64" />
              </div>
          </div>
      )
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hello, {user.firstName || 'New Joiner'}!</h1>
        <p className="text-muted-foreground">We're excited to have you on the team. Here's your onboarding dashboard to get you started.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Card key={link.title} className="hover:shadow-md transition-shadow">
            <Link href={link.href} className="block h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{link.title}</CardTitle>
                <div className={`rounded-full p-2 ${link.color}`}>
                  <link.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{link.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Onboarding Progress</CardTitle>
            <CardDescription>You're off to a great start! Complete these steps to finish your initial setup.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Progress</p>
              <p className="text-sm font-medium text-primary">{progress}% Complete</p>
            </div>
            <Progress value={progress} />
            <ul className="space-y-3 text-sm text-muted-foreground">
                {tasks.map(task => (
                     <li key={task.id} className="flex items-center gap-3">
                        <Checkbox 
                            id={task.id} 
                            checked={task.checked}
                            onCheckedChange={(checked) => handleTaskCheckedChange(task.id, !!checked)}
                        />
                        <Label htmlFor={task.id} className={cn("cursor-pointer", task.checked && "line-through text-muted-foreground/70")}>
                            {task.label}
                        </Label>
                    </li>
                ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-primary text-primary-foreground">
          <CardHeader>
            <div className="flex items-center gap-2">
                <Bot className="h-6 w-6" />
                <CardTitle>Ask Orbit</CardTitle>
            </div>
            <CardDescription className="text-primary-foreground/80">
                Have a question? Our AI assistant, Orbit, is here to help you 24/7.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-end">
             <Link href="/chatbot">
                <Button variant="secondary" className="w-full text-primary hover:bg-white/90">
                    Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

       <div className="grid gap-6 lg:grid-cols-3">
         <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>Team mPACT2WO</CardTitle>
                <CardDescription>Meet the amazing people you'll be working with.</CardDescription>
            </CardHeader>
            <CardContent>
                <Image src="/images/team-photo.png" width={828} height={605} alt="Team Photo" className="rounded-lg w-full h-auto" data-ai-hint="team business" />
            </CardContent>
         </Card>
       </div>
    </div>
  );
}
