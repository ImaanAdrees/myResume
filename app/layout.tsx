import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://imaanadrees.vercel.app";
const SITE_NAME = "Imaan Adrees — Portfolio";
const DESCRIPTION =
  "Portfolio of Imaan Adrees — Computer Science graduate (BS, 2022–2026) and full-stack developer. I build interactive web, mobile and desktop apps with Next.js, React, React Native, Node.js and C#. Open to work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imaan Adrees — Full-Stack Developer & CS Graduate",
    template: "%s | Imaan Adrees",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Imaan Adrees", url: "https://github.com/ImaanAdrees" }],
  creator: "Imaan Adrees",
  publisher: "Imaan Adrees",
  generator: "Next.js",
  category: "technology",
  keywords: [
    "Imaan Adrees",
    "Imaan Adrees portfolio",
    "Imaan Adrees resume",
    "Imaan Adrees developer",
    "Full-Stack Developer",
    "Computer Science graduate",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "C# Developer",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "SmartScribe AI",
    "Pharmacy Management System",
    "Food Blogging Site",
    "Open to work",
    "Freelance Developer",
    "Hire Imaan Adrees",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Imaan Adrees — Full-Stack Developer & CS Graduate",
    description: DESCRIPTION,
    firstName: "Imaan",
    lastName: "Adrees",
    username: "ImaanAdrees",
    gender: "female",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imaan Adrees — Full-Stack Developer & CS Graduate",
    description: DESCRIPTION,
    creator: "@ImaanAdrees",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "P4Vz3wA55Mrq9AEUqizMLh8BvGLTqOP6TOwknVTipds",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
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
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
