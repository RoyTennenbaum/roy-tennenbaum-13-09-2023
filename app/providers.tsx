'use client';

import { ThemeProvider } from 'next-themes';
import { Props } from '@/types/global';

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
