import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroSection from "../components/hero"
import AboutSection from "../components/about"
import CategorySection from "../components/categories"
import ProductsListSection from "../components/products-list"
import BrandListSection from "../components/brands"
import CallToActionSection from "../components/cta"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <CategorySection></CategorySection>
    <ProductsListSection></ProductsListSection>
    <BrandListSection></BrandListSection>
    <CallToActionSection></CallToActionSection>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
