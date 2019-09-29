import React, { Component } from "react"
import Slider from "react-slick"

var settings = {
  dots: false,
  arrow: false,
  speed: 300,
  infinite: true,
  slidesToShow: 1,
}

const Hero = () => (
  <>
    <Slider {...settings}>
      <div>
        <section className="hero-wrapper">
          <div className="container">
            <h1 className="hero__title">
              A design culture that transforms experience
            </h1>
          </div>
        </section>
      </div>
    </Slider>
  </>
)

export default Hero
