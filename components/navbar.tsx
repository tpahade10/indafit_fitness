"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Search, ShoppingCart, User, Menu, ChevronDown, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled more than 100px from top
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (url: string | undefined) => {
    console.log(`Navigating to: ${url}`)
    router.push(url)
    // In a real app, you would use router.push(url) or window.location.href = url
    // For now, we'll just log the navigation
  }

  const navigationItems = [
    {
      name: "PRODUCTS",
      hasDropdown: true,
      items: {
        "Indafit R1": "/products/indafit"
      }
    },
    // {
    //   name: "STORIES",
    //   hasDropdown: true,
    //   items: {
    //     "Success Stories": "/stories/success",
    //     "Case Studies": "/stories/case-studies", 
    //     "News": "/stories/news"
    //   }
    // },
    {
      name: "FITNESS",
      hasDropdown: true,
      items: {
        // "Training Programs": "/fitness/training-programs",
         "Workouts": "/fitness/workouts",
        //"Nutrition": "/fitness/nutrition"
      }
    },
    // {
    //   name: "RECONDITIONING",
    //   hasDropdown: false,
    //   url: "/reconditioning"
    // },
    // {
    //   name: "HOTEL&SPA",
    //   hasDropdown: false,
    //   url: "/hotel-spa"
    // },
    {
      name: "CONTACT",
      hasDropdown: false,
      url: "/contact"
    },
    // {
    //   name: "TRIBE",
    //   hasDropdown: false,
    //   url: "/tribe"
    // },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">Indafit</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-gray-300 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black border-gray-800">
                      {Object.entries(item.items).map(([key, value]) => (
                        <DropdownMenuItem 
                          key={key} 
                          className="text-white hover:bg-gray-800 cursor-pointer"
                          onClick={() => handleNavigation(value)}
                        >
                          {key}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button 
                    className="text-sm font-medium hover:text-gray-300 transition-colors"
                    onClick={() => handleNavigation(item.url)}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Shop Button - Desktop */}
            {/* <Button 
              className="hidden lg:block bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-6"
              onClick={() => handleNavigation('/shop')}
            >
              SHOP
            </Button> */}

            {/* Icons */}
            {/* <button className="p-2 hover:bg-gray-800 rounded">
              <Search className="h-5 w-5" />
            </button> */}
            {/* <button className="p-2 hover:bg-gray-800 rounded">
              <ShoppingCart className="h-5 w-5" />
            </button> */}
            <button className="hidden lg:block p-2 hover:bg-gray-800 rounded">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile Menu */}
            <Sheet open={isOpen}  onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 hover:bg-gray-800 rounded">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-black text-white border-l-gray-800">
                <div className="flex items-center justify-between mb-8">
                  <ShoppingCart className="h-6 w-6" />
                  <h2 className="text-2xl font-bold tracking-wider">INDAFIT</h2>
                  <button onClick={() => setIsOpen(false)}>
                    {/* <X className="h-6 w-6" /> */}
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-800 pb-4">
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-lg font-medium cursor-pointer hover:text-gray-300"
                          onClick={() => !item.hasDropdown && handleNavigation(item.url)}
                        >
                          {item.name}
                        </span>
                        {item.hasDropdown && <ChevronDown className="h-5 w-5" />}
                      </div>
                      {item.hasDropdown && (
                        <div className="mt-2 ml-4 space-y-2">
                          {Object.entries(item.items).map(([key, value]) => (
                            <button 
                              key={key} 
                              className="block text-gray-400 hover:text-white cursor-pointer"
                              onClick={() => handleNavigation(value)}
                            >
                              {key}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* <div className="border-b border-gray-800 pb-4">
                    <span 
                      className="text-lg font-medium cursor-pointer hover:text-gray-300"
                      onClick={() => handleNavigation('/shop')}
                    >
                      SHOP
                    </span>
                  </div> */}

                  {/* Search Section */}
                  {/* <div className="space-y-4">
                    <h3 className="text-lg font-medium">SEARCH</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400"
                      />
                    </div>
                  </div> */}

                  {/* My Account Button */}
                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black rounded-full py-3"
                    onClick={() => handleNavigation('/account')}
                  >
                    MY ACCOUNT
                  </Button>

                  {/* Language Selection */}
                  {/* <div className="flex space-x-4 justify-center pt-4">
                    {["EN", "IT", "ES", "DE", "FR"].map((lang) => (
                      <button
                        key={lang}
                        className={`w-10 h-10 rounded-full border ${
                          lang === "EN" ? "border-emerald-500 text-emerald-500" : "border-gray-600 text-gray-400"
                        } hover:border-emerald-500 hover:text-emerald-500 transition-colors`}
                        onClick={() => console.log(`Language changed to: ${lang}`)}
                      >
                        {lang}
                      </button>
                    ))}
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}