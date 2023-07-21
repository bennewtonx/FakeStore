import { useState } from 'react'
import './App.css'
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import Header from './Header/Header';

function App() {

  const myname = "Ben"

  return (
    <>
    <Header />
    <Homepage />
  <div>
    <h2>hello {myname}</h2>
  </div>
  <Footer />
    </>
  )
}

export default App
