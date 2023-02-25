import { useOutletContext } from "@remix-run/react";
import React from "react";
import Imagen from "~/../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css"

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    dedscription: "Venta de guitarras, blog de musica"
  }
}

export function links(){
  return [

    {
      rel:"stylesheet",
      href: styles
    },
    {
      rel: 'preload',
      href: Imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={Imagen} alt="Imagen sobre Nosotros" />

        <div >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet rutrum odio sed commodo. Mauris vitae dapibus odio, in
            malesuada turpis. Etiam non lectus ac odio volutpat tristique.
            Pellentesque sollicitudin lorem eu malesuada suscipit. Phasellus vel
            massa at metus volutpat pellentesque accumsan congue ante.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet rutrum odio sed commodo. Mauris vitae dapibus odio, in
            malesuada turpis. Etiam non lectus ac odio volutpat tristique.
            Pellentesque sollicitudin lorem eu malesuada suscipit. Phasellus vel
            massa at metus volutpat pellentesque accumsan congue ante.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
