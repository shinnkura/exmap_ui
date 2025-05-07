import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EXMAP - 管理システム',
  description: 'EXMAPの管理ダッシュボード',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}