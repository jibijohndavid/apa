import React from "react"
import { Link } from "gatsby"

const CallToAction = () => (
  <section className="cta-wrapper">
    <h5 className="text-light text-uppercase">Start Planning your perfect</h5>
    <h2 className="text-light cta__title">
      Home now and save your Ideas for later
    </h2>
    <Link to="/products" className="cta__action">
      View All Products
    </Link>
  </section>
)

export default CallToAction
