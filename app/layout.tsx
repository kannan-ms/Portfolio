import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StaticNavbar from "@/components/StaticNavbar"
import SimpleFooter from "@/components/SimpleFooter"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <StaticNavbar />
        {children}
        <SimpleFooter />
      </body>
    </html>
  )
}
