import { ItemCount } from "../ItemCount/ItemCount";
import React from "react";
import { Fechas } from "../Data/Fechas";
import { ItemFecha } from "../ItemFecha/ItemFecha";


export const ItemDetailFecha =({Fechas}) =>{
    const fecha=Fechas[2]
    
    return(
                      <div className="col-15 my-5">
                      <img src={fecha.img} alt={fecha.artista}/>
                      <h3>{fecha.artista}</h3>
                      <p>Lugar: {fecha.lugar}</p>
                      <p>Precio: ${fecha.precio} </p>
                      <ItemCount/>
           </div>
    )
    }
