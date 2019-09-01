import React from "react"
import BrandItemLi from "./brand-item"

const BrandsList = () => (
  <section className="brands-wrapper">
    <h5 className="text-primary">Our Trustworthy</h5>
    <h2 className="text-uppercase">Brands</h2>

    <ul className="brands">
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
      <BrandItemLi></BrandItemLi>
    </ul>
  </section>
)

export default BrandsList
