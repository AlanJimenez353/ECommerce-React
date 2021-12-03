import React,{useEffect,useState} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { pedirItem } from "../utils/pedirItem";
import { Fechas } from "../Data/Fechas"


export const FechaDetail=() =>{
    const [Fecha,setFechas] =useState(null)

    
    useEffect(()=>{

        pedirItem(2)
            .then((resp)=>{
                setFechas(resp)
                Fecha=setFechas[2]
            }).catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                console.log("Peticion finalizada")
            })
    },[])
 
    return(
        <div className="col-4 my-3">
                    <img src={Fecha.img} alt={Fecha.artista}/>
                    <h3>{Fecha.artista}</h3>
                    <p>Lugar: {Fecha.lugar}</p>
                    <p>Precio: ${Fecha.precio} </p>
                    <ItemCount/>
        </div>
    )
}