
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  LayoutDashboard,
  TerminalSquare,
  BookOpenCheck,
  Users,
  BookCopy,
  Settings,
  CheckSquare,
  Info,
  FileText,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const OrbitLogo = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-primary"
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


export function SidebarNav() {
  const pathname = usePathname();
  const { state } = useSidebar();
  
  const isKnowledgeActive = () => {
    return pathname.startsWith("/docs") || pathname.startsWith("/learning") || pathname.startsWith("/tasks");
  };

  const [knowledgeOpen, setKnowledgeOpen] = useState(isKnowledgeActive);

  useEffect(() => {
    setKnowledgeOpen(isKnowledgeActive());
  }, [pathname]);


  const isActive = (path: string) => {
    return pathname === path;
  };
  

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
            <OrbitLogo />
            <span className="text-lg font-semibold tracking-wider">
              <span className="text-primary font-bold" style={{ fontSize: '0.9em' }}>o</span>
              <span className="uppercase">RBIT</span>
            </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard" passHref>
              <SidebarMenuButton as="a" isActive={isActive("/dashboard")} tooltip="Dashboard">
                <LayoutDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/chatbot" passHref>
              <SidebarMenuButton as="a" isActive={isActive("/chatbot")} tooltip="Orbit Chatbot">
                <Bot />
                <span>Orbit Chatbot</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/setup" passHref>
              <SidebarMenuButton as="a" isActive={isActive("/setup")} tooltip="Environment Setup">
                <TerminalSquare />
                <span>Environment Setup</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <Link href="/calendar" passHref>
              <SidebarMenuButton as="a" isActive={isActive("/calendar")} tooltip="Know Your Team">
                <Users />
                <span>Know Your Team</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem asChild>
            <Collapsible open={knowledgeOpen} onOpenChange={setKnowledgeOpen}>
              <CollapsibleTrigger asChild>
                 <SidebarMenuButton isActive={isKnowledgeActive()} tooltip="Knowledge Transfer">
                    <BookCopy />
                    <span>Knowledge Transfer</span>
                     <ChevronRight className={cn(
                        "ml-auto h-4 w-4 shrink-0 transition-transform duration-200",
                        knowledgeOpen && "rotate-90"
                      )} />
                  </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                       <Link href="/docs" passHref>
                         <SidebarMenuSubButton as="a" isActive={pathname === '/docs'}>
                            <FileText/>
                            <span>Docs & Links</span>
                        </SidebarMenuSubButton>
                      </Link>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Link href="/learning" passHref>
                        <SidebarMenuSubButton as="a" isActive={pathname === '/learning'}>
                            <BookOpenCheck/>
                            <span>Learning Paths</span>
                        </SidebarMenuSubButton>
                      </Link>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Link href="/tasks" passHref>
                        <SidebarMenuSubButton as="a" isActive={pathname === '/tasks'}>
                            <CheckSquare/>
                            <span>First Tasks</span>
                        </SidebarMenuSubButton>
                      </Link>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>

           <SidebarMenuItem>
            <Link href="/about" passHref>
              <SidebarMenuButton as="a" isActive={isActive("/about")} tooltip="About Us">
                <Info />
                <span>About Us</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              <div className="flex items-center gap-3 w-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://storage.googleapis.com/res-studio-user-images/projects/6f0b4d4a-3844-42f0-9f20-179b5c5e8c15/user_content/53b9a0a1-a62c-47d0-8f92-5645a2717e3f.jpg" alt="New Joiner" data-ai-hint="person avatar"/>
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
                {state === 'expanded' && (
                  <div className="text-left">
                    <p className="text-sm font-medium">New Joiner</p>
                    <p className="text-xs text-muted-foreground">Welcome!</p>
                  </div>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mb-2" side="top" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </>
  );
}
