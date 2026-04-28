"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Badge } from "./ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "#contact",
    color: "from-red-500 to-red-600",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/kannan-ms",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kannanmayilsamy/",
    color: "from-blue-600 to-blue-700",
  },
]

export default function SimpleContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [copied, setCopied] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error")
      return
    }

    if (!formData.email.includes("@")) {
      setFormStatus("error")
      return
    }

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await res.json()

      if (res.ok && result.success) {
        setFormStatus("success")
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setFormStatus("idle")
        }, 3000)
      } else {
        console.error("API error:", result)
        setFormStatus("error")
      }
    } catch (err) {
      console.error("Network error:", err)
      setFormStatus("error")
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="section-heading mb-14">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-copy">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Card className="surface-card border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-950">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full rounded-2xl border-slate-200 bg-white/90 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full rounded-2xl border-slate-200 bg-white/90 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      required
                      rows={5}
                      className="w-full rounded-2xl border-slate-200 bg-white/90 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500"
                    />
                  </div>

                  {formStatus === "success" && (
                    <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 rounded-2xl bg-rose-50 p-3 text-rose-700">
                      <AlertCircle className="h-5 w-5" />
                      <span>Please fill in all fields correctly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={!isFormValid || formStatus === "success"}
                    className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 py-6 text-base font-semibold shadow-[0_18px_40px_-18px_rgba(79,70,229,0.8)] hover:from-indigo-700 hover:via-violet-700 hover:to-sky-700 disabled:opacity-50"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-950">Let&apos;s connect</h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                I&apos;m active on various platforms and always happy to connect with fellow developers,
                data analysts, and tech enthusiasts. Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social) =>
                social.name === "Email" ? (
                  <button
                    key={social.name}
                    onClick={() => {
                      navigator.clipboard.writeText("kannanmayilsamy04@gmail.com")
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    }}
                    className={`flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r ${social.color} p-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.5)]`}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="font-medium">{social.name}</span>
                    <span className="ml-2 text-xs">kannanmayilsamy04@gmail.com</span>
                    {copied && (
                      <span className="ml-2 rounded-full bg-green-700 px-2 py-1 text-xs text-green-100">
                        Copied!
                      </span>
                    )}
                  </button>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 rounded-2xl bg-gradient-to-r ${social.color} p-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.5)]`}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ),
              )}
            </div>

            <Card className="surface-card border-0 bg-white/70 shadow-none">
              <CardContent className="p-6">
                <h4 className="mb-3 font-semibold text-slate-950">What I&apos;m looking for</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Data Analysis Projects</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">DevOps Opportunities</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Open Source Collaboration</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Tech Mentorship</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
