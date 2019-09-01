import React from "react"

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="container">
      <div className="footer">
        <div className="footer__company-info">
          <h2 className="text-primary">Apastones.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas
            unde at quidem, alias reprehenderit quo accusamus sit doloribus,
            corrupti quibusdam.
          </p>
          <h5 className="m-0">
            <a href="#" className="text-primary">
              666 888 0000
            </a>
          </h5>
        </div>
        <div className="footer__quick-links">
          <h5 className="text-uppercase">About</h5>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h5 className="text-uppercase">Contact</h5>
          <p className="text-primary text-uppercase m-0">address</p>
          <p className="">660 Brooklyn Street, 88 New York</p>

          <p className="text-primary text-uppercase m-0">email</p>
          <p className="">needhelp@jibi.com</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
