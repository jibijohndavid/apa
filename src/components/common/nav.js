import React from "react"
import styled from "styled-components"

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5);

  nav {
    display: flex;
    justify-content: space-between;
  }
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
    <div className="container">
      <nav>
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
      </nav>
    </div>
  </NavWrapper>
)

export default HeaderNav
