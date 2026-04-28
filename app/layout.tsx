import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import SimpleNavbar from "@/components/SimpleNavbar"
import SimpleFooter from "@/components/SimpleFooter"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-[var(--bg)] text-slate-900 antialiased`}>
        <SimpleNavbar />
        {children}
        <SimpleFooter />
      </body>
    </html>
  )
}
