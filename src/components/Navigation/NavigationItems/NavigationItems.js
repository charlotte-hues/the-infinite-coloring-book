import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem.js";
import { useLocation } from "react-router-dom";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 780px) {
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
  }
`;

const NavigationItems = props => {
  const location = useLocation();

  const [previousLocation, setPreviousLocation] = useState(location.pathname);

  useEffect(() => {
    setPreviousLocation(location.pathname);
  }, [location]);

  return (
    <ListContainer>
      <NavigationItem link="/create" active>
        create
      </NavigationItem>
      <NavigationItem link="/mydesigns" active>
        my designs
      </NavigationItem>

      {/* <NavigationItem link="/about" active>
        about
      </NavigationItem> */}
      {props.isAuth ? (
        <NavigationItem
          link={{
            pathname: `${previousLocation}/account`,
            state: { modal: true }
          }}
          active
        >
          account
        </NavigationItem>
      ) : (
        <NavigationItem
          link={{
            pathname: `${previousLocation}/login`,
            state: { modal: true }
          }}
          active
        >
          login
        </NavigationItem>
      )}
    </ListContainer>
  );
};

export default NavigationItems;
