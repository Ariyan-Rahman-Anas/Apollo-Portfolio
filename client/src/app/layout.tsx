import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ariyan Rahman Anas',
  description: 'This is the portfolio of Ariyan Rahman Anas, who is full stack web developer with 2+ years of professional experience. Working on MERN and PERN stack.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <div className='flex w-full'>
              <AppSidebar />
              <main className='bg-muted dark:bg-black pl-3 pb-4 pr-4 w-full min-h-screen flex1 min-w-0'>
                <div className='sticky top-0 py-1.5 bg-muted dark:bg-black z-50'>
                  <SidebarTrigger className='cursor-pointer' />
                </div>
                <div>
                  {children}
                </div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}