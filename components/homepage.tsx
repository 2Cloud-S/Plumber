'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ChevronRight, Droplet, Wrench, ShowerHead } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import Image from 'next/image'

const serviceIcons = [
  { icon: Droplet, title: "Leak Repair" },
  { icon: Wrench, title: "Installation" },
  { icon: ShowerHead, title: "Bathroom Remodel" },
]

export function HomepageComponent() {
  // Change this line
  const [isHeaderVisible] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        className="bg-primary text-white py-4 fixed w-full z-50"
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
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
      </motion.header>

      <nav className="bg-white shadow-md sticky top-0 z-40 pt-16">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pipedream Plumbing CT
          </motion.div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto flex items-center">
            <motion.div 
              className="w-1/2 pr-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Expert Residential Plumbing Services</h1>
              <p className="text-xl mb-6">Trusted solutions for all your plumbing needs in East Windsor, Connecticut</p>
              <Link href="/get-free-quote">
                <Button size="lg" className="text-lg px-8 py-4 group">
                  Get a Free Quote
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="w-1/2 relative h-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/plumber-working.jpg"
                alt="Professional plumber working"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              100% Recommendation Rate
            </motion.h2>
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Star className="text-yellow-400 w-8 h-8" />
                </motion.div>
              ))}
            </div>
            <p className="text-xl mb-8">Based on 16 reviews from satisfied customers</p>
            <Carousel className="max-w-xl mx-auto">
              <CarouselContent>
                {[...Array(5)].map((_, i) => (
                  <CarouselItem key={i}>
                    <Card>
                      <CardContent className="p-6">
                        <p className="italic mb-4">&ldquo;Excellent service! The plumber was professional, punctual, and solved our issue quickly. Highly recommended!&rdquo;</p>
                        <p className="font-semibold">- Happy Customer {i + 1}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceIcons.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <service.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">Professional {service.title.toLowerCase()} services for your home</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/80">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
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