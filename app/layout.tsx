import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import localFont from '@next/font/local'

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-SemiBoldItalic.ttf',
      weight: '400'
    }
  ],
  variable: '--font-poppins'
})

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
    <html lang='en' className={`!scroll-smooth ${poppins.variable} font-sans `}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
