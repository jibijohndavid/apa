import React from "react"
import Slider from "react-slick"

var settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4500,
  pauseOnFocus: false,
  pauseOnHover: false,
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
                We provide a wide range of high-quality granite, marbles,
                travertine, sandstones for residential and commercial purposes.
                There are also a large variety of colours to choose from in our
                range.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide2">
          <div className="container">
            <div className="hero__title">
              <h1>There are 360 degrees, so why stick to one?</h1>
              <p>
                We provide a wide range of high-quality granite, marbles,
                travertine, sandstones for residential and commercial purposes.
                There are also a large variety of colours to choose from in our
                range.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide3">
          <div className="container">
            <div className="hero__title">
              <h1>Simplicity is the ultimate sophistication.</h1>
              <p>
                We provide a wide range of high-quality granite, marbles,
                travertine, sandstones for residential and commercial purposes.
                There are also a large variety of colours to choose from in our
                range.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide4">
          <div className="container">
            <div className="hero__title">
              <h1>Recognizing the need is the primary condition for design.</h1>
              <p>
                We provide a wide range of high-quality granite, marbles,
                travertine, sandstones for residential and commercial purposes.
                There are also a large variety of colours to choose from in our
                range.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  </>
)

export default Hero
