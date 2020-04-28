import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonCart } from "./ButtonCart";
import { Context } from "./Context";
const Navbar = () => {
  const { count } = React.useContext(Context);
  const showAmout = () => {
    if (count > 0) {
      return (
        <span className="position-absolute border border-dark">{count}</span>
      );
    }
  };
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 border-bottom border-dark">
      <Link to="/" className="nav-link">
        <img src="img/shoe.svg" alt="img" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link text-title ">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonCart>
          <i className="ri-shopping-bag-line"></i>
          {showAmout()}
        </ButtonCart>
      </Link>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  background: white;
  .nav-link {
    color: black !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
