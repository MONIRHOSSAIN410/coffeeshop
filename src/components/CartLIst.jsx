import React from 'react'
import { useSelector } from 'react-redux';


const CartLIst = () => {
    const selector = useSelector((state)=>state.cart.items)
    
  return (
  <div>
{
  selector.length> 0 ? selector.map((items)=>(
   <div key={items.id}>
<p>{items.name}</p>
<p>{items.price}</p>
<p>{items.category}</p>
   </div> 
  )):null
}
  </div>
  )

}
export default CartLIst