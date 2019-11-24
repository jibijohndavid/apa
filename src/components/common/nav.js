import React from "react"
import { Link } from "gatsby"
// import ContactModal from "../contact-modal"

class HeaderNav extends React.Component {
  // contactModalRef = ({ handleShow }) => (this.showModal = handleShow)
  // openContactModal = () => this.showModal()

  render() {
    return (
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
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <ContactModal ref={this.contactModalRef}></ContactModal> */}
      </div>
    )
  }
}

export default HeaderNav
