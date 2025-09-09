
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useUser } from "@/context/user-context";

const OrbitLogo = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-primary mx-auto"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 22C14.7614 22 17 17.5228 17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="2"
        ry="2"
        fill="currentColor"
      />
    </svg>
  );

export function OnboardingPage() {
    const { user, setUser } = useUser();
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [experience, setExperience] = useState(user.experience || "");
    const [position, setPosition] = useState(user.position || "");
    const [team, setTeam] = useState(user.team || "");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUser({
            firstName,
            lastName,
            experience,
            position,
            team,
        });
        router.push(`/dashboard`);
    };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-background p-4">
       <Card className="w-full max-w-2xl mx-auto bg-card text-card-foreground">
            <CardHeader className="text-center">
                <OrbitLogo />
                <h1 className="text-4xl font-bold tracking-tight mt-4">
                    Welcome to{' '}
                    <span className="text-primary font-bold" style={{ fontSize: '0.9em' }}>o</span>
                    <span className="uppercase">RBIT</span>
                </h1>
                <p className="text-muted-foreground mt-2">Your First Stop, in the company Galaxy.</p>
            </CardHeader>
            <CardHeader>
                <CardTitle>Tell us about yourself</CardTitle>
                <CardDescription>This will help us tailor your onboarding experience.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                            <Label htmlFor="experience">Experience Type</Label>
                            <Select onValueChange={setExperience} value={experience}>
                                <SelectTrigger id="experience" className="w-full">
                                <SelectValue placeholder="Select your experience" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="new-grad">New Grad</SelectItem>
                                <SelectItem value="experienced">Experienced</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                            <div className="space-y-2">
                            <Label htmlFor="position">Position</Label>
                            <Select onValueChange={setPosition} value={position}>
                                <SelectTrigger id="position" className="w-full">
                                <SelectValue placeholder="Select your position" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="backend">Backend</SelectItem>
                                <SelectItem value="frontend">Frontend</SelectItem>
                                <SelectItem value="qa">QA</SelectItem>
                                <SelectItem value="devops">DevOps</SelectItem>
                                <SelectItem value="data-science">Data Science</SelectItem>
                                <SelectItem value="product-management">Product Management</SelectItem>
                                </SelectContent>
                            </Select>
                           </div>
                            <div className="space-y-2">
                            <Label htmlFor="team">Team Name</Label>
                            <Select onValueChange={setTeam} value={team}>
                                <SelectTrigger id="team" className="w-full">
                                <SelectValue placeholder="Select your team" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="corrosion">Corrosion</SelectItem>
                                <SelectItem value="aircompliance">Aircompliance</SelectItem>
                                <SelectItem value="pipeline">Pipeline</SelectItem>
                                <SelectItem value="analytics">Analytics</SelectItem>
                                <SelectItem value="platform">Platform</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                        </div>
                         <Button type="submit" className="w-full mt-6" disabled={!firstName || !lastName || !position}>
                            Start Onboarding <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </CardContent>
       </Card>
    </div>
  );
}
