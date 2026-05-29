import React from 'react'
import MenuItems from "../MenuItemsData"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../redux/FavoriteSlice'

const MenuSection = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  console.log(cartItems)

  return (
    <section id="menu" className="w-full bg-amber-50/30 dark:bg-zinc-950 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#422006] dark:text-amber-500 text-center font-jost tracking-wide mb-12">
          OUR SPECIAL COFFEE
        </h2>
        
        {/* Fully Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {MenuItems.map((item) => (
            <div 
              key={item.id} 
              className="w-full max-w-70 bg-amber-950 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-amber-700/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="w-full aspect-video overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content Space */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold font-jost line-clamp-1 mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-amber-100/80 font-medium text-sm mt-1">
                    {item.price}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button 
                    onClick={() => dispatch(addItem(item))} 
                    className="flex-1 py-1.5 bg-amber-100 hover:bg-white text-amber-950 font-semibold text-sm rounded-lg shadow-sm transition-colors cursor-pointer text-center active:scale-95"
                  >
                    Add
                  </button>
                  <button 
                    onClick={() => dispatch(removeItem(item))} 
                    className="flex-1 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-sm rounded-lg transition-colors cursor-pointer text-center active:scale-95"
                  >
                    Remove
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MenuSection;