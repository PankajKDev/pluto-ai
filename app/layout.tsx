import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pluto AI",
  description: "An AI Powered Solution to Practise Interviews",
  openGraph: {
    title: "Pluto AI - AI Interviews",
    description: "Pluto AI is an advanced AI-powered interview application.",
    images: "/ogimage.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" className="dark">
        <body className={`${monaSans.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
