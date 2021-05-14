import React from "react";
import PropTypes from "prop-types";
import { A, Btn, Link } from "./style";

const Button = ({
  display,
  type,
  tag,
  onClick,
  href,
  target,
  disabled,
  children,
}) => {
  switch (tag) {
    case "button":
      return (
        <Btn
          display={display}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </Btn>
      );
    case "link":
      return (
        <Link display={display} type={type} disabled={disabled} to={href}>
          {children}
        </Link>
      );
    case "a":
      return (
        <A
          display={display}
          type={type}
          disabled={disabled}
          href={href}
          target={target}
        >
          {children}
        </A>
      );
  }
};

Button.defaultProps = {
  display: "inline",
  type: "primary",
  tag: "button",
  disabled: false,
};

Button.propTypes = {
  display: PropTypes.oneOf(["block", "inline"]),

  type: PropTypes.oneOf(["primary", "secondary", "flat"]),

  tag: PropTypes.oneOf(["button", "link", "a"]),

  onClick: PropTypes.func,

  href: PropTypes.string,

  target: PropTypes.oneOf(["", "_blank"]),

  disabled: PropTypes.bool,
};

export default Button;
