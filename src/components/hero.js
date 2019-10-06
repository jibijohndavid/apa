import React, { Component } from "react"
import Slider from "react-slick"

var settings = {
  dots: false,
  arrow: false,
  // autoplay: true,
  autoplaySpeed: 3500,
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
            <div className="hero__title">
              <h1>A design culture that transforms experience</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus quam fugit quae quia tempora officia, blanditiis,
                sapiente veritatis dolorem autem eaque dolores animi.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide2">
          <div className="container">
            <div className="hero__title">
              <h1>A design culture that transforms experience</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus quam fugit quae quia tempora officia, blanditiis,
                sapiente veritatis dolorem autem eaque dolores animi.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide3">
          <div className="container">
            <div className="hero__title">
              <h1>A design culture that transforms experience</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus quam fugit quae quia tempora officia, blanditiis,
                sapiente veritatis dolorem autem eaque dolores animi.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide4">
          <div className="container">
            <div className="hero__title">
              <h1>A design culture that transforms experience</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus quam fugit quae quia tempora officia, blanditiis,
                sapiente veritatis dolorem autem eaque dolores animi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  </>
)

export default Hero
