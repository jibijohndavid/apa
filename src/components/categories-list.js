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
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fj%C3%A6regranitt3.JPG/800px-Fj%C3%A6regranitt3.JPG"
              desc="Granite is a common type of felsic intrusive igneous rock that is granular and phaneritic in texture. Granites can be predominantly white, pink, or gray in color, depending on their mineralogy. Nearly always massive, hard, and tough."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Marbles"
              img="https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              desc="Marble is a metamorphic rock composed of recrystallized carbonate minerals, most commonly calcite or dolomite. Marble is typically not foliated, although there are exceptions. Commonly used as a building material."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Sandstones"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROmd2BdQZL2F0L5xnnYIrAZhvRtO3Qmm07jU7f8fpo23GjEC4d"
              desc="Sandstone is a sedimentary rock composed of sand-size grains of mineral, rock, or organic material. It also contains a cementing material that binds the sand grains together and may contain a matrix of clay-size particles."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Travetine"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToW4Y2E92aZfpPhHQ6sz7n9VtQmzKZ-WAcDB6hOaipLxAlyYTl"
              desc="Travertine is a form of limestone deposited by mineral springs, especially hot springs. Travertine often has a fibrous or concentric appearance and exists in white, tan, cream-colored, and even rusty varieties."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Shutters"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1So8YGNlzkeJelQCdyon1wedywNm-ryVqLQ2OOAUD09GCd6-7"
              desc="A window shutter is a solid and stable window covering usually consisting of a frame of vertical stiles and horizontal rails (top, centre and bottom). Set within this frame can be louvers, solid panels, fabric, glass etc."
            ></CategoryItem>
          </div>
          <div>
            <CategoryItem
              title="Binders"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt5rGaVGlU5SF6Yb7ZKXXVR1vFscoLDwkAitj_MTFhZZK5cQDf"
              desc="A typical window blind is made up of several long horizontal or vertical slats of various types of hard material, including wood, plastic or metal which are held together by cords that run through the blind slats."
            ></CategoryItem>
          </div>
        </Slider>
      </div>
    </div>
  </section>
)

export default Categories
