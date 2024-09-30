'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Droplet, Wrench, ShowerHead, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const serviceIcons = [
  { 
    icon: Droplet, 
    title: "Leak Repair", 
    description: "Swift and effective solutions for all types of leaks, from dripping faucets to hidden pipe leaks.",
    pricing: "Starting at $150 for basic repairs",
    benefits: [
      "Prevent water damage and mold growth",
      "Reduce water bills",
      "Extend the life of your plumbing system"
    ]
  },
  { 
    icon: Wrench, 
    title: "Installation", 
    description: "Expert installation of plumbing fixtures and systems, including sinks, toilets, water heaters, and more.",
    pricing: "Starting at $200 for basic fixture installation",
    benefits: [
      "Ensure proper functionality and efficiency",
      "Prevent future leaks and issues",
      "Upgrade to modern, water-saving fixtures"
    ]
  },
  { 
    icon: ShowerHead, 
    title: "Bathroom Remodel", 
    description: "Transform your bathroom with our comprehensive remodeling services, from design to installation.",
    pricing: "Custom quotes based on project scope, starting at $5,000",
    benefits: [
      "Increase your home's value",
      "Create a more functional and beautiful space",
      "Implement water-efficient fixtures and designs"
    ]
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={20} />
            <span>+1 860-371-1291</span>
            <Mail size={20} />
            <span>Pipedreamplumbingllc@yahoo.com</span>
          </div>
          <Link href="/get-free-quote">
            <Button variant="secondary">Schedule a Service</Button>
          </Link>
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Pipedream Plumbing CT
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-12 flex-grow">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-navy text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceIcons.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-12 h-12 text-primary mr-4" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-semibold text-primary mb-4">{service.pricing}</p>
              <h4 className="text-lg font-semibold mb-2">Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/get-free-quote">
                  <Button className="w-full bg-primary text-white hover:bg-primary/80">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl mb-4">Need a service not listed here? We offer a wide range of plumbing solutions!</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/80">
              Contact Us for Custom Services
            </Button>
          </Link>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Pipedream Plumbing CT</h3>
            <p className="flex items-center">
              <MapPin size={16} className="mr-2" />
              Rye Street, East Windsor, CT
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/contact">
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-200">Contact Us</Button>
            </Link>
            <Link href="/get-free-quote">
              <Button>Schedule Service</Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}