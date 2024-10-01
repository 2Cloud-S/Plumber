'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ChevronRight, Droplet, Wrench, ShowerHead, AlertTriangle, Clock } from 'lucide-react'
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
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const serviceIcons = [
  { icon: Droplet, title: "Leak Repair" },
  { icon: Wrench, title: "Installation" },
  { icon: ShowerHead, title: "Bathroom Remodel" },
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

export function HomepageComponent() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [chartData, setChartData] = useState({
    labels: ['Water Savings', 'Energy Efficiency', 'Customer Satisfaction'],
    datasets: [
      {
        label: 'Before Our Service',
        data: [0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'After Our Service',
        data: [0, 0, 0],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData({
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: [30, 40, 70],
          },
          {
            ...chartData.datasets[1],
            data: [80, 85, 95],
          },
        ],
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Impact of Our Plumbing Services',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%'
          }
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {isHeaderVisible && (
          <motion.header 
            className="bg-primary text-white py-4 fixed w-full z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center">
                  <Phone size={20} className="mr-2" />
                  <span>+1 000-000-0000</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  <span>xxx@mail.com</span>
                </div>
              </div>
              <Link href="/get-free-quote">
                <Button variant="secondary">Schedule a Service</Button>
              </Link>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <nav className="bg-white shadow-md sticky top-0 z-40 pt-16 sm:pt-20">
        <div className="container mx-auto py-4 flex flex-col sm:flex-row justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-primary mb-2 sm:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Plumbing and Heating
          </motion.div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/maintenance-plans" className="text-gray-600 hover:text-primary transition-colors">Maintenance Plans</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <motion.div 
              className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Expert Residential Plumbing Services</h1>
              <p className="text-lg sm:text-xl mb-6">Trusted solutions for all your plumbing needs in East Windsor, Connecticut</p>
              <Link href="/get-free-quote">
                <Button size="lg" className="text-lg px-8 py-4 group w-full sm:w-auto">
                  Get a Free Quote
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px]"
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
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <p className="italic mb-4">&ldquo;Excellent service! The plumber was professional, punctual, and solved our issue quickly. Highly recommended!&rdquo;</p>
                          <p className="font-semibold">- Happy Customer {i + 1}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* New Emergency Services Section */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              24/7 Emergency Plumbing Services
            </motion.h2>
            <motion.p
              className="text-center mb-12 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're here for you around the clock. Don't let plumbing emergencies disrupt your life!
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: AlertTriangle, title: "Burst Pipes", description: "Quick response to minimize water damage and restore your plumbing." },
                { icon: Droplet, title: "Severe Leaks", description: "Rapid detection and repair of major leaks to protect your property." },
                { icon: Clock, title: "24/7 Availability", description: "Our expert team is ready to assist you any time, day or night." },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <service.icon className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-4 w-4" /> Call Now for Emergency Service
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              How We've Helped Our Clients
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Bar options={chartOptions} data={chartData} />
            </motion.div>
            <motion.p
              className="text-center mt-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our services have significantly improved water savings, energy efficiency, and overall customer satisfaction.
            </motion.p>
          </div>
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceIcons.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <service.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">Professional {service.title.toLowerCase()} services for your home</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/80 w-full sm:w-auto">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-navy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Plumbing Maintenance Plans
            </motion.h2>
            <motion.p
              className="text-center mb-12 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Protect your home and save money with our proactive maintenance plans. Regular check-ups prevent costly emergencies and keep your plumbing system running smoothly.
            </motion.p>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/maintenance-plans">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/80">
                  Learn More About Our Maintenance Plans
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">YXXX Plumbing and Heating</h3>
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