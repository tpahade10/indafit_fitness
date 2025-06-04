import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"

export default function ProductPage() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "Absolutely love this machine! It's transformed my home workouts completely.",
      verified: true,
    },
    {
      name: "Mike R.",
      rating: 5,
      comment: "The AI coaching is incredible. It's like having a personal trainer at home.",
      verified: true,
    },
    {
      name: "Jennifer L.",
      rating: 4,
      comment: "Great product, easy setup. The app integration works seamlessly.",
      verified: true,
    },
  ]

  const specifications = [
    { label: "Dimensions", value: '72" x 36" x 84"' },
    { label: "Weight", value: "285 lbs" },
    { label: "Max User Weight", value: "350 lbs" },
    { label: "Power", value: "110V AC" },
    { label: "Connectivity", value: "WiFi, Bluetooth 5.0" },
    { label: "Display", value: '22" 4K Touchscreen' },
    { label: "Resistance", value: "Electromagnetic" },
    { label: "Warranty", value: "5 Years Full Coverage" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Indafit</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Support
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Indafit - Main Product"
                  width={600}
                  height={500}
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
            <div className="grid grid-cols-3 gap-4">
              <Card className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Product View 1"
                    width={200}
                    height={150}
                    className="w-full h-24 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Product View 2"
                    width={200}
                    height={150}
                    className="w-full h-24 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Product View 3"
                    width={200}
                    height={150}
                    className="w-full h-24 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">Best Selling</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Indafit - Smart Home Fitness Machine</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8/5 from 1,247 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-4xl font-bold text-gray-900">$2,499</div>
              <p className="text-gray-600">Free shipping • 30-day money-back guarantee • 5-year warranty</p>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Truck className="h-6 w-6 text-blue-600" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-sm text-gray-600">5-Year Warranty</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <RotateCcw className="h-6 w-6 text-blue-600" />
                  <span className="text-sm text-gray-600">30-Day Returns</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI-powered personal training with real-time form correction</li>
                <li>• 22 4K touchscreen with immersive workout experiences</li>
                <li>• Smart home integration (Alexa, Google, Apple HomeKit)</li>
                <li>• Electromagnetic resistance system (5-200 lbs)</li>
                <li>• Live and on-demand classes with certified trainers</li>
                <li>• Comprehensive health and fitness tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{review.name}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Specifications */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Specifications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p> 2024 Indafit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
