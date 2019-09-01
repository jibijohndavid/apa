import React, { Component } from "react"
import CategoryItem from "./category-item"

const Categories = () => (
  <section className="categories-wrapper">
    <h5 className="text-primary text-uppercase">Our Categories</h5>
    <h2 className="text-light">Industires Served</h2>

    <div className="container">
      <div className="categories">
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
      </div>
    </div>
  </section>
)

export default Categories
