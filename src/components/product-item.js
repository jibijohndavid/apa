import React from "React"

const ProductItem = props => (
  <div className="product-item">
    <div className="product-item__img">
      <small className="product-item__type text-uppercase">
        {props.category}
      </small>
      <img src={props.img} alt="" />
    </div>
    <h4 className="product-item__title">{props.title}</h4>
  </div>
)

export default ProductItem
