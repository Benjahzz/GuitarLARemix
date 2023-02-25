import React from "react";
import { getPost } from "../../models/posts.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "../../utils/helpers";
import styles from "~/styles/blog.css";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no Encontrada",
    });
  }
  return post.data[0];
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Entrada no Encontrada",
      description: `Guitarras, venta de guitarras , guitarra no Encontrada`,
    };
  }
  const {titulo} = data.attributes
  return {
    title: `GuitarLA - ${titulo}`,
    description: "Tienda de guitarras, blog sobre guitarras",
  };
}


const Post = () => {
  const post = useLoaderData();

  const { titulo, contenido, imagen, publishedAt } = post.attributes;

  return (
    <article className="contenedor post mt-3">
      <img
        src={imagen.data[0].attributes.url}
        alt={`Imagen blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
