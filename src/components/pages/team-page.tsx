
"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useUser } from '@/context/user-context'
import { teamData, TeamMember } from '@/lib/onboarding-data/team-data'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function TeamPage() {
    const { user, loading } = useUser();
    const teamName = user.team ? user.team.charAt(0).toUpperCase() + user.team.slice(1) : 'Orbit';

    if (loading) {
        return (
            <div className="space-y-8">
                 <div className="space-y-2">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-48" />)}
                </div>
            </div>
        )
    }

    // Special case for teams to show interactive list
    if (user.team === 'corrosion' || user.team === 'platform' || user.team === 'aircompliance' || user.team === 'pipeline' || user.team === 'analytics') {
        const teamMembers = teamData[user.team as keyof typeof teamData];
        const memberMap = new Map(teamMembers.map(m => [m.id, m.name]));

        const getManagerName = (reportsToId: string | null) => {
            if (!reportsToId) return "No direct manager in this team.";
            return memberMap.get(reportsToId) || "Manager not found";
        }

        return (
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Know Your Team: {teamName}</h1>
                    <p className="text-muted-foreground">Click on a team member to see who they report to.</p>
                </div>
                <Card>
                    <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                            {teamMembers.map(member => (
                                <AccordionItem key={member.id} value={member.id}>
                                    <AccordionTrigger>
                                        <div className='flex items-center gap-4'>
                                             <Avatar>
                                                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                                                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-semibold text-left">{member.name}</div>
                                                <div className="text-sm text-muted-foreground text-left">{member.role}</div>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-16 text-sm">
                                            <span className="font-semibold">Reports to:</span> {getManagerName(member.reportsTo)}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const members = teamData[user.team as keyof typeof teamData] || teamData.default;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Know Your Team: {teamName}</h1>
                <p className="text-muted-foreground">Meet the amazing people you'll be working with.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                    <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <Image src={member.avatar} alt={member.name} width={100} height={100} data-ai-hint={member.aiHint} className="rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-muted-foreground">{member.role}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
