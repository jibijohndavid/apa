import React from "react"
const HeaderNav = () => (
  <div className="nav-wrapper">
    <div className="container">
      <nav>
        <span className="nav__branding">Apastones.</span>
        <ul className="nav__links m-0">
          <li className="active">
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
      </nav>
    </div>
  </div>
)

export default HeaderNav
