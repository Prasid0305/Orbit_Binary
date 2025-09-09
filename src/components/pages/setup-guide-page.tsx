"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Code, GitCommit, Link as LinkIcon, Monitor, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const setupSectionsData = [
    {
        title: "Core Software",
        icon: Monitor,
        items: [
            { id: "node", label: "Node.js (v20.x or later)" },
            { id: "pnpm", label: "pnpm package manager" },
            { id: "git", label: "Git version control" },
            { id: "vscode", label: "Visual Studio Code" },
        ]
    },
    {
        title: "VS Code Extensions",
        icon: Code,
        items: [
            { id: "eslint", label: "ESLint - for code linting" },
            { id: "prettier", label: "Prettier - Code formatter" },
            { id: "tailwind-intellisense", label: "Tailwind CSS IntelliSense" },
            { id: "gitlens", label: "GitLens — Git supercharged" },
        ]
    },
    {
        title: "Repository Setup",
        icon: GitCommit,
        items: [
            { id: "clone-repo", label: "Clone the main repository from GitHub" },
            { id: "install-deps", label: "Install dependencies using `pnpm install`" },
            { id: "run-dev", label: "Run the development server with `pnpm dev`" },
            { id: "run-genkit", label: "Run the Genkit AI server with `pnpm genkit:dev`" },
        ]
    },
    {
        title: "Environment & Access",
        icon: Settings,
        items: [
            { id: "env-file", label: "Create a `.env` file from `.env.example`" },
            { id: "api-key", label: "Add your Google AI API key to the `.env` file" },
            { id: "jira-access", label: "Get access to the team's Jira board" },
            { id: "confluence-access", label: "Get access to Confluence for documentation" },
        ]
    }
];

const unifiedUrl = "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/";

export function SetupGuidePage() {
    const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({});

    const handleCheckedChange = (id: string, checked: boolean) => {
        setCheckedItems(prev => ({ ...prev, [id]: checked }));
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Environment Setup Guide</h1>
                <p className="text-muted-foreground">Follow these steps to get your development environment ready.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {setupSectionsData.map((section, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <section.icon className="h-6 w-6 text-primary" />
                                <CardTitle>{section.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-4">
                                {section.items.map(item => (
                                    <li key={item.id} className="flex items-center gap-3">
                                        <Checkbox 
                                            id={item.id} 
                                            checked={!!checkedItems[item.id]}
                                            onCheckedChange={(checked) => handleCheckedChange(item.id, !!checked)}
                                        />
                                        <Label 
                                            htmlFor={item.id} 
                                            className={cn("cursor-pointer", checkedItems[item.id] && "line-through text-muted-foreground/70")}
                                        >
                                            {item.label}
                                        </Label>
                                    </li>
                                ))}
                           </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <LinkIcon className="h-6 w-6 text-primary" />
                        <CardTitle>Helpful Links</CardTitle>
                    </div>
                    <CardDescription>If you get stuck, these links might be helpful.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                        <li><a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Get a Google AI API Key</a></li>
                        <li><a href={unifiedUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Internal IT Helpdesk Portal</a></li>
                        <li><a href={unifiedUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Guide to setting up SSH keys for GitHub</a></li>
                        <li><a href={unifiedUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Molex VPN Setup Instructions</a></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
