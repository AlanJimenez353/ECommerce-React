import React, { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";


export const HpApi = () => {

    const {data} = useFetch("http://hp-api.herokuapp.com/api/characters/students")
    console.log(data)
    return (
        <div className="container my-5">
                {data && 
                <>
                <h2>Su personaje es: {data[0].name}</h2>
                <img src={data[0].image} alt={data[0].name}></img>
                <p>Casa: {data[0].house}</p>
        
                </>
                }
                </div>
    )
}
