import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expert Contract Drafting & Freelancing Course | Lawctopus",
  description: "Master contract drafting, build a freelancing career, and learn from industry experts. 54 live sessions, 24+ agreements, lifetime access. Enroll now!",
  keywords: "contract drafting course, legal freelancing, law course, Lawctopus, contract law, legal education",
  icons: {
    icon: "/cropped-Favicons-03-192x192.png",
    shortcut: "/cropped-Favicons-03-192x192.png",
    apple: "/cropped-Favicons-03-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
