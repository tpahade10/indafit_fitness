import Image from "next/image"

interface Product {
  id: number
  name: string
  image: string
  imageAlt: string
  category: "sintesi" | "stadia"
}

const products: Product[] = [
  {
    id: 1,
    name: "Sintesi Pro Lite",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Sintesi Pro Lite equipment with green accent background",
    category: "sintesi",
  },
  {
    id: 2,
    name: "Sintesi Pro Evo",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Sintesi Pro Evo in modern training facility",
    category: "sintesi",
  },
  {
    id: 3,
    name: "Sintesi Pro Elite",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Sintesi Pro Elite in clean white training room",
    category: "sintesi",
  },
  {
    id: 4,
    name: "Stadia Duo",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Stadia Duo compact training equipment",
    category: "stadia",
  },
  {
    id: 5,
    name: "Stadia Quattro",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Stadia Quattro professional gym equipment",
    category: "stadia",
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            EVERYTHING YOU NEED TO HACK YOUR PERFORMANCE
          </h2>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Sintesi Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {products
              .filter((product) => product.category === "sintesi")
              .map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center group-hover:text-emerald-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
              ))}
          </div>

          {/* Bottom Row - Stadia Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {products
              .filter((product) => product.category === "stadia")
              .map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center group-hover:text-emerald-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
              ))}
          </div>
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Discover our complete range of professional fitness and rehabilitation equipment designed to elevate your
            facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors duration-300">
              View All Products
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
