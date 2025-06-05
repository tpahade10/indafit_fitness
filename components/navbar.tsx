"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Search, ShoppingCart, User, Menu, ChevronDown, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      name: "PRODUCTS",
      hasDropdown: true,
      items: ["Stadia Quattro", "Stadia Duo", "Accessories"],
    },
    {
      name: "STORIES",
      hasDropdown: true,
      items: ["Success Stories", "Case Studies", "News"],
    },
    {
      name: "FITNESS",
      hasDropdown: true,
      items: ["Training Programs", "Workouts", "Nutrition"],
    },
    {
      name: "RECONDITIONING",
      hasDropdown: false,
    },
    {
      name: "HOTEL&SPA",
      hasDropdown: false,
    },
    {
      name: "SUPPORT",
      hasDropdown: false,
    },
    {
      name: "TRIBE",
      hasDropdown: false,
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">AKUIS</h1>
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
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem} className="text-white hover:bg-gray-800">
                          {subItem}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button className="text-sm font-medium hover:text-gray-300 transition-colors">{item.name}</button>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Shop Button - Desktop */}
            <Button className="hidden lg:block bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-6">
              SHOP
            </Button>

            {/* Icons */}
            <button className="p-2 hover:bg-gray-800 rounded">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="hidden lg:block p-2 hover:bg-gray-800 rounded">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 hover:bg-gray-800 rounded">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-black text-white border-l-gray-800">
                <div className="flex items-center justify-between mb-8">
                  <ShoppingCart className="h-6 w-6" />
                  <h2 className="text-2xl font-bold tracking-wider">AKUIS</h2>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-800 pb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">{item.name}</span>
                        {item.hasDropdown && <ChevronDown className="h-5 w-5" />}
                      </div>
                      {item.hasDropdown && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <button key={subItem} className="block text-gray-400 hover:text-white">
                              {subItem}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="border-b border-gray-800 pb-4">
                    <span className="text-lg font-medium">SHOP</span>
                  </div>

                  {/* Search Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">SEARCH</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* My Account Button */}
                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black rounded-full py-3"
                  >
                    MY ACCOUNT
                  </Button>

                  {/* Language Selection */}
                  <div className="flex space-x-4 justify-center pt-4">
                    {["EN", "IT", "ES", "DE", "FR"].map((lang) => (
                      <button
                        key={lang}
                        className={`w-10 h-10 rounded-full border ${
                          lang === "EN" ? "border-emerald-500 text-emerald-500" : "border-gray-600 text-gray-400"
                        } hover:border-emerald-500 hover:text-emerald-500 transition-colors`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
