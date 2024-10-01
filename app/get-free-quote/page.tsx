'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function GetFreeQuote() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you with a quote soon!",
    })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={20} />
            <span>+1 000-000-0000</span>
            <Mail size={20} />
            <span>xxx@mail.com</span>
          </div>
          {/* ... rest of the header ... */}
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Plumbing and Heating
          </Link>
          {/* ... rest of the nav ... */}
        </div>
      </nav>

      <main className="container mx-auto py-12 flex-grow">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-navy text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get a Free Quote
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email address" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Your phone number" required />
            </div>

            <div className="space-y-2">
              <Label>Service Type</Label>
              <RadioGroup defaultValue="repair">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="repair" id="repair" />
                    <Label htmlFor="repair">Repair</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="installation" id="installation" />
                    <Label htmlFor="installation">Installation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maintenance" id="maintenance" />
                    <Label htmlFor="maintenance">Maintenance</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your plumbing needs" rows={4} />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-aqua text-navy hover:bg-aqua/80 transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </Button>
          </form>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Plumbing and Heating</h3>
            <p className="flex items-center">
              <MapPin size={16} className="mr-2" />
              XXX Center, VT
            </p>
          </div>
          {/* ... rest of the footer ... */}
        </div>
      </footer>
    </div>
  )
}