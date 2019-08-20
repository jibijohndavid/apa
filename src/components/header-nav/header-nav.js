import React from "react"
import styled from "styled-components"

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: rgba(0, 0, 0, 0.5);
`

const NavLinkWrapper = styled.ul`
  > li {
    display: inline-block;
  }
`
const NavBranding = styled.span``

const NavLink = styled.a`
  color: white;
`

const HeaderNav = () => (
  <NavWrapper>
    <NavBranding>APA</NavBranding>
    <NavLinkWrapper>
      <li>
        <NavLink>About Us</NavLink>
      </li>
      <li>
        <NavLink>Categories</NavLink>
      </li>
      <li>
        <NavLink>Products</NavLink>
      </li>
      <li>
        <NavLink>Brands</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </NavLinkWrapper>
  </NavWrapper>
)

export default HeaderNav
