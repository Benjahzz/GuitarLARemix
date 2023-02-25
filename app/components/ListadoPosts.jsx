import React from 'react'
import Post from './Post'

const ListadoPosts = ({posts}) => {
  return (
    <>
        {
          posts.map(post => <Post post={post.attributes} key={post.id}/>)
        }
    </>
  )
}

export default ListadoPosts