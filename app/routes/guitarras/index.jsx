import React from "react";
import { getGuitarras } from "../../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "../../components/ListadoGuitarras";

export function meta() {
  return {
    title: "GuitarLA - Tienda",
    descripntion: "GyutarLa - Nuestra coleccion de guitarras",
  };
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}
const Tienda = () => {
  const guitarras = useLoaderData();
  return (
    <>
      <h2 className="heading">Nuestra Coleección</h2>
      <ListadoGuitarras guitarras={guitarras} />
    </>
  );
};

export default Tienda;
