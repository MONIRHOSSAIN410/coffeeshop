import React from 'react'
// Note: If 'images' is in your public folder, it's best to use a direct absolute path string
import MenuSection from './MenuSection'
import AboutUs from './AboutUs'
import CarouselSize from './CarouselSize'
import Contact from './Contact'

const Hero = () => {
  return (
    <div className='w-full min-h-screen dark:bg-black transition-colors duration-300'>
      
      {/* Background Wrapper: Spans full width, contains the gradient background */}
      <div className='w-full bg-linear-to-r from-amber-950 via-amber-900 to-amber-950 dark:bg-none dark:bg-black text-white'>
        
        {/* Content Container: Bounds the width and handles the responsive layout grid */}
        <div className='font-jost flex flex-col md:flex-row gap-10 lg:gap-16 justify-center items-center px-6 py-16 md:py-24 lg:px-16 max-w-7xl mx-auto min-h-[80vh]'>
          
          {/* Left Side Content */}
          <div className='w-full md:w-1/2 max-w-xl space-y-5 text-center md:text-left order-2 md:order-1'>
            <h1 className='font-lobster text-2xl sm:text-3xl lg:text-4xl text-amber-400 dark:text-amber-500'>
              Welcome to Coffee shop
            </h1>
            
            <p className='font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight'>
              Experience Artisanal <span className='text-amber-500 dark:text-amber-400'>Coffee</span> at Brew Haven
            </p>
            
            <p className='text-base sm:text-lg lg:text-xl text-gray-200/90 font-light max-w-lg mx-auto md:mx-0'>
              Indulge in our carefully crafted brews, made from ethically sourced beans.
            </p>
            
            {/* Call to Action Buttons */}
            <div className='pt-4 flex flex-wrap justify-center md:justify-start gap-4'>
              <a 
                href="#menu" 
                className='px-6 py-3 dark:bg-amber-600 dark:hover:bg-amber-500 bg-amber-700 rounded text-white hover:bg-amber-600 transition-all duration-200 transform hover:-translate-y-0.5 inline-block font-medium shadow-lg'
              >
                View Menu
              </a>
              <a 
                href="#story" 
                className='px-6 py-3 border border-white/40 hover:border-white rounded text-white hover:bg-white/10 transition-all duration-200 transform hover:-translate-y-0.5 inline-block font-medium'
              >
                Our Story
              </a>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className='w-full md:w-1/2 flex justify-center order-1 md:order-2'>
            <img 
              src="/images/hero.png" 
              alt="Delicious artisanal coffee" 
              className='w-4/5 sm:w-3/4 md:w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fade-in'
            />
          </div>
          
        </div>
      </div>

      {/* Subsections */}
      <MenuSection />
      <AboutUs />
      <CarouselSize />
      <Contact />
    </div>
  )
}

export default Hero;