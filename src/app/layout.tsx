import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

//components

import Navbar from './components/Navbar'

const poppins = Poppins({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: "H E I N E K E N",
  description: "Heineken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
