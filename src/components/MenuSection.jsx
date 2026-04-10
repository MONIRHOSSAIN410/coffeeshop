import React from 'react'
import MenuItems from "../MenuItemsData"
import { useDispatch,useSelector } from 'react-redux'
import { addItem,removeItem } from '../redux/FavoriteSlice'

const MenuSection = () => {
  const dispatch = useDispatch()
const selector = useSelector((state)=>state.cart.items)
  console.log(selector)

  return (
<div  className='grid sm:grid-cols-2  dark:text-white md:grid-cols-3 lg:grid-cols-4'>

{
  MenuItems.map((item)=>(
    <div key={item.id} className='border w-56 h-40 '>
<h1  >{item.name}</h1>
<h2  >{item.price}</h2>
<h3  >{item.category}</h3>
<button onClick={()=>dispatch(dispatch(addItem(item)))} className='px-3.5 bg-amber-900'>Add</button>
<button onClick={()=>dispatch(dispatch(removeItem(item)))} className='px-3.5 bg-amber-900'>remove</button>

    </div>
  ))
}

 
    </div>
  )
}

export default MenuSection;