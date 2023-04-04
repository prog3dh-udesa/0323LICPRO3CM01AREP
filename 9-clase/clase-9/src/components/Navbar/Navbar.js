import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
const opciones = [
    {
        nombre: 'Home',
        path: '/'
    },
    {
        nombre:'Personajes',
        path:'/personajes'
    },
    {
        nombre: 'Pagina de busqueda',
        path:'/busqueda'
    },
    {
        nombre:'Favoritos',
        path: '/favoritos'
    }
]

function Navbar(){
    return(
        <nav>
        <ul className="main-nav">
            {
                opciones.map((elm, idx) => <li>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>)
            }
        </ul>
        <ul className="user">
            <li>
                Nombre usuario 
                <img src="./img/user.jpg" alt=""/>
            </li>
        </ul>
        </nav>
    )
}
export default Navbar