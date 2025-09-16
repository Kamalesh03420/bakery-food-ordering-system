import React, { useRef } from 'react'
import cakes from '../assets/cakes.jpeg'
import sweets from '../assets/sweets.jpeg'
import snacks from '../assets/snacks.jpeg'
import bevarages from '../assets/bevarages.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  const categoryRef = useRef(null);
  const handleOrderNow = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="home-bg">
      <section className="hero-banner d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-3 fw-bold mb-3">Welcome to Baker's Magic</h1>
        <p className="lead mb-4">Delicious Cakes, Sweets, Snacks & Beverages delivered fresh to your doorstep!</p>
        <button className="btn btn-lg btn-warning shadow" onClick={handleOrderNow}>Order Now</button>
      </section>
      <div className="container py-5" ref={categoryRef}>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-card h-100 text-center p-3">
              <Link to='/cakes'><img src={cakes} className='img-fluid rounded imgHover mb-3' alt="Cakes" /></Link>
              <h2 className="h4">Cakes</h2>
              <p>Delight in our wide variety of freshly baked cakes, crafted with love and the finest ingredients. From rich chocolate indulgence to light and fluffy sponges, we have the perfect cake for every celebration and craving.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-card h-100 text-center p-3">
              <Link to='/sweets'><img src={sweets} className='img-fluid rounded imgHover mb-3' alt="Sweets" /></Link>
              <h2 className="h4">Sweets</h2>
              <p>Experience the sweetness of tradition with our collection of Indian and international sweets. From melt-in-the-mouth laddoos to syrupy gulab jamuns and colorful treats, there's something to please every sweet tooth.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-card h-100 text-center p-3">
              <Link to='/snacks'><img src={snacks} className='img-fluid rounded imgHover mb-3' alt="Snacks" /></Link>
              <h2 className="h4">Snacks</h2>
              <p>Craving a quick bite? Explore our delicious snacks — crispy, spicy, and full of flavor! Whether it's savory samosas, crunchy murukku, or cheesy bites, we've got the perfect munchies for any time of day.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-card h-100 text-center p-3">
              <Link to='/bevarages'><img src={bevarages} className='img-fluid rounded imgHover mb-3' alt="Beverages" /></Link>
              <h2 className="h4">Beverages</h2>
              <p>Refresh and recharge with our selection of chilled and hot beverages. From creamy milkshakes and fresh juices to aromatic teas and coffees, every sip is a treat for your senses. Chill your day and your mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home