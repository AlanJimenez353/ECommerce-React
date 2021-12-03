import React,{ useEffect, useState } from "react";
import { Fechas } from "../Data/Fechas"
import { FechasList } from "../FechasList/FechasList";
import { pedirDatos } from "../utils/pedirDatos";



export const ItemListConteiner = ({greeting}) =>{

    ///COMIENZO CON LAS FECHAS VACIAS
const [fechas,setFechas]= useState([])


//REALIZO RENDERIZACION Y CUANDO ACTUALIZA YA TENGO MIS FECHAS CARGADAS
useEffect(()=>{

    pedirDatos()
        .then((resp)=>{
            setFechas(resp)
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            console.log("Peticion finalizada")
        })
},[])

// UNA VEZ CON LAS FECHAS CARGADAS LLAMO A  FUNCION QUE CREA TABLA DE FECHAS
    return(
        <div>
            <FechasList Fechas= {Fechas}/>
        </div>
    )

}