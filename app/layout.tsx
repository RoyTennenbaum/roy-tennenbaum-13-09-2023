import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Store from '@/components/Store/WeatherStore';
import { ToastContainer } from 'react-toastify';
import { Props } from '@/types/global';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Task',
  description:
    'This is a simple weather app created by Roy Tennenbaum to showcase his frontend development skills. This app tracks weather in various cities across the globe.',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-modeLightMainBg dark:bg-modeDarkMainBg text-modeLightText dark:text-modeDarkText m-0 flex h-full min-h-screen flex-col`}
      >
        <Providers>
          <Store>
            <header>
              <Navbar />
            </header>
            {children}
          </Store>
          <ToastContainer position="top-left" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
