import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllItems, removeItem } from '../redux/FavoriteSlice'
import { useNavigate } from 'react-router-dom'

const CartList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const cartSelector = useSelector((state) => state.cart.items)
  const [cartItems, setCartItems] = useState(cartSelector)

  useEffect(() => {
    setCartItems(cartSelector)
  }, [cartSelector])

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1
    // Keep internal local state mapping safe
    const cartTempItems = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity } : item
    })
    setCartItems(cartTempItems)
  }

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!")
      return
    }
    localStorage.clear()
    dispatch(clearAllItems())
    alert("Order placed successfully!")
    navigate("/")
  }

  return (
    // Max-width wrapper prevents layout from blowing up on large monitors, padding adjusts dynamically
    <div className='max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-14'>
      
      {/* Header section */}
      <div className='flex justify-between text-[#422006] border-b-2 pb-2'>
        <h2 className='text-lg md:text-xl font-bold p-1.5'>Your Cart items</h2>
        <span className='text-lg md:text-xl font-medium p-1.5'>{cartItems.length} items</span>
      </div>

      {/* Cart items list */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className='border-b-2 py-4 md:py-6'>
            {/* Flex column on mobile, flex row on desktop */}
            <div className='flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between'>
              
              {/* Left Side: Image and info */}
              <div className='flex items-center gap-4'>
                <img src={item.img} alt={item.name} className='w-16 h-16 md:w-20 md:h-20 object-contain' />
                <div>
                  <h4 className='font-semibold text-base md:text-lg text-[#422006]'>{item.name}</h4>
                  <p className='text-gray-500 text-sm'>{item.category}</p>
                </div>
              </div>

              {/* Right Side: Quantity inputs and Price */}
              <div className='flex flex-row sm:flex-col justify-between items-center sm:items-end gap-2'>
                {/* Dynamically calculated price */}
                <span className='text-lg md:text-xl font-bold text-[#422006] sm:order-1'>
                  ${(parseFloat(item.price.toString().replace("$", "")) * (item.quantity || 1)).toFixed(2)}
                </span>
                
                {/* Inputs & Actions Container */}
                <div className='flex flex-wrap items-center gap-2 sm:order-2'>
                  <input 
                    onChange={(e) => manageQuantity(item.id, e.target.value)} 
                    type="number" 
                    value={item.quantity || 1}
                    min="1"
                    placeholder='Qty' 
                    className='border p-1 w-16 text-center border-[#422006] rounded text-sm bg-white'
                  />
                  <button 
                    onClick={() => dispatch(removeItem(item))} 
                    className='bg-amber-600 dark:bg-gray-800 hover:bg-amber-700 px-3 py-1.5 rounded text-white text-xs sm:text-sm cursor-pointer transition-colors'
                  >
                    Remove
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-12 text-gray-500'>Your cart is empty.</div>
      )}

      {/* Total and checkout section */}
      <div className='flex justify-between items-center mt-6 pt-4'>
        <div>
          <button 
            onClick={handlePlaceOrder}  
            className='px-4 py-2 cursor-pointer bg-amber-800 hover:bg-amber-900 rounded text-white font-medium shadow transition-colors text-sm md:text-base'
          >
            Place Order
          </button>
        </div>
        <div className='text-lg md:text-xl font-bold text-[#422006]'>
          Total: ${cartItems.reduce((sum, item) => {
            const priceNum = parseFloat(item.price.toString().replace("$", ""))
            const qty = item.quantity || 1
            return sum + (isNaN(priceNum) ? 0 : priceNum * qty)
          }, 0).toFixed(2)}
        </div>
      </div>

    </div>
  )
}

export default CartList