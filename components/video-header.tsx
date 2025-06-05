"use client";

import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";

export default function VideoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Gym workout background video"
      >
        <source
          src="https://akuis.tech/cdn/shop/videos/c/vp/dd68ab5304f24f06845bd4c4d58d4b06/dd68ab5304f24f06845bd4c4d58d4b06.HD-1080p-3.3Mbps-38079241.mp4?v=0"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container  px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl  text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            <span className="block">Elevate your gym</span>

            <RotatingText
              texts={[
                "to inspire change",
                "to hack your edge",
                "for the future now",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3   overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>

          {/* Subtext */}
          <div className="space-y-2 mb-8 text-sm sm:text-xl md:text-sm font-light">
            <p>Maximize your results</p>
            <p>Redefine your limits with Stadia</p>
          </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-full min-w-[280px] sm:min-w-[320px]"
            >
              Discover Stadia Quattro
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white  hover:bg-white hover:text-black px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-full min-w-[280px] sm:min-w-[320px]"
            >
              Discover Stadia Duo
            </Button>
          </div>

          {/* Additional Info */}
          <p className="mt-8 text-sm text-gray-300">For Personal Training and Hospitality Sector</p>
        </div>

       </div>
      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
