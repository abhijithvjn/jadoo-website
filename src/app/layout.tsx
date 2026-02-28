import type { Metadata } from 'next';
import { Poppins, Volkhov, Google_Sans_Flex } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/Header';
import { HEADER_DATA } from '@/data/header.data';
import { FOOTER_DATA } from '@/data/footer.data';
import Footer from '@/components/layout/footer/Footer';

/* Heading Font - Volkhov (Bold headings) */
const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

/* Body Font - Poppins (Captions, paragraphs) */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const googleSans = Google_Sans_Flex({
  subsets: ['latin'],
  variable: '--font-google-sans',
});

export const metadata: Metadata = {
  title: 'Jadoo Travel',
  description: 'Travel Landing Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${volkhov.variable} ${poppins.variable} ${googleSans.variable}`}>
      <body className="antialiased bg-background text-foreground font-body overflow-x-hidden">
        <Header data={HEADER_DATA} />
        {children}
        <Footer data={FOOTER_DATA} />
      </body>
    </html>
  );
}
