export async function getPosts(){
    const url = `${process.env.API_URL}posts?populate=imagen`;
  const respuesta = await fetch(url);
  return await respuesta.json();
}


export async function getPost(url){
  const respuesta = await fetch(`${process.env.API_URL}posts?filters[url]=${url}&populate=imagen`);
  return await respuesta.json();

}