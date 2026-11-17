import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";


import "./globals.css";
import EnableSmoothCursor from "@/components/custom/EnableSmoothCursor";

export const metadata: Metadata = {
  title: "Wesley Grant — Developer",
  description:
    "A personal page for Wesley Grant, developer, maker and curious tinkerer.",
  keywords: [
    "Full-stack Developer",
    "Systems Tinkerer",
    "React",
    "Next.js",
    "Node.js",
    "Linux",
    "Game Emulation",
    "Retro Tech",
    "Personal Portfolio",
  ],
  authors: [{ name: "Wesley Grant", url: "https://wesgrant.dev" }],
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={` ${geistMono.variable} antialiased `}>
        {children}
        <EnableSmoothCursor />
      </body>
    </html>
  );
}
