import { ItemCount } from "../ItemCount/ItemCount";
import React from "react";


export const ItemDetailFecha =({Fechas}) =>{
    
    return(
                      <div className="col-15 my-5">
                      <img src={Fechas.img} alt={Fechas.artista}/>
                      <h3>{Fechas.artista}</h3>
                      <p>Lugar: {Fechas.lugar}</p>
                      <p>Precio: ${Fechas.precio} </p>
                      <ItemCount/>
           </div>
    )
    }
