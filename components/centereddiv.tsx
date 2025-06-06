export default function FeaturesSintesiSection({ 
  featureTitle = "Features",
  productName = "Sintesi", 
  description = "SINTESI is the innovative smart multifunctional station that combines all the equipment of a complete gym into a single tool, providing a full-body workout in just two square meters of space.",
  backgroundImage = null 
}) {
  return (
    <div className="w-full">
      {/* Features Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gray-900">
          {backgroundImage ? (
            /* Custom background image */
            <div className="relative w-full h-full">
              <img 
                src={backgroundImage} 
                alt="Features background"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            </div>
          ) : (
            /* Default simulated overhead workout image */
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
          )}
        </div>

        {/* Features Title */}
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide">
            {featureTitle}
          </h1>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
            {productName}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Optional: Add some visual break */}
      <div className="h-16 bg-white"></div>
    </div>
  )
}