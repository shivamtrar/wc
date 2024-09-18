import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Testimonials from './components/Testimonials'
import Chat from './components/Chat'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Testimonials/>
      <Chat/>
      <Footer/>
    </div>
  )
}

export default App
