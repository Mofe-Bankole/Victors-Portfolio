// components/IntroCard.tsx
import Image from 'next/image';
import React from 'react';

export default function ImageIntroCard() {
  return (
    <div
      className="
        relative 
        w-full max-w-[650px] 
        rounded-3xl overflow-hidden 
        bg-gray-900 aspect-9/16 md:aspect-square
        shadow-2xl
        flex items-center justify-center
        cursor-pointer
      "
    >
      {/* Blurred background portrait */}
      <div className="absolute inset-0 cursor-pointer">
        <Image
          src="/dio.jpg"
          alt="Portrait"
          fill
          className="grayscale-[0.7] blur-[0px] scale-110 brightness-90 object-cover"
          priority
        />
      </div>

      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* Main content - fully centered */}
      <div className="relative flex flex-col h-full w-full px-8 text-white items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center h-full space-y-6 sm:space-y-8">
          <div className="space-y-1.5 w-full flex flex-col items-start">
            <p className="text-lg sm:text-xl font-light tracking-wide opacity-90 text-left mt-5 w-full">
              Hello,
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight w-full text-left">
              My name is
              <br />
              <span className="block mt-1">Victor</span>
            </h1>
          </div>
          <div className="flex flex-1 flex-col justify-end w-full">
            <p className="text-sm sm:text-lg font-light leading-relaxed max-w-[38ch] opacity-85 text-right self-end px-1.5 mb-8">
              I consider myself as a hardworking artist who constantly seeks new skills and explores diverse design styles to deliver the best result in every project.
            </p>
          </div>
        </div>
      </div>

      {/* Optional: subtle vertical line accent on the right (like in your image) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-0.5 h-32 bg-white/30 rounded-full" />
    </div>
  );
}