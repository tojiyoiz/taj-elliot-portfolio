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
  title: "Taj Elliot Gomez | Data Analytics & IT Portfolio",
  description:
    "Explore the portfolio of Taj Elliot Gomez, an IT and Data Analytics student specializing in data analytics, business intelligence, predictive modeling, and dashboard development.",
  keywords: [
    "Taj Elliot Gomez",
    "Data Analytics",
    "Business Intelligence",
    "Predictive Analytics",
    "Power BI",
    "Python",
    "IT Portfolio",
  ],
  authors: [{ name: "Taj Elliot Gomez" }],
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
