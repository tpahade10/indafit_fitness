"use client"

import type React from "react"

import { Shield, MessageCircle, GraduationCap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
  buttonAction?: () => void
}

const services: Service[] = [
  {
    id: 1,
    icon: <Shield className="h-12 w-12" />,
    title: "2-Year Limited Warranty",
    description: "We are committed to the quality. Our team is here to assist with any problems you encounter.",
    buttonText: "DISCOVER",
  },
  {
    id: 2,
    icon: <MessageCircle className="h-12 w-12" />,
    title: "Comprehensive Support",
    description: "Our dedicated support team is on standby to address any concerns or challenges you may face.",
    buttonText: "EXPLORE",
  },
  {
    id: 3,
    icon: <GraduationCap className="h-12 w-12" />,
    title: "Training",
    description:
      "Receive expert guidance from our certified personal trainers. They're here to craft personalized training programs just for you.",
    buttonText: "LEARN",
  },
  {
    id: 4,
    icon: <Globe className="h-12 w-12" />,
    title: "Shipping",
    description: "Find out how orders and shipments are managed",
    buttonText: "DISCOVER",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service) => (
              <div key={service.id} className="text-center group">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-sm mx-auto">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-2 text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 group-hover:scale-105"
                  onClick={service.buttonAction}
                >
                  {service.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* Optional Bottom CTA */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Ready to elevate your fitness experience?</h4>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AKUIS for their fitness and rehabilitation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium">
                Get Started Today
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 px-8 py-3 rounded-full font-medium"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
