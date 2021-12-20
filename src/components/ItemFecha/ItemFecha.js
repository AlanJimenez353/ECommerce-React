import React from "react";
import { Link } from "react-router-dom";
import './ItemFecha.css'

export const ItemFecha=({fecha}) =>{

    return(
        <div className="col-4 my-4 p-3 ">
                 <div className="datecontein">
                    <img src={fecha.img} alt={fecha.artista}/>
                    <h3>{fecha.artista}</h3>
                    <p>Lugar: {fecha.lugar}</p>
                    <p>Precio: ${fecha.precio} </p>
                    <p>Categoria:  {fecha.category}</p>
                    <Link to = {`/detail/${fecha.id}`} className="btn btn-dark">Ver mas</Link>
                </div>
        </div>
    )
}