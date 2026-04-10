import React, {  useState} from 'react'
import {X,Menu} from "lucide-react"
import ToggleTheme from "./ToggleTheme"
import MenuCard from './MenuCard'




const Header = () => {
const [isMenuOpen,setIsMenuOpen]=useState(false)

const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }  
  return (
    <nav className='dark:bg-gray-950 bg-amber-900 p-2.5'>
<div className='container mx-auto flex justify-between items-center'>
    <div className='text-white md:text-lg font-semibold  px-15 font-lobster '>CoffeeShop</div>

<div className='md:hidden'>
<button onClick={toggleMenu} className='text-gray-400 hover:text-white focus:outline-none focus:text-white'>
   <svg className='h-6 w-6'>
    {isMenuOpen ? (
<X />
    ):(
       <Menu /> 
    )}
    </svg> 
</button>
</div>
<div className='hidden font-poppins items-center md:flex space-x-4 font-jost text-[16px] '>
    <a href="/" className="text-gray-300 px-3 py-2  ">Home</a>
    <a href="/" className="text-gray-300 px-3 py-2 ">Menu</a>
    <a href="/" className="text-gray-300 px-3 py-2 ">About</a>
    <a href="/" className="text-gray-300 px-3 py-2 ">Testimonials</a>
     <a href="/" className="text-gray-300 px-3 py-2 ">Contact</a>
    <MenuCard/>
    <ToggleTheme/>
</div>
</div>
<div 

className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} font-jost text-[16px]`}>
   <a href="/" className="text-gray-300  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</a>
   <a href="/" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Menu</a> 
    <a href="/" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</a>
    <a href="/" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Testimonials</a>
    <a href="/" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</a> 
    <MenuCard/>
    <ToggleTheme/>
</div>
    </nav>
  )
}

export default Header;