import React, { Component } from "react"
import CategoryItem from "./category-item"
import Slider from "react-slick"

var settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
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

const Categories = () => (
  <section className="categories-wrapper">
    <h5 className="text-primary text-uppercase">Our Categories</h5>
    <h2 className="text-light">Industires Served</h2>

    <div className="container">
      <div className="categories">
        <Slider {...settings}>
          <div>
            <CategoryItem
              title="Granites"
              img="./images/Categories/Granites.jpg"
              desc="Granite is a common type of felsic intrusive igneous rock that is granular and phaneritic in texture. Granites can be predominantly white, pink, or gray in color, depending on their mineralogy. Nearly always massive, hard, and tough."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Marbles"
              img="./images/Categories/Marbles.jpg"
              desc="Marble is a metamorphic rock composed of recrystallized carbonate minerals, most commonly calcite or dolomite. Marble is typically not foliated, although there are exceptions. Commonly used as a building material."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Sandstones"
              img="./images/Categories/Sandstones.jpg"
              desc="Sandstone is a sedimentary rock composed of sand-size grains of mineral, rock, or organic material. It also contains a cementing material that binds the sand grains together and may contain a matrix of clay-size particles."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Travetine"
              img="./images/Categories/Travetine.jpg"
              desc="Travertine is a form of limestone deposited by mineral springs, especially hot springs. Travertine often has a fibrous or concentric appearance and exists in white, tan, cream-colored, and even rusty varieties."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Shutters"
              img="./images/Categories/Shutters.jpg"
              desc="A window shutter is a solid and stable window covering usually consisting of a frame of vertical stiles and horizontal rails (top, centre and bottom). Set within this frame can be louvers, solid panels, fabric, glass etc."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Blinders"
              img="./images/Categories/Blinders.jpg"
              desc="A typical window blind is made up of several long horizontal or vertical slats of various types of hard material, including wood, plastic or metal which are held together by cords that run through the blind slats."
            ></CategoryItem>
          </div>
        </Slider>
      </div>
    </div>
  </section>
)

export default Categories
