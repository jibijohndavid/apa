import React from "react"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"

const HeaderNav = () => (
  <div className="nav-wrapper">
    <div className="container">
      <nav>
        <span className="nav__branding">Apastones.</span>
        <ul className="nav__links m-0">
          <li className="active">
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
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default HeaderNav
