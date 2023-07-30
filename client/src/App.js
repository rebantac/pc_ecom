import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './pages/Home';
import PdtDetail from './pages/PdtDetail';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Cart from  './pages/Cart'
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContextProvider } from './Context/AuthContext';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <AuthContextProvider>
          <Navbar />
          <Navbar2/>
          <Routes>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/' element={<Home />} />
            <Route path='/productCard' element={<ProductCard />} />
            <Route path='/product/:id' element={<PdtDetail />} />
            <Route path='/products' element={<Products />} />
            <Route path='/AboutUs' element={<AboutUs />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          <Footer />
      </AuthContextProvider>
    </Box>
  )
}

export default App