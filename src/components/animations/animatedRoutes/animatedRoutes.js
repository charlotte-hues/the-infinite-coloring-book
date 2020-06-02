import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import MountTransition from "../MountTransition/MountTransition";

export const AnimatedRoutesWrapper = props => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        {props.children}
      </Switch>
    </AnimatePresence>
  );
};

export const RouteTransition = props => {
  return (
    <Route path={props.path} exact={props.exact}>
      <MountTransition slide="0" slideUp="-10vh">
        {props.children}
      </MountTransition>
    </Route>
  );
};
