import React from "react"
import { Link } from "gatsby"

const Category = props => (
  <div className="category-item">
    <img src={props.img} alt="" />
    <div className="category-item__info">
      <h4 className="category-item__title">{props.title}</h4>
      <p className="category-item__desc">{props.desc}</p>
      <Link
        to="/products"
        className="category-item__action text-uppercase"
        state={{ browsedCategory: props.title }}
      >
        Browse {props.title}
      </Link>
    </div>
  </div>
)

export default Category
