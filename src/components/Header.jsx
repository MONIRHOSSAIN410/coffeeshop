import React, { useState } from 'react'
import { X, Menu } from "lucide-react"
import ToggleTheme from "./ToggleTheme"
import MenuCard from './MenuCard'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }  

  return (
    <nav className='dark:bg-neutral-950 bg-amber-900 px-4 py-3 sticky top-0 z-50 shadow-md transition-colors duration-300'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* Responsive Logo */}
        <Link to="/" className='text-white text-xl md:text-2xl font-semibold font-lobster tracking-wide'>
          CoffeeShop
        </Link>

        {/* Mobile Hamburger Button */}
        <div className='md:hidden flex items-center gap-4'>
          {/* Showing mini widgets outside the drawer for quick mobile access if desired, or leave inside */}
          <button 
            onClick={toggleMenu} 
            className='text-amber-100 hover:text-white focus:outline-none transition-colors'
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className='hidden md:flex items-center space-x-2 lg:space-x-4 font-jost text-[16px] font-medium'>
          <Link to="/" className="text-amber-100 hover:text-white px-3 py-2 transition-colors rounded-md">Home</Link>
          <Link to="/menu" className="text-amber-100 hover:text-white px-3 py-2 transition-colors rounded-md">Menu</Link>
          <Link to="/about" className="text-amber-100 hover:text-white px-3 py-2 transition-colors rounded-md">About</Link>
          <Link to="/testimonial" className="text-amber-100 hover:text-white px-3 py-2 transition-colors rounded-md">Testimonials</Link>
          <Link to="/contact" className="text-amber-100 hover:text-white px-3 py-2 transition-colors rounded-md">Contact</Link>
          
          <div className='flex items-center gap-3 pl-2 border-l border-amber-800/60 dark:border-neutral-800'>
            <MenuCard />
            <ToggleTheme />
          </div>
        </div>

      </div>

      {/* Mobile Dropdown Drawer Container */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pt-4 pb-2' : 'max-h-0 opacity-0'
        } font-jost text-[16px]`}
      >
        <div className='flex flex-col space-y-1 bg-amber-950/40 dark:bg-neutral-900/40 rounded-lg p-2 backdrop-blur-sm'>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-200 block hover:bg-amber-800/60 dark:hover:bg-neutral-800 px-4 py-2.5 rounded-md transition-all">Home</Link>
          <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="text-gray-200 block hover:bg-amber-800/60 dark:hover:bg-neutral-800 px-4 py-2.5 rounded-md transition-all">Menu</Link> 
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-200 block hover:bg-amber-800/60 dark:hover:bg-neutral-800 px-4 py-2.5 rounded-md transition-all">About</Link>
          <Link to="/testimonial" onClick={() => setIsMenuOpen(false)} className="text-gray-200 block hover:bg-amber-800/60 dark:hover:bg-neutral-800 px-4 py-2.5 rounded-md transition-all">Testimonials</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-200 block hover:bg-amber-800/60 dark:hover:bg-neutral-800 px-4 py-2.5 rounded-md transition-all">Contact</Link> 
          
          {/* Actions layout inside mobile drawer */}
          <div className='flex items-center justify-between px-4 py-3 mt-2 border-t border-amber-800/40 dark:border-neutral-800'>
            <span className='text-sm text-amber-200/70'>Preferences</span>
            <div className='flex items-center gap-4'>
              <MenuCard />
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;