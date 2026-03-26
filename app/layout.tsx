import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const googleSans = localFont({
  src: [
    // ← CHANGE THESE PATHS + FILENAMES to match your exact files
    {
      path: "../public/fonts/GoogleSans-Bold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
  display: "swap",  
  preload: true,
});

const outfit = Outfit({
  weight : '400',
  variable : "--font-outfit"
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victors Ololous Portfolio",
  description: "An amaxing portfolio by an amazing dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
