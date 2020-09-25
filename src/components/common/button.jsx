import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, label, className = "btn btn-primary mb-4" }) => {
  return (
    <Link to={link}>
      <button className={className}>{label}</button>
    </Link>
  );
};

export default Button;
