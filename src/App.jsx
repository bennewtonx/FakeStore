import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header';
import CartContextProvider from './contexts/CartContext';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ProductPage from './pages/ProductPage/ProductPage';
import ContactUs from './pages/ContactUs/ContactUs';
import Cart from './pages/Cart/Cart';
function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/details/:productId' element={<ProductPage />}/>
      <Route path='/contactus' element={<ContactUs />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>

    <Footer />
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
