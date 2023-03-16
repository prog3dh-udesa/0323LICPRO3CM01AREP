import React from "react";
import Categoria from '../Categoria/Categoria'
const numeros = ["1", "2", "3", "4", "5", "6"]
function ContenedorCategorias(){
    return(
        <section className="general-data">
            {
                numeros.map((unNumero, idx) => 
                <Categoria 
                    key={unNumero + idx} 
                    numero={unNumero}
                />)
            }
        </section>
    )
}

export default ContenedorCategorias