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
          Successfull business for interior & architecture
        </h2>
        <p>
          We provide a wide range of high-quality granite, marbles, travertine,
          sandstones for residential and commercial purposes. By working
          together with big brands, small dreams become a reality and dull or
          bland areas in your residential or commercial property become teeming
          with beauty. There are also a large variety of colours to choose from
          in our range of marbles, granite, travertine and sandstones. We are
          openly available to come forward and help you with your kitchen,
          bathroom, or business remodelling projects and feel free to contact
          our e-mail. Our customers are our ultimate powerhouse, that’s why we
          provide the best quality stones at the most competitive price.
        </p>
        <Link to="/products" className="about-info__btn text-uppercase">
          View Our Products
        </Link>
      </div>
    </section>
  </div>
)

export default About
