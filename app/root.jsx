import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import {ClientOnly} from 'remix-utils'
import Styles from "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width,initial-scale=1",
  };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: Styles,
    },
  ];
}
export default function root() {
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("carrito"))  : null 
  const [carrito, setCarrito] = useState(carritoLS || []);
  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };
  const eliminarGuitarra = (id) => {
    const guitarrasActualizadas = carrito.filter((guitarraState)=>{
      return guitarraState.id !== id
    })
    setCarrito(guitarrasActualizadas)
  };
  useEffect(()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
  },[carrito])
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          eliminarGuitarra
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
/* Manejo de errores*/

export function CatchBoundary() {
  const error = useCatch();

  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to={"/"}>
        Tal vez quieras volver a la p??gina principal
      </Link>
    </Document>
  );
}
export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to={"/"}>
        Tal vez quieras volver a la p??gina principal
      </Link>
    </Document>
  );
}
