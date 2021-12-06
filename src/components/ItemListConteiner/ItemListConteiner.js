import React,{ useEffect, useState } from "react";
import { useParams } from "react-router";
import { FechasList } from "../FechasList/FechasList";
import { pedirDatos } from "../utils/pedirDatos";



export const ItemListConteiner = () =>{

    ///COMIENZO CON LAS FECHAS VACIAS
const [fechas,setFechas]= useState([])
const[loading,setLoading]=useState(false)

//Capturar parametros para retornar categoria mediante Router

const {categoryId} =useParams()


    useEffect(()=>{
            setLoading(true)
            pedirDatos()
                .then((resp)=>{
                    if(categoryId){
                        setFechas(resp.filter((element)=> element.category === categoryId))
                    }
                    else{
                        setFechas(resp)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
                .finally(()=>{
                    console.log("Peticion finalizada")
                    setLoading(false)
                })
    },[categoryId])

// UNA VEZ CON LAS FECHAS CARGADAS LLAMO A  FUNCION QUE CREA TABLA DE FECHAS
// Utilizo el set loading para que los componentes del ItemList no se renderizen antes de estar cargados
    return(
         
            <>
            {
                loading
                ? <h2>Cargando...</h2>
                : <FechasList Fechas= {fechas}/>
            }
            </>
        
    )

}