
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Hero from './components/Hero';

import CartLIst from './components/CartLIst';

const App = () => {

  return (
    <div className='bg-white  dark:bg-black'>



<BrowserRouter>
<Header/>
 <Routes>
  <Route path="/" element={ <Hero/>}></Route>
 
  <Route path='/cartlist' element={<CartLIst/>}></Route>
 </Routes>
</BrowserRouter>
 
    </div>
  )
}

export default App;