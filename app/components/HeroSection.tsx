"use client";

import { useState, useEffect } from "react";

interface HeroSectionProps {
  onBgColorChange: (color: string) => void;
}

export default function HeroSection({ onBgColorChange }: HeroSectionProps) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const heroBackgrounds = [
    {
      bgColor: "#e0ce8a", // Warm golden yellow
      image: "/dogs/d1.avif",
      alt: "Black and white cat on golden background",
      textColor: "text-gray-800",
      heading: "furvourite",
    },
    {
      bgColor: "#9acbda", // Soft blue
      image: "/dogs/d2.avif",
      alt: "Playful jumping dog",
      textColor: "text-gray-800",
      heading: "meowelous",
    },
    {
      bgColor: "#e3b3c3", // Soft pink
      image: "/dogs/d3.avif",
      alt: "Dog in sweater",
      textColor: "text-gray-800",
      heading: "purrfect",
    },
    {
      bgColor: "#98cbbc", // Mint green
      image: "/dogs/d4.avif",
      alt: "Gray and white cat on mint background",
      textColor: "text-gray-800",
      heading: "pawsome",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    onBgColorChange(heroBackgrounds[currentBgIndex].bgColor);
  }, [currentBgIndex, onBgColorChange]);

  const currentBg = heroBackgrounds[currentBgIndex];

  return (
    <section
      className='relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-2000 ease-in-out'
      style={{ backgroundColor: currentBg.bgColor }}
    >
      {/* Gradient Overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20 z-20'></div>

      {/* Main Content */}
      <div className='relative z-30 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
        <div className='flex items-center justify-between min-h-screen'>
          {/* Left side - Text Content */}
          <div className='flex-1 max-w-2xl'>
            {/* Main Heading */}
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold lowercase mb-6 leading-none ${currentBg.textColor} transition-all duration-2000 ease-in-out`}
            >
              {currentBg.heading}
            </h1>

            {/* Subtitle */}
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-light lowercase mb-8 leading-tight ${currentBg.textColor} opacity-80`}
            >
              place for your pet
            </h2>

            {/* Description */}
            <p
              className={`text-lg md:text-xl mb-8 leading-relaxed ${currentBg.textColor} opacity-70 max-w-lg`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse
              varius enim in eros elit tristique.
            </p>

            {/* CTA Button */}
            <button className='bg-white/90 text-gray-800 hover:bg-white hover:shadow-xl px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 lowercase backdrop-blur-sm border border-white/30'>
              Book now
            </button>
          </div>

          {/* Right side - Pet Image */}
          <div className='flex-1 flex justify-center items-center'>
            <div className='w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full backdrop-blur-sm bg-white/10 shadow-xl transform transition-all duration-2000 ease-in-out hover:scale-105 overflow-hidden'>
              <img
                src={currentBg.image}
                alt={currentBg.alt}
                className='w-full h-full object-cover rounded-full transition-all duration-2000 ease-in-out'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
