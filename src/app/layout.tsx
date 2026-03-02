import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altera Immobilien",
  description: "Your property developer in the Lörrach, Rheinfelden, and Schopfheim area",
};

import { CursorProvider } from "@/context/CursorContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-black selection:text-white`}>
        <CursorProvider>
          <SmoothScroll>
            <CustomCursor />
            <Header />
            <main>{children}</main>
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}
