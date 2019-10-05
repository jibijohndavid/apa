import React from "react"

import Layout from "../components/layout"
import HeroSection from "../components/hero"
import AboutSection from "../components/about"
import CategorySection from "../components/categories-list"
import ProductsListSection from "../components/products-list"
import BrandListSection from "../components/brands-list"
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
  </Layout>
)

export default IndexPage
