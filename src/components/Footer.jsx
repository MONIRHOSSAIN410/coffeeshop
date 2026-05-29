import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#422006] dark:bg-neutral-950 text-white transition-colors duration-300'>
      {/* Main Footer Links Container */}
      <div className='max-w-7xl mx-auto px-6 py-12 lg:px-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12'>
          
          {/* Column 1: Brand Intro */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-lobster tracking-wide text-amber-400 dark:text-amber-500'>
              CoffeeShop
            </h2>
            <p className='text-sm text-gray-200/80 font-jost leading-relaxed max-w-xs'>
              Experience artisanal brews crafted from ethically sourced beans. Your perfect neighborhood cozy space for work, relaxation, and premium flavor.
            </p>
          </div>
          
          {/* Column 2: Important Links */}
          <div className='space-y-4'>
            <h2 className='text-lg font-bold font-jost uppercase tracking-wider text-amber-400 dark:text-amber-500'>
              Important Links
            </h2>
            <ul className='space-y-2.5 text-sm text-gray-200/90 font-jost'>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-amber-300 transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-amber-300 transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div className='space-y-4'>
            <h2 className='text-lg font-bold font-jost uppercase tracking-wider text-amber-400 dark:text-amber-500'>
              Quick Links
            </h2>
            <ul className='space-y-2.5 text-sm text-gray-200/90 font-jost'>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Our Roastery</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact/Address Details */}
          <div className='space-y-4 font-jost text-sm text-gray-200/90'>
            <h2 className='text-lg font-bold uppercase tracking-wider text-amber-400 dark:text-amber-500'>
              Address
            </h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                📍 <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center gap-2">
                📞 <a href="tel:+8801655546609" className="hover:text-amber-300 transition-colors">+880 1655-546609</a>
              </p>
              <p className="flex items-center gap-2">
                ✉️ <a href="mailto:info@coffeeshop.com" className="hover:text-amber-300 transition-colors">info@coffeeshop.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className='border-t border-white/10 dark:border-neutral-900 bg-[#311603] dark:bg-neutral-900/40 py-4 text-center text-xs text-gray-400 font-jost px-4'>
        <p>&copy; {currentYear} CoffeeShop. All rights reserved. Built with passion.</p>
      </div>
    </footer>
  )
}

export default Footer