import React, { Component } from "react"

const Category = props => (
  <div className="category-item">
    <img src={props.img} alt="" />
    <div className="category-item__info">
      <h4 className="category-item__title">{props.title}</h4>
      <p className="category-item__desc">{props.desc}</p>
      <a href="#" className="category-item__action text-uppercase">
        Browse {props.title}
      </a>
    </div>
  </div>
)

export default Category
