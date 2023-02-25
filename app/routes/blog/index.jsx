import React from "react";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/blog.css";
import ListadoPosts from "../../components/ListadoPosts";
import { getPosts } from "../../models/posts.server";

export function meta() {
  return {
    title: "GuitarLA - Blog",
    description: "Tienda de guitarras, blog sobre guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}
const Blog = () => {
  const posts = useLoaderData();
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        <ListadoPosts posts={posts} />
      </div>
    </>
  );
};

export default Blog;
