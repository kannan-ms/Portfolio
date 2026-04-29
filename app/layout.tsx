import type { Metadata } from "next"
import { Playfair_Display, Sora } from "next/font/google"
import "./globals.css"
import SimpleNavbar from "@/components/SimpleNavbar"
import SimpleFooter from "@/components/SimpleFooter"

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Portfolio - Data Analyst & DevOps Enthusiast",
  description: "Personal portfolio showcasing skills in data analysis, DevOps, and software development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${playfair.variable} bg-[var(--bg)] text-slate-900 antialiased`}>
        <SimpleNavbar />
        {children}
        <SimpleFooter />
      </body>
    </html>
  )
}
