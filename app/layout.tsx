import type { Metadata } from "next";
import { Geist, Geist_Mono, Trade_Winds } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tradeWinds = Trade_Winds({
  variable: "--font-trade-winds",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Portfolio of a web developer specializing in frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tradeWinds.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
