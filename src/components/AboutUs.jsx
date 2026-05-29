import React from 'react'
// Note: Direct absolute path strings work best for files in the public folder
import MenuSection from './MenuSection'

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#451a03] dark:bg-black text-white py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Heading */}
        <h2 className="font-lobster text-4xl sm:text-5xl text-center mb-12 lg:mb-16 tracking-wide">
          About Us
        </h2>
        
        {/* Responsive Grid/Flex Split */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-28">
          
          {/* Left Side: Typography Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left max-w-xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-jost font-bold leading-tight">
              The traditional coffee shop
            </h3>
            
            <p className="text-sm sm:text-base text-gray-200/90 font-jost leading-relaxed text-justify lg:text-left">
              You can enjoy many different types of coffee and at the same time use internet, books, magazines and other literature. As young people and future leaders, we know that this type of place is missing in our area. 
            </p>
            
            <p className="text-sm sm:text-base text-gray-200/90 font-jost leading-relaxed text-justify lg:text-left hidden sm:block">
              Currently, you cannot find a place on the market, except a typical cafe, where you can spend time with your friends after school to work on a project with all the necessary resources, or just hang out and grab a snack. It is also a great place for you and your business partners to have a serious conversation in a wonderful atmosphere.
            </p>
            
            <div className="pt-2">
              <a href="#menu" className="inline-block px-6 py-2.5 bg-amber-700 hover:bg-amber-600 active:scale-95 text-white font-jost rounded shadow-md transition-all duration-200 cursor-pointer">
                Discover more
              </a>
            </div>
          </div>
          
          {/* Right Side: Creative Overlapping Images Container */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-6 lg:pt-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Main Large Image (Coffees2) */}
              <img 
                src="/images/aboutus2.jpg" 
                alt="Cozy coffee shop environment" 
                className="w-full h-full rounded-full object-cover border-8 sm:border-14 border-gray-100 shadow-2xl"
              />
              
              {/* Secondary Small Floating Image (Coffees) */}
              <img 
                src="/images/aboutus.jpg" 
                alt="Artisanal coffee cup close up" 
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 sm:border-8 border-gray-100 absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 shadow-xl animate-bounce-slow"
              />
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact