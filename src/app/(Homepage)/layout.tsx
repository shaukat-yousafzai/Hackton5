import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



// Load Geist Sans font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",  // Path to the GeistSans font in public/fonts
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Load Geist Mono font
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",  // Path to the GeistMono font in public/fonts
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}  // Apply global fonts
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
