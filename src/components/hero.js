import React, { Component } from "react"
import Slider from "react-slick"

var settings = {
  dots: false,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: false,
  infinite: true,
  slidesToShow: 1,
}

const Hero = () => (
  <>
    <Slider {...settings}>
      <div>
        <section className="hero-wrapper slide1">
          <div className="container">
            <h1 className="hero__title">
              A design culture that transforms experience
            </h1>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide2">
          <div className="container">
            <h1 className="hero__title">
              A design culture that transforms experience
            </h1>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide3">
          <div className="container">
            <h1 className="hero__title">
              A design culture that transforms experience
            </h1>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide4">
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
