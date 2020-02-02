import React from "react"
import ProductListItem from "./product-item"
import ProductListData from "../data/product-list"
import { Link } from "gatsby"

const path = "./images/"
let randomProducts = []

const generateRandomProducts = () => {
  const activeProducts = ProductListData.filter(
    product => product.active === true
  )
  let randumProductNumberArray = () => {
    let randomNumberArr = []
    while (randomNumberArr.length < 9) {
      let r = Math.floor(Math.random() * activeProducts.length)
      if (randomNumberArr.indexOf(r) === -1) randomNumberArr.push(r)
    }
    return randomNumberArr
  }
  for (let index of randumProductNumberArray()) {
    randomProducts.push(activeProducts[index])
  }
}
generateRandomProducts()

const ProductList = () => (
  <section className="products-wrapper">
    <h5 className="text-uppercase">Our Astonishing</h5>
    <h2 className="text-primary">Products Catalogue</h2>
    <div className="container">
      <div className="products">
        {randomProducts.map(product => (
          <ProductListItem
            key={product.id}
            category={product.category}
            img={path + product.category + "/" + product.img}
            title={product.title}
          ></ProductListItem>
        ))}
      </div>
      <Link to="/products" className="cta__action">
        View All Products
      </Link>
    </div>
  </section>
)

export default ProductList
