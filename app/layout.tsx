import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

// TypeScript may complain about side-effect CSS imports when no global type
// declarations are present. Silence that specific check here.
// @ts-ignore: Implicitly importing CSS for side effects
import "./globals.css";
import EnableSmoothCursor from "@/components/custom/EnableSmoothCursor";

export const metadata: Metadata = {
  title: "Wesley Grant",
  description:
    "Full-stack developer, systems tinkerer, and retro tech enthusiast. Building elegant tools, bending protocols, and soldering hardware late into the night.",
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
    <html lang="en" className="dark cursor-none">
      <body className={` ${geistMono.variable} antialiased `}>
        {children}
        <EnableSmoothCursor />
      </body>
    </html>
  );
}
