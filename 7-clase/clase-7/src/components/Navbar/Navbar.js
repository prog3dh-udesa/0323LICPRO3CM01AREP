import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
const opciones = [
    {
        nombre: 'Home',
        path: '/'
    },
    {
        nombre:'About',
        path: '/about'
    },
    {
        nombre:'Users',
        path:'/users'
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