'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Calendar, Shield, AlertTriangle, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const maintenancePlans = [
  {
    title: "Annual Maintenance",
    icon: Calendar,
    description: "Comprehensive yearly check-up to keep your plumbing in top shape.",
    price: "$199/year",
    features: [
      "Full system inspection",
      "Drain cleaning",
      "Water pressure check",
      "10% discount on repairs"
    ]
  },
  {
    title: "Bi-Annual Maintenance",
    icon: Shield,
    description: "Twice-yearly inspections for proactive plumbing care.",
    price: "$349/year",
    features: [
      "Two full system inspections",
      "Priority scheduling",
      "Water heater flush",
      "15% discount on repairs"
    ]
  }
]

const benefits = [
  { icon: AlertTriangle, title: "Prevent Emergencies", description: "Catch small issues before they become big problems." },
  { icon: Zap, title: "Improve Efficiency", description: "Ensure your plumbing system runs at peak performance." },
  { icon: Shield, title: "Save Money", description: "Avoid costly repairs with proactive maintenance." },
]

export default function MaintenancePlansPage() {
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
          <Link href="/get-free-quote">
            <Button variant="secondary">Schedule a Service</Button>
          </Link>
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
          Plumbing Maintenance Plans
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {maintenancePlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {plan.icon && <plan.icon className="w-8 h-8 text-primary mr-3" />}
                <h3 className="text-2xl font-semibold">{plan.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-white hover:bg-primary/80">
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-8 text-navy text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Benefits of Regular Maintenance
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              {benefit.icon && <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />}
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
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
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/80">Schedule Service</Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}