import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLi = styled.li`
  padding: 6px 10px;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media only screen and (max-width: 780px) {
    padding: 0;
    text-align: center;
    height: 100px;
    width: 100vw;
    line-height: 80px;

    &:hover {
      transform: translateY(-2px);
    }

    }
  }
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
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

  @media only screen and (max-width: 780px) {
    color: var(--surface);
    font-size: 1.8rem;
    text-align: center;
    width: 70vw;

    &.Active {
      color: var(--surface);
      width: 150px;
      border-bottom: 4px solid var(--surface);
      &:hover {
        cursor: default;
        transform: none;
      }
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
