import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import Footer from "@/components/common/Footer";
import Navigation from "@/components/shared/Navigation";
import SessionProvider from "@/components/providers/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilderness Botswana - Luxury Safari Adventures",
  description: "Experience the soul of the safari with Wilderness Botswana. Luxury camps, unforgettable wildlife encounters, and sustainable tourism in the heart of Africa.",
  keywords: "Botswana safari, luxury safari, Okavango Delta, wildlife tours, African safari",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://tanaka-images.s3.us-east-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://tanaka-images.s3.us-east-1.amazonaws.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          <Navigation />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
