import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeICON from "../homeicon.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={homeICON} alt="store" className="navbar-brand" />
        </Link>
        <Link to="/cart" className="nav-link ml-auto">
          <ButtonContainer>
            <span className="rm-2">
              <i className="fas fa-cart-plus"> My Cart</i>
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
