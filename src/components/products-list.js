import React, { Component } from "react"
import ProductListItem from "./product-item"

const ProductList = () => (
  <section className="products-wrapper">
    <h5 className="text-uppercase">Our Astonishing</h5>
    <h2 className="text-primary">Products Catalogue</h2>
    <div className="container">
      <div className="products">
        <ProductListItem></ProductListItem>
        <ProductListItem></ProductListItem>
        <ProductListItem></ProductListItem>
        <ProductListItem></ProductListItem>
        <ProductListItem></ProductListItem>
        <ProductListItem></ProductListItem>
      </div>
    </div>
  </section>
)

export default ProductList
