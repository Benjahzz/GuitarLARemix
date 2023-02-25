import { Link } from '@remix-run/react'
import React from 'react'
import Logo from '~/../public/img/logo.svg'
import Navegacion from './Navegacion'
const Header = () => {
  return (
    <header className='header'>
        <div className="contenedor barra">
            <Link to={'/'} >
                <img src={Logo} alt="Imagen logo" className="logo"/>
            </Link>
            <Navegacion />
        </div>
    </header>
  )
}

export default Header