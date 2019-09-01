import React, { Component } from "react"

const About = () => (
  <div className="container">
    <section className="about-wrapper">
      <div className="about-infographics">
        <img
          src="https://dummyimage.com/300x800/3f3250/fff.png"
          alt=""
          className="about-infographics__img1"
        />
        <img
          src="https://dummyimage.com/600x500/22252c/fff.png"
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
        <p>
          Lorem ipsum dolor amet dIY sustainable man braid chartreuse. Four
          dollar toast slow-carb cold-pressed echo park. Bespoke actually
          unicorn pabst, twee tumblr scenester. Bespoke cred venmo blue bottle.
          Synth kinfolk shabby chic echo park gochujang tumeric brooklyn la
          croix squid butcher mustache. Truffaut stumptown tote bag pok pok
          typewriter chambray normcore hot chicken tumeric.
        </p>
        <h2 className="about-info__title-sec">
          Architecture is not merely national but Inclearly has local ties in
          that it is root
        </h2>
        <button type="button" className="about-info__btn text-uppercase">
          View Products
        </button>
      </div>
    </section>
  </div>
)

export default About
