import React from "react";


export const ItemFecha=({fecha}) =>{

    return(
        <div className="col-4 my-3">
                    <img src={fecha.img} alt={fecha.artista}/>
                    <h3>{fecha.artista}</h3>
                    <p>Lugar: {fecha.lugar}</p>
                    <p>Precio: ${fecha.precio} </p>
                    <button className="btn btn-dark">Ver mas</button>
        </div>
    )
}