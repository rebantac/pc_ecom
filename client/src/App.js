import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PdtDetail from './pages/PdtDetail';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Products from './components/Products';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productCard' element={<ProductCard/>}/>
        <Route path='/product/:id' element={<PdtDetail />} /> 
        <Route path='/products' element={<Products/>}/>
      </Routes>

      <Footer />
    </Box>
  )
}

export default App