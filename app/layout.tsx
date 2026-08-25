import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Quang Hiển | Senior Front-End Developer",
  description:
    "Portfolio của Nguyễn Quang Hiển - Senior Front-End Developer với 6 năm kinh nghiệm trong React, TypeScript, Performance và Scalable UI.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Performance",
    "Senior Developer",
  ],
  authors: [
    { name: "Nguyễn Quang Hiển", url: "https://github.com/hiennguyen" },
  ],
  openGraph: {
    title: "Nguyễn Quang Hiển | Senior Front-End Developer",
    description:
      "Portfolio của Nguyễn Quang Hiển - Senior Front-End Developer với 6 năm kinh nghiệm trong React, TypeScript, Performance và Scalable UI.",
    url: "https://nguyenhien.dev",
    siteName: "Nguyễn Quang Hiển Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nguyễn Quang Hiển - Senior Front-End Developer",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
