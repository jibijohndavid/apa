import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="container">
      <div className="footer">
        <div className="footer__company-info">
          <h2 className="text-primary app-name">Apastones.</h2>
          <p>
            We provide a wide range high quality granite, marbles, travertine,
            sandstones for residential and commercial purpose. We are passionate
            about what we do, and we love working together to make it happen.
          </p>
          <h5 className="m-0">
            <a href="tel:61406782219" className="text-primary">
              +61 040 378 2219
            </a>
          </h5>
        </div>
        <div className="footer__quick-links">
          <h5 className="text-uppercase">About</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#aboutSection">What We Do</Link>
            </li>
            <li>
              <Link to="/#categorySection">Categories</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/#brandSection">Brands</Link>
            </li>
            {/* <li>
              <Link to="/">Contact Us</Link>
            </li> */}
          </ul>
        </div>
        <div className="footer__contact">
          <h5 className="text-uppercase">Contact</h5>
          <p className="text-primary text-uppercase m-0">address</p>
          <p className="">
            No: 4 Monarch Close, Carindale,<br></br>4152, Brisbane, QLD,
            Australia
          </p>

          <p className="text-primary text-uppercase m-0">email</p>
          <p className="">info@apastones.com</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
