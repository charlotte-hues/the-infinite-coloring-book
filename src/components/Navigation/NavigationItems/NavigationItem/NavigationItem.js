import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLi = styled.li`
  padding: 6px 10px;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  color: var(--orange);
  transition: all 0.1s ease-in;
  text-decoration: none;
  color: var(--black);

  &:hover {
    transform: translateY(-2px);
  }

  &.Active {
    color: var(--orange);
    border-bottom: 2px solid var(--orange);
    &:hover {
      cursor: default;
      transform: none;
    }
  }
`;

const navigationItem = props => (
  <NavLi>
    <StyledLink to={props.link} exact activeClassName="Active">
      {props.children}
    </StyledLink>
  </NavLi>
);

export default navigationItem;
