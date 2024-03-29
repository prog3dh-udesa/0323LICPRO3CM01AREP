import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
const opciones = [
    {
        nombre:'Home',
        path:'/'
    },
    {
        nombre:'About',
        path:'/about/354'
    },
    {
        nombre:'ADMIN',
        path:'/admin'
    }
]

function Navbar(){
    return(
        <nav>
        <ul className="main-nav">
            {
                opciones.map((opcion, idx) => 
                <Link to={`${opcion.path}`} key={opcion + idx}>
                    {opcion.nombre}
                </Link>)
            }0
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