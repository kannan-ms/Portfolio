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
  AlertCircle
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
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Form validation
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
      const result = await res.json();
      if (res.ok && result.success) {
        setFormStatus("success")
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setFormStatus("idle")
        }, 3000)
      } else {
        console.error("API error:", result);
        setFormStatus("error")
      }
    } catch (err) {
      console.error("Network error:", err);
      setFormStatus("error")
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full"
                    />
                  </div>

                  {/* Form Status Messages */}
                  {formStatus === "success" && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
                      <AlertCircle className="w-5 h-5" />
                      <span>Please fill in all fields correctly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={!isFormValid || formStatus === "success"}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Let's connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm active on various platforms and always happy to connect with fellow developers, 
                data analysts, and tech enthusiasts. Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                social.name === "Email" ? (
                  <button
                    key={social.name}
                    onClick={() => {
                      navigator.clipboard.writeText('kannanmayilsamy04@gmail.com');
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                    <span className="text-xs ml-2">kannanmayilsamy04@gmail.com</span>
                    {copied && (
                      <span className="ml-2 text-green-200 bg-green-700 px-2 py-1 rounded text-xs">Copied!</span>
                    )}
                  </button>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                )
              ))}
            </div>

            {/* Additional Info */}
            <Card className="border-0 shadow-md bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What I'm looking for
                </h4>
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
