import React from "react";
import './styles.css'
const opciones = [
    'ADMIN',
    'Pages',
    'Charts',
    'AnotherOpt'
]

function Navbar(){
    return(
        <nav>
        <ul className="main-nav">
            {
                opciones.map((opcion, idx) => 
                <li key={opcion + idx}>
                    {opcion}
                </li>)
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