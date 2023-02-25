import { Link, NavLink } from "@remix-run/react";
import React from "react";
import Imagen from "~/../public/img/carrito.png";
const Navegacion = () => {
  return (
    <nav className="navegacion">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : undefined)}>
        Inicio
      </NavLink>
      <NavLink
        to={"/nosotros"}
        className={({ isActive }) => (isActive ? "active" : undefined)}>
        Nosotros
      </NavLink>
      <NavLink
        to={"/guitarras"}
        className={({ isActive }) => (isActive ? "active" : undefined)}>
        Tienda
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) => (isActive ? "active" : undefined)}>
        Blog
      </NavLink>
      <Link to={"/carrito"}>
        <img src={Imagen} alt="Carrito imagen" />
      </Link>
    </nav>
  );
};

export default Navegacion;
