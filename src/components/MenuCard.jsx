import React from 'react'
import {Heart} from "lucide-react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



// import { useNavigate } from 'react-router-dom';

const MenuCard = () => {

  const carselector = useSelector((state)=>state.cart.items)


  return (
    <div>
    <Link to='/cartlist'>
    <span className='text-white flex'><Heart/>{carselector.length ? carselector.length:0}</span> 
    
    </Link>
    </div>
  )
}

export default MenuCard;

// {selector.length?selector.length:0}