import type {Metadata} from 'next';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MainLayout } from '@/components/main-layout';
import { Toaster } from '@/components/ui/toaster';
import { UserProvider } from '@/context/user-context';

export const metadata: Metadata = {
  title: 'Orbit - First stop in your company galaxy',
  description: 'Your guide to getting started with the mPACT2WO team at Molex.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libertinus+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <UserProvider>
          <SidebarProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </SidebarProvider>
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}
