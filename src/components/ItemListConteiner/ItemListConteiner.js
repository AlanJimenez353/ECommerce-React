import React,{ useEffect, useState } from "react";
import { Fechas } from "../Data/Fechas"
import { FechasList } from "../FechasList/FechasList";
import { pedirDatos } from "../utils/pedirDatos";



export const ItemListConteiner = () =>{

    ///COMIENZO CON LAS FECHAS VACIAS
const [fechas,setFechas]= useState([])
const[loading,setLoading]=useState(false)

//REALIZO RENDERIZACION Y CUANDO ACTUALIZA YA TENGO MIS FECHAS CARGADAS
useEffect(()=>{

    setLoading(true)
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
            setLoading(false)
        })
},[])

// UNA VEZ CON LAS FECHAS CARGADAS LLAMO A  FUNCION QUE CREA TABLA DE FECHAS
// Utilizo el set loading para que los componentes del ItemList no se renderizen antes de estar cargados
    return(
        <div> 
            {
                loading
                ? <h2>Cargando...</h2>
                : <FechasList Fechas= {Fechas}/>
            }
        </div>
    )

}