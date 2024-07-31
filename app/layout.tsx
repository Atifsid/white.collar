import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Random Studios',
  description: 'This a random description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
