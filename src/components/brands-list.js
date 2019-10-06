import React from "react"
import BrandItemLi from "./brand-item"

const BrandsList = () => (
  <section className="brands-wrapper">
    <h5 className="text-primary">Our Trustworthy</h5>
    <h2 className="text-uppercase">Brands</h2>

    <ul className="brands">
      <BrandItemLi img="./images/Brands/capstonelogo.png"></BrandItemLi>
      <BrandItemLi img="./images/Brands/agl-main.png"></BrandItemLi>
      <BrandItemLi img="./images/Brands/kajaria.png"></BrandItemLi>
      <BrandItemLi img="./images/Brands/eon.png"></BrandItemLi>
      <BrandItemLi img="./images/Brands/agastya.jpg"></BrandItemLi>
      <BrandItemLi img="./images/Brands/logo-cmc.png"></BrandItemLi>
      <BrandItemLi img="./images/Brands/as-logo.png"></BrandItemLi>
      <BrandItemLi img="./images/Brands/rollaza.png"></BrandItemLi>
    </ul>
  </section>
)

export default BrandsList
