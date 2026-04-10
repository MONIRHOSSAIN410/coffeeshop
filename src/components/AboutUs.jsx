import React from 'react'
import AboutUs1 from "../../public/images/about1.jpg"
import {easeIn, motion} from "framer-motion"

const AboutUs = () => {
  return (
    <div className='rounded bg-linear-to-r  from-amber-200 to-amber-300'>
    
   <h1 className='text-4xl text-white'>About US</h1>
     
      <div className='flex gap-20 pb-20 items-center justify-center dark:bg-black'>
        
        <motion.div
     initial={{
      opacity:0
     }}
     whileInView={{
      opacity:1,
    scale:1.25,
      transition:{
        duration:3
      }
     }}
      viewport={{
      once:true
     }}
        >
<img src={AboutUs1} className='w-80 h-60 mt-5'/>

        </motion.div>
        
        <motion.p 
        initial={{
      opacity:0
     }}
     whileInView={{
      opacity:1,
      scaleX:1,
      transition:{
        duration:3
      }
     }}
     viewport={{
      once:true
     }}
       
        className='dark:text-white w-96 text-white  mt-5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae corrupti deleniti voluptatibus eveniet, quae voluptates aliquid earum neque rerum, vero similique expedita odio error repudiandae recusandae fuga fugit libero obcaecati, nihil assumenda sapiente vel? Culpa quasi, officia consectetur placeat error, officiis molestiae voluptatibus, aliquam voluptas voluptate architecto! Nisi, harum?</motion.p>
        
      </div>
    </div>
  )
}

export default AboutUs;