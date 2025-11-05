import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navigation from "@/components/shared/Navigation";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Providers } from "@/provider/sessionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilderness Botswana - Luxury Safari Adventures",
  description:
    "Experience the soul of the safari with Wilderness Botswana. Luxury camps, unforgettable wildlife encounters, and sustainable tourism in the heart of Africa.",
  keywords:
    "Botswana safari, luxury safari, Okavango Delta, wildlife tours, African safari",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://tanaka-images.s3.us-east-1.amazonaws.com"
        />
        <link
          rel="dns-prefetch"
          href="https://tanaka-images.s3.us-east-1.amazonaws.com"
        />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
