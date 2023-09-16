import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Store from '@/components/Store/WeatherStore';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Task',
  description:
    'This is a simple weather app created by Roy Tennenbaum to showcase his frontend development skills. This app tracks weather in various cities across the globe.',
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} m-0 flex h-full min-h-screen flex-col bg-cover bg-no-repeat`}
      >
        <header>
          <Navbar />
        </header>
        <Store>{children}</Store>
        <Footer />
      </body>
    </html>
  );
}
