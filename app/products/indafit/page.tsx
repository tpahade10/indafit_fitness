import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function FitnessSections() {
  return (
    <div className="w-full">
        <Navbar />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gray-900">
          {/* Simulated overhead workout image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            
            {/* Simulated workout scene from above */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
              {/* Person silhouette from overhead view */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Body silhouette */}
                <div className="relative">
                  {/* Head */}
                  <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-2"></div>
                  {/* Torso */}
                  <div className="w-24 h-32 bg-gray-600 rounded-lg mx-auto mb-2"></div>
                  {/* Arms stretched out */}
                  <div className="absolute top-8 -left-20 w-16 h-6 bg-gray-600 rounded-full transform rotate-12"></div>
                  <div className="absolute top-8 -right-20 w-16 h-6 bg-gray-600 rounded-full transform -rotate-12"></div>
                  {/* Legs */}
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-20 bg-gray-600 rounded-lg"></div>
                    <div className="w-8 h-20 bg-gray-600 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Cable/resistance bands */}
                <div className="absolute top-8 -left-32 w-32 h-1 bg-gray-800 transform rotate-12"></div>
                <div className="absolute top-8 -right-32 w-32 h-1 bg-gray-800 transform -rotate-12"></div>
                
                {/* Handles */}
                <div className="absolute top-6 -left-36 w-4 h-4 bg-gray-900 rounded"></div>
                <div className="absolute top-6 -right-36 w-4 h-4 bg-gray-900 rounded"></div>
              </div>
              
              {/* Equipment base/platform */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-gray-800 rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Features Title */}
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide">
            Features
          </h1>
        </div>
      </section>

            <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
            Indafit R1
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">SINTESI</span> is the innovative smart multifunctional station that combines all the equipment of a 
            complete gym into a single tool, providing a full-body workout in just two square meters of 
            space.
          </p>
        </div>
      </section>
  
      {/* Reconditioning Section */}
      <section className="flex flex-col lg:flex-row items-center min-h-screen bg-white">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600">
            {/* Placeholder for fitness equipment image */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full bg-gray-700 flex items-center justify-center">
                {/* Simulated fitness equipment silhouettes */}
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
                {/* Simulated people silhouettes */}
                <div className="flex space-x-8">
                  <div className="w-20 h-40 bg-gray-800 rounded-full opacity-80"></div>
                  <div className="w-20 h-40 bg-gray-800 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12 lg:py-24">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A game-changer for reconditioning
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              With its advanced technology and the ability to simulate a wide range of load profiles, 
              Sintesi offers a personalized and comprehensive approach to assisting athletes in the 
              reconditioning phase, from injuries to functional recovery goals.
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-colors duration-300"
            >
              GO TO THE SECTION
            </Button>
          </div>
        </div>
      </section>

      {/* Tribe Section */}
      <section className="flex flex-col lg:flex-row items-center min-h-screen bg-white">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12 lg:py-24 order-2 lg:order-1">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Join the AKUIS Tribe
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Discover a valuable collection of video tutorials covering a variety of subjects to help you 
              achieve your goals. If you are an AKUIS lover or you already joined the Tribe with a wonderful 
              piece of our collection in your studio, then this is the place to update yourself about AKUIS world.
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-colors duration-300"
            >
              JOIN THE TRIBE
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-screen relative overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-l from-gray-100 to-gray-300">
            {/* Placeholder for gym environment image */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                {/* Simulated gym equipment */}
                <div className="absolute left-8 bottom-20">
                  <div className="w-12 h-24 bg-gray-700 rounded"></div>
                </div>
                <div className="absolute right-8 bottom-20">
                  <div className="w-12 h-24 bg-gray-700 rounded"></div>
                </div>
                <div className="absolute left-1/4 bottom-16">
                  <div className="w-32 h-4 bg-gray-800 rounded-full"></div>
                </div>
                <div className="absolute right-1/4 bottom-16">
                  <div className="w-32 h-4 bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Simulated people working out */}
                <div className="flex space-x-12 items-end">
                  <div className="relative">
                    <div className="w-16 h-32 bg-gray-700 rounded-t-full"></div>
                    <div className="w-8 h-16 bg-gray-600 rounded mx-auto -mt-2"></div>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-32 bg-gray-700 rounded-t-full"></div>
                    <div className="w-8 h-16 bg-gray-600 rounded mx-auto -mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Add some spacing or additional sections */}
      <div className="h-20 bg-gray-50"></div>
    </div>
  )
}