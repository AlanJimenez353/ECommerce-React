import React, { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";


export const HpApi = () => {

    const [id,setId]= useState(0)
    const {data} = useFetch(`http://hp-api.herokuapp.com/api/characters/students`,[])
    console.log(data)
    
    const handleSiguiente= () =>{
        setId(id+1)
    }
    
    
    
    return (
        <div className="container my-5">
                {data && 
                <>
                <h2>{data[id].name}</h2>
                <img src={data[id].image} alt={data[id].name}></img>
                <p>Casa: {data[id].house}</p>
                <button className="btn btn-dark" onClick={handleSiguiente}>Ver siguiente Personaje</button>
        
                </>
                }
                </div>
    )
}
