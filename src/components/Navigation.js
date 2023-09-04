import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { CartContext } from "../contexts/CartContext";

const Navigation = () => {
  const sepet = useContext(CartContext);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{sepet.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
