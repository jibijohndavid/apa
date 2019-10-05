import React from "react"
import ProductListItem from "../components/product-item"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProductList from "../data/product-list"

const path = "./images/"

const AllProducts = () => (
  <Layout>
    <SEO title="APA | All Products" />
    <div className="all-products-wrapper">
      <div className="container">
        <div className="products">
          {ProductList.map(product => (
            <ProductListItem
              category={product.category}
              img={path + product.category + "/" + product.img}
              title={product.title}
            ></ProductListItem>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default AllProducts
