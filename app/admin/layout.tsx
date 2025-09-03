import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Admin portal for managing messages",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
          {children}
        </div>
      </body>
    </html>
  )
}
