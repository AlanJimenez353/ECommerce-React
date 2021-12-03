import React from "react";
import { Fechas } from "../Data/Fechas";
import { ItemFecha } from "../ItemFecha/ItemFecha";


export const FechasList =({Fechas}) =>{
    
    
    return(
        <div className="conteiner row my-3">
            
            <h2>Lista Fechas</h2>
            <hr/>
            
            {
//Recorro el mapa y por cada iteracion devuelvo un objeto (fecha) con ese objeto llamo a la ItemFecha 
//que retorna el componente y se agrega a el conteiner
                Fechas.map((element)=> <ItemFecha fecha={element}/>)
            }
            </div>
    )
    }
