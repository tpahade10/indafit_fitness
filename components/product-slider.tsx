"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Slide {
  id: number
  title: string
  description: string
  buttonText: string
  image: string
  imageAlt: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "SINTESI",
    description:
      "the perfect equipment for physiotherapy studios that combine high expertise and cutting-edge technologies to aid in the rehabilitation of patients.",
    buttonText: "DISCOVER SINTESI FOR THE MEDICAL SECTOR",
    image: "https://akuis.tech/cdn/shop/files/32A5598_1000x668.jpg?v=1707921848",
    imageAlt: "Physiotherapy session with SINTESI equipment",
  },
  {
    id: 2,
    title: "STADIA QUATTRO",
    description:
      "<p>elegantly <strong>complements any high-end space</strong>, with its sleek, <strong>minimalist</strong> yet <strong>futuristic</strong> <strong>design</strong>, allowing to live a full gym condensed into <strong>just 2 square meters..",
    buttonText: "DISCOVER STADIA QUATTRO FOR FITNESS",
    image: "https://akuis.tech/cdn/shop/files/Hospitality-Hero-v2-web_1000x400.jpg?v=1730733313",
    imageAlt: "DISCOVER  SINTESI FOR HOSPITALITY FOR HOSPITALITY SECTOR",
  },
  {
    id: 3,
    title: "STADIA ",
    description:
      "<p>a connected robotic digital equipment designed to perfection, <strong>ideal for personal training studios and beauty centers</strong> <strong>seeking</strong> a <strong>technologically</strong> <strong>advanced positioning</strong>.</p>.",
    buttonText: "DISCOVER STADIA DUO FOR FITNESS SECTOR",
    image: "https://akuis.tech/cdn/shop/files/P1105317_1000x668.jpg?v=1708968065",
    imageAlt: "Stadia Duo equipment in use",
  },
  
]

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Auto-play functionality (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Slider Container */}
          <div
            className="relative overflow-hidden rounded-lg bg-white shadow-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-96">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.imageAlt}
                      fill
                      className="object-cover"
                      priority={slide.id === 1}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 md:p-12">
                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={prevSlide}
                        className="p-2 text-emerald-500 hover:text-emerald-600 transition-colors"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-8 w-8" />
                      </button>

                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
                        {slide.title}
                      </h2>

                      <button
                        onClick={nextSlide}
                        className="p-2 text-emerald-500 hover:text-emerald-600 transition-colors"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-8 w-8" />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <div className="text-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300"
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-emerald-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <p className="text-center text-gray-500 text-sm mt-4 sm:hidden">Swipe left or right to navigate</p>
        </div>
      </div>
    </section>
  )
}
