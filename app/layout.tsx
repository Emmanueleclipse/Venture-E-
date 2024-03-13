import "./globals.css";
import Header from "@/components/Header";
import React from "react";
import { StackProvider } from "@stackframe/stack";
import { stackApp } from "@/app/lib/stack";
import { Inter as FontSans } from "next/font/google"
// import { cn } from "../@/lib/utils"
import {cn} from '../lib/utils'


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body         className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <StackProvider app={stackApp}>
        
          <Header />
          {children}
        </StackProvider>
      </body>
    </html>
  );
}