"use client";

import { Sidebar, SidebarInset, SidebarRail } from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import Link from "next/link";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";
import { usePathname } from "next/navigation";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Don't show sidebar on the onboarding page
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <Sidebar>
        <SidebarNav />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-4 sm:p-6 lg:p-8 h-full">
            {children}
        </div>
      </SidebarInset>
       <Button
          asChild
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          size="icon"
        >
          <Link href="/chatbot">
            <Bot className="h-8 w-8" />
          </Link>
        </Button>
    </>
  );
}
