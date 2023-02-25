import { Link } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";

const Post = ({ post }) => {
  const { titulo, contenido, imagen, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        src={imagen.data[0].attributes.formats.medium.url}
        alt={`Imagen blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link to={`/blog/${url}`} className="enlace">
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
