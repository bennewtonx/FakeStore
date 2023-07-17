import { useState } from 'react'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';

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
