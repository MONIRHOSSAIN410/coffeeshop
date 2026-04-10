import React from 'react'
import Images from "../../public/images/hero.png"
import MenuSection from './MenuSection'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Hero = () => {
  return (
<div>
    <div className=' dark:text-white font-jost flex flex-col  md:flex-row gap-6.5 justify-center items-center'>
      <div className='w-130 ml-30'>
        <h1 className='font-lobster text-2xl md:text-2xl lg:text-2xl'>Welcome to Coffee shop</h1>
        
    <p className='font-bold md:text-[45px] md:text-3xl py-3.5 space-x-3.5 tracking-wider '>Experience Artisanal <span className='text-amber-800 dark:text-gray-800'>Coffee</span> at Brew Haven</p>
       
        <p className='md:text-xl md:py-2.5 '>Indulge in our carefully crafted brews,made from ethically </p>
    <div  className='py-3.5 mt-3.5'>
      <a href="" className='px-3.5 py-1.5 dark:bg-gray-800 dark:hover:bg-gray-700 bg-amber-800 rounded text-white hover:bg-amber-700 '>View Menu</a>
      <a href="" className='px-3.5 py-1.5 border dark:border-gray-800 border-amber-700 rounded ml-2.5 text-black dark:text-white'>Our Story</a>
      </div>
        </div>
        <div>
<img src={ Images} className='md:w-xl '/>
        </div>
        
    </div>
   <MenuSection/>
   <AboutUs/>

   <Testimonials/>
   <Footer/>
 </div>
  )
}

export default Hero