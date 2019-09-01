import React from "react"
import styled from "styled-components"

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9;

  nav {
    display: flex;
    justify-content: space-between;
  }
`

const NavLinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
  > li {
    margin-left: 25px;

    a {
      color: white !important;
      text-decoration: none;
      position: relative;
      padding-bottom: 5px;
      transition: color 0.3s;
      &:after {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0;
        left: 50%;
        bottom: 0;
        height: 3px;
        background: #f7f7f7;
      }

      &:hover {
        opacity: 1 !important;
        &:after {
          width: 100%;
          left: 0;
        }
      }
    }

    &:not(.active) {
      a {
        opacity: 0.7;
      }
    }
  }
`
const NavBranding = styled.span`
  color: #e14658;
  font-size: 30px;
  font-weight: 500;
`

const HeaderNav = () => (
  <NavWrapper>
    <div className="container">
      <nav>
        <NavBranding>Apastones.</NavBranding>
        <NavLinkWrapper className="m-0">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </NavLinkWrapper>
      </nav>
    </div>
  </NavWrapper>
)

export default HeaderNav
