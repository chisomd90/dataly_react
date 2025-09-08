import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Products from './components/Products';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Analytics from './components/Analytics';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App