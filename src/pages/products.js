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

  filterProducts(category) {
    this.setState({
      products: ProductListData.filter(item => item.category === category),
    })
  }

  clearProductFilter() {
    this.setState({
      products: ProductListData,
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
                class="selected"
                onClick={this.clearProductFilter}
              >
                All
              </button>
              {CategoryListData.map(category => (
                <button
                  key={category.id}
                  type="button"
                  onClick={this.filterProducts.bind(null, category.title)}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <div className="products">
              {this.state.products.map(product => (
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
