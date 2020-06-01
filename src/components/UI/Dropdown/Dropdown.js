import React, { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import styled from "styled-components";
import Arrow from "../../UI/Icons/Arrows/Arrows";

const DropdownContainer = styled.div`
  position: relative;
  font-family: "Patua One", cursive;
  width: 100%;
  max-width: 100%;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32px;
  padding: 1px 12px 1px 8px;
  vertical-align: middle;
  font-weight: 500;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 24px;
  color: var(--black);
  background: var(--surface);
  border: 2px solid
    ${props => (props.disabled ? "var(--trim)" : "var(--black)")};
  cursor: pointer;

  &:hover {
    background-color: var(--trim);
  }
`;

const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: var(--shadowSmall);
  z-index: 100;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: var(--surface);
  border: 2px solid var(--trim);
  box-sizing: border-box;
  color: var(--orange);
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  padding: 0.5em 1em;
  margin: 0;
  &:hover {
    background-color: var(--trim);
  }
`;

const StyledSvg = styled.svg`
  width: 28px;
  height: 28px;
  transform: ${props => (!props.open ? "none" : "rotate(180deg)")};
`;

const ArrowSvg = props => (
  <StyledSvg viewBox="0 0 32 32" open={props.open}>
    <Arrow fill="var(--black)" />
  </StyledSvg>
);

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggling = () => setIsOpen(!isOpen);
  return (
    <DropdownContainer ref={ref}>
      <DropdownHeader onClick={toggling}>
        {props.value}
        <ArrowSvg open={isOpen} />
      </DropdownHeader>
      {isOpen && (
        <ListContainer onClick={toggling}>
          <DropDownList value={props.value}>{props.children}</DropDownList>
        </ListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
