import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-main mt-5">
      <div className="container py-4">
        <div className="row gy-4 align-items-start">
          {/* About Section */}
          <div className="col-12 col-md-4">
            <h5 className="mb-2">🧁 Baker's Magic</h5>
            <p className="footer-about">Delicious cakes, sweets, snacks, and beverages delivered fresh to your doorstep. Order online and enjoy the magic!</p>
          </div>
          {/* Opening Hours */}
          <div className="col-6 col-md-4">
            <h6 className="mb-2">Opening Hours</h6>
            <ul className="footer-hours list-unstyled">
              <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
              <li>Sat - Sun: 9:00 AM - 10:00 PM</li>
              <li>Delivery: 7 Days a Week</li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="mb-2">Contact</h6>
            <ul className="footer-contact list-unstyled">
              <li><span role="img" aria-label="email">📧</span> <a href="mailto:kamaleshapk73663@gmail.com">kamaleshapk73663@gmail.com</a></li>
              <li><span role="img" aria-label="phone">📞</span> <a href="tel:+919790573663">+91 9790573663</a></li>
              <li><span role="img" aria-label="github">🌐</span> <a href="https://github.com/Kamalesh03420" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <div className="text-center small text-muted">&copy; {new Date().getFullYear()} Baker's Magic. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer