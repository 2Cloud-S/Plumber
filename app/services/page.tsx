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

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

export default function ServicesPage() {
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
          <div className="space-x-4">
            <Link href="/maintenance-plans">
              <Button variant="secondary">Maintenance Plans</Button>
            </Link>
            <Link href="/get-free-quote">
              <Button variant="secondary">Schedule a Service</Button>
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Plumbing and Heating
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/maintenance-plans" className="text-gray-600 hover:text-primary transition-colors">Maintenance Plans</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-12 flex-grow px-4">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold mb-8 text-navy text-center"
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <service.icon className="w-12 h-12 text-primary mb-2 sm:mb-0 sm:mr-4" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-center sm:text-left">{service.title}</h3>
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
              <motion.div className="mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/get-free-quote">
                  <Button className="w-full bg-primary text-white hover:bg-primary/80">
                    Get a Quote
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Plumbing and Heating</h3>
            <p className="flex items-center justify-center md:justify-start">
              <MapPin size={16} className="mr-2" />
              XXX Center, VT
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-200 w-full sm:w-auto">Contact Us</Button>
            </Link>
            <Link href="/get-free-quote">
              <Button className="w-full sm:w-auto">Schedule Service</Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}