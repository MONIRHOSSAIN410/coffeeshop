
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutUs from "./components/AboutUs"
import CarouselSize from "./components/CarouselSize"
import CartLIst from './components/CartLIst';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className='bg-white  dark:bg-black'>
<Header />
<Routes>
        <Route path="/" element={<Hero />}></Route>
          
          <Route path='/cartLIst' element={<CartLIst />}></Route>
          <Route path='/menu' element={<MenuSection />}></Route>
           <Route path='/about' element={<AboutUs/>}></Route>
           <Route path='/testimonial' element={<CarouselSize/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      
<Footer/>
    </div>
  )
}

export default App;