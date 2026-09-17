import type { Metadata } from 'next';
import './globals.scss';
import QueryClientWrapper from '@/components/QueryClientWrapper';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'SP Agency GHANA',
  description: `Established in 2001, SP AGENCY LTD is a leading advertising, multimedia, and marketing agency dedicated to delivering innovative and impactful solutions for businesses and organizations.
  `,

  metadataBase: new URL('https://spagencyghana.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'SP Agency GHANA',
    description: `Established in 2001, SP AGENCY LTD is a leading advertising, multimedia, and marketing agency dedicated to delivering innovative and impactful solutions for businesses and organizations.
    `,
    url: 'https://spagencyghana.com',
    siteName: 'SP Agency GHANA',
    images: [
      {
        url: '/logo.jpg', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'SP Agency GHANA',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SP Agency GHANA',
    description: `Established in 2001, SP AGENCY LTD is a leading advertising, multimedia, and marketing agency dedicated to delivering innovative and impactful solutions for businesses and organizations.`,
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-qb-installed="true" suppressHydrationWarning={true}>
      <body cz-shortcut-listen="true">
        <QueryClientWrapper>
          <Nav />
          {children}
          <Footer />
        </QueryClientWrapper>
      </body>
    </html>
  );
}
