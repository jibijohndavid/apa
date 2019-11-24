import React from "react"
import { Link } from "gatsby"

const About = () => (
  <div className="container" id="aboutSection">
    <section className="about-wrapper">
      <div className="about-infographics">
        <img
          src="./images/about1.jpg"
          alt=""
          className="about-infographics__img1"
        />
        <img
          src="./images/about2.jpg"
          alt=""
          className="about-infographics__img2"
        />
        <span className="about-infographics__quality">Quality Assured</span>
      </div>
      <div className="about-info">
        <h4 className="about-info__title-welcome text-primary text-uppercase">
          Welcome to apastones
        </h4>
        <h2 className="about-info__title">
          Succesfull business for interior & architecture
        </h2>
        <p>We provide a wide range high quality granite, marbles, travertine,
            sandstones for residential and commercial purpose. We are
            passionate about what we do, and we love working together to make
            it happen. We look forward to helping you with kitchen, bathroom,
            or business remodelling projects. We care for our customers and our
            customers are our ultimate powerhouse and we make it possible by
            providing them with the best price on top quality product.
            We have a wide variety of colour to choices in differ in pattern in
            marbles, granites, travertine, sandstone.
        </p>
        <h2 className="about-info__title-sec">
        There are 360 degrees, so why stick to one?
        </h2>
        <Link to="/products" className="about-info__btn text-uppercase">
            View Our Products
        </Link>
      </div>
    </section>
  </div>
)

export default About
