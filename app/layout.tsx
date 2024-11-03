import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-open-sans'
});

const merriweather = Merriweather({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${merriweather.variable}`}>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
