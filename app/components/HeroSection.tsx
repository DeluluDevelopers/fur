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
      image: "🐱",
      alt: "Black and white cat on golden background",
      textColor: "text-gray-800",
    },
    {
      bgColor: "#9acbda", // Soft blue
      image: "🐕",
      alt: "Playful jumping dog",
      textColor: "text-gray-800",
    },
    {
      bgColor: "#e3b3c3", // Soft pink
      image: "🦮",
      alt: "Dog in sweater",
      textColor: "text-gray-800",
    },
    {
      bgColor: "#98cbbc", // Mint green
      image: "🐈",
      alt: "Gray and white cat on mint background",
      textColor: "text-gray-800",
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
      className='relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000'
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
              className={`text-6xl md:text-8xl lg:text-9xl font-bold lowercase mb-6 leading-none ${currentBg.textColor}`}
            >
              meowelous
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
            <div className='w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center shadow-2xl transform transition-all duration-1000 hover:scale-105'>
              <div className='text-8xl md:text-9xl'>{currentBg.image}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40'>
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
              index === currentBgIndex
                ? "bg-white shadow-lg ring-2 ring-white/50"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40'>
        <div className='animate-bounce'>
          <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
