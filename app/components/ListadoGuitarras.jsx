import React from 'react'
import Guitarra from './Guitarra'

const ListadoGuitarras = ({guitarras}) => {
  return (
    <>
        {guitarras?.length && (
          <div className="guitarras-grid">
            {guitarras.map((guitarra) => (
              <Guitarra guitarra={guitarra?.attributes} key={guitarra.id} />
            ))}
          </div>
        )}
    </>
  )
}

export default ListadoGuitarras