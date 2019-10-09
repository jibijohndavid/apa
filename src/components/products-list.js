import React, { Component } from "react"
import ProductListItem from "./product-item"
import { Link } from "gatsby"

var path = "./images/"

const ProductList = () => (
  <section className="products-wrapper">
    <h5 className="text-uppercase">Our Astonishing</h5>
    <h2 className="text-primary">Products Catalogue</h2>
    <div className="container">
      <div className="products">
        <ProductListItem
          rkey="1"
          category="Marbles"
          img={path + "Marbles/bruno-white.jpg"}
          title="Bruno White"
        ></ProductListItem>
        <ProductListItem
          rkey="2"
          category="Marbles"
          img={path + "Marbles/ocean-black.jpg"}
          title="Ocean Black"
        ></ProductListItem>
        <ProductListItem
          rkey="3"
          category="Granites"
          img={path + "Granites/ivory-fantasy.jpg"}
          title="Ivory fantasy"
        ></ProductListItem>
        <ProductListItem
          rkey="4"
          category="Granites"
          img={path + "Granites/lavendar-blue.jpg"}
          title="Lavender Blue"
        ></ProductListItem>
        <ProductListItem
          rkey="5"
          category="Granites"
          img={path + "Granites/kashmir-white.jpg"}
          title="Kashmire White"
        ></ProductListItem>
        <ProductListItem
          rkey="6"
          category="Travertine"
          img={path + "Travertine/beige.jpg"}
          title="Beige"
        ></ProductListItem>
        <ProductListItem
          rkey="7"
          category="Travertine"
          img={path + "Travertine/silver.jpg"}
          title="Silver"
        ></ProductListItem>
        <ProductListItem
          rkey="8"
          category="Blinders"
          img={path + "Blinders/zebra-roller.jpg"}
          title="Zebra Roller Blinds"
        ></ProductListItem>
        <ProductListItem
          rkey="9"
          category="Blinders"
          img={path + "Blinders/wooden.jpg"}
          title="Wooden Blinds"
        ></ProductListItem>
      </div>
      <Link to="/products" className="cta__action">
        View All Products
      </Link>
    </div>
  </section>
)

export default ProductList
