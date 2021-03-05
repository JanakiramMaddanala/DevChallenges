import React from "react";
import classNames from "class-names";
import _ from "lodash";
import "./Button.css";

const Button = ({ text = "Default", ...rest }) => {
  const {
    variant,
    disableShadow,
    disabled,
    startIcon,
    endIcon,
    size,
    color,
  } = rest;

  const btnClassName = classNames({
    "btn-default": _.isEmpty(rest) || color === "default",
    "btn-outline": variant === "outline",
    "btn-text": variant === "text",
    "btn-disable-shadow": disableShadow,
    "btn-disabled": disabled,
    "btn-icon": startIcon || endIcon,
    "btn-sm": size === "sm",
    "btn-md": size === "md",
    "btn-lg": size === "lg",
    "btn-primary": color === "primary",
    "btn-secondary": color === "secondary",
    "btn-danger": color === "danger",
  });

  return (
    <button className={`btn ${btnClassName}`} disabled>
      {startIcon && <span class="material-icons">{startIcon}</span>}
      <span>{text}</span>
      {endIcon && <span class="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
