"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, Compass, Library, Rocket, Target } from 'lucide-react'

const missionPoints = [
    {
        icon: Compass,
        title: "Your Personal Onboarding Guide",
        description: "Orbit is your personalized compass for navigating your first few weeks. We'll guide you through setting up your environment, understanding our workflows, and finding the resources you need to succeed."
    },
    {
        icon: Library,
        title: "A Centralized Knowledge Hub",
        description: "No more hunting through endless wikis and documents. Orbit brings together everything you need to know, from our tech stack and team structure to our git branching strategy and company values, all in one place."
    },
    {
        icon: Bot,
        title: "Interactive & Engaging Learning",
        description: "Get answers to your questions 24/7 with our AI-powered chatbot. Orbit provides an interactive way to learn, with checklists, personalized learning paths, and direct links to important resources."
    },
    {
        icon: Rocket,
        title: "Get Productive, Faster",
        description: "Our goal is to help you get up to speed and feel like a confident, contributing member of the team as quickly as possible. Orbit streamlines the onboarding process so you can focus on what you do best."
    },
    {
        icon: Target,
        title: "Built For You",
        description: "Your onboarding experience is tailored to your specific role. Whether you're a backend engineer, a QA specialist, or a data scientist, Orbit provides the learning paths and first tasks relevant to you."
    }
]

export function AboutUsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">About Orbit</h1>
                <p className="text-muted-foreground mt-2">Your first stop in the company galaxy, designed to make your onboarding seamless.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {missionPoints.map((point) => (
                    <Card key={point.title}>
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                             <div className="bg-primary/10 p-3 rounded-full">
                                <point.icon className="h-6 w-6 text-primary" />
                             </div>
                             <div className='flex-1'>
                                <CardTitle>{point.title}</CardTitle>
                             </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{point.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
