import type { Metadata } from 'next';
import './globals.scss';
import QueryClientWrapper from '@/components/QueryClientWrapper';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'S.P AGENCY',
  description: 'Billboard company in Accra Ghana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientWrapper>
          <Nav />
          {children}
          <Footer />
        </QueryClientWrapper>
      </body>
    </html>
  );
}
