'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Wrapper from '@/components/Wrapper';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'S.P AGENCY',
  description: 'Billboard company in Accra Ghana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const provider = new QueryClient();
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={provider}>
          <Wrapper>{children}</Wrapper>
        </QueryClientProvider>

        <div id="modal"></div>
      </body>
    </html>
  );
}
