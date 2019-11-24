import React from "react"
import CategoryItem from "./category-item"
import Slider from "react-slick"

import CategoryList from "../data/category-list"

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 650,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const imgPath = "./images/Categories/"

const Categories = () => (
  <section className="categories-wrapper" id="categorySection">
    <h5 className="text-primary text-uppercase">Our Categories</h5>
    <h2 className="text-light">Industires Served</h2>

    <div className="container">
      <div className="categories">
        <Slider {...settings}>
          {CategoryList.map(category => (
            <div key={category.id}>
              <CategoryItem
                title={category.title}
                img={imgPath + category.img}
                desc={category.description}
              ></CategoryItem>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
)

export default Categories
