import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Task',
  description:
    'This is a simple weather app created by Roy Tennenbaum to showcase his frontend development skills. This app tracks weather in various cities across the globe.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} m-0 flex h-full min-h-screen flex-col bg-cover bg-no-repeat`}
      >
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
