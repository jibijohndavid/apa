import React from "react"
import ProductListItem from "../components/product-item"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProductListData from "../data/product-list"
import CategoryListData from "../data/category-list"

const path = "./images/"

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: ProductListData,
    }
    this.filterProducts = this.filterProducts.bind(this)
    this.clearProductFilter = this.clearProductFilter.bind(this)
  }

  filterProducts(category, e) {
    this.setState({
      products: ProductListData.filter(item => item.category === category),
    })
    this.clearFilterButtonSelection()
    e.target.classList.add("selected")
  }

  clearProductFilter(e) {
    this.setState({
      products: ProductListData,
    })
    this.clearFilterButtonSelection()
    e.target.classList.add("selected")
  }

  clearFilterButtonSelection() {
    document.querySelectorAll(".product-filter-btns > .btn").forEach(e => {
      e.classList.remove("selected")
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="All Products" />
        <div className="all-products-wrapper">
          <div className="container">
            <div className="product-filter-btns">
              <button
                type="button"
                className="btn selected"
                onClick={this.clearProductFilter}
              >
                All
              </button>
              {CategoryListData.filter(
                category => category.active === true
              ).map(category => (
                <button
                  className="btn"
                  key={category.id}
                  type="button"
                  onClick={this.filterProducts.bind(null, category.title)}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <div className="products">
              {this.state.products
                .filter(product => product.active === true)
                .map(product => (
                  <ProductListItem
                    key={product.id}
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
  }
}

export default AllProducts
