import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const features = [
    {
      title: "Advanced AI Technology",
      description:
        "Our machine learning algorithms analyze your movements in real-time, providing instant feedback and personalized workout adjustments to maximize your results.",
    },
    {
      title: "Compact Design",
      description:
        "Engineered to fit seamlessly into any home environment while providing the functionality of a full commercial gym in a sleek, space-saving design.",
    },
    {
      title: "Smart Connectivity",
      description:
        "Integrates with popular smart home platforms including Alexa, Google Home, and Apple HomeKit for voice control and automated routines.",
    },
    {
      title: "Professional Guidance",
      description:
        "Access to certified personal trainers through our platform, offering live sessions and personalized workout plans tailored to your goals.",
    },
    {
      title: "Health Monitoring",
      description:
        "Built-in sensors track heart rate, calories burned, form analysis, and recovery metrics to provide comprehensive health insights.",
    },
    {
      title: "Community Features",
      description:
        "Connect with friends, join challenges, and participate in virtual group workouts to stay motivated and engaged in your fitness journey.",
    },
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Indafit</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Were revolutionizing home fitness with cutting-edge technology that brings the gym experience directly to
            your living space. Our mission is to make professional-grade fitness accessible to everyone.
          </p>

          {/* Content Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Technology Innovation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Home Fitness Setup"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why Choose Indafit</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized their home workout experience with FitSmart
            Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Link href="/product">View Product</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
            <p>&copy; 2024 Indafit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
