import React, { Component } from "react"

const About = () => (
  <div className="container">
    <section className="about-wrapper">
      <div className="about-infographics">
        <img
          src="https://images.unsplash.com/photo-1481151500463-1fa2dd2d5dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
          alt=""
        />
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
