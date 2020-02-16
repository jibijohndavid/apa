import React from "react"
import Slider from "react-slick"

var settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnFocus: false,
  pauseOnHover: false,
  infinite: true,
  slidesToShow: 1,
}

const Hero = () => (
  <>
    <Slider {...settings}>
      <div>
        <section className="hero-wrapper slide3 top">
          <div className="container">
            <div className="hero__title">
              <h1>Simplicity is the ultimate sophistication.</h1>
              <p>
                We provide a wide range of high-quality granite, marbles and
                travertine. There are also a large variety of colours to choose
                from in our range.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide1 top right">
          <div className="container">
            <div className="hero__title">
              <h1>A design culture that transforms experience</h1>
              <p>
                Be a collection of what you love. Make it simple but elegant.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="hero-wrapper slide2 top">
          <div className="container">
            <div className="hero__title">
              <h1>Facelift your kitchen, bathroom and flooring.</h1>
              <p>
                Your home should tell the story of who you are and be a
                collection of what you love.
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
              <p>Decorating is not a look, It's a point of view.</p>
            </div>
          </div>
        </section>
      </div>
    </Slider>
  </>
)

export default Hero
