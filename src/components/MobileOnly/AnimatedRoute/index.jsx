import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const AnimatedRoute = ({ children, path }) => {
  return (
    <Route exact path={path}>
      {({ match }) => (
        <CSSTransition
          in={match !== null}
          timeout={300}
          classNames={"page"}
          unmountOnExit
        >
          <div className="page">{children}</div>
        </CSSTransition>
      )}
    </Route>
  );
};

AnimatedRoute.propTypes = {
  children: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default AnimatedRoute;
