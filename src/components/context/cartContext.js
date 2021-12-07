import { createContext, useState } from "react";

export const cartContext=createContext()


export const CartProvider= ({children}) =>{

    const[cart,setCart]=useState([])
    console.log(cart)
    
    const agregarAlCarrito = (fecha) =>{
        setCart( [...cart, fecha])
    }
  
  //Some funciona como el find pero retorna true or false
    const isInCart=(id)=>{
          return cart.some((e) => e.id === id)
      }

    //CartWidgetCounter
    const totalCantidad= () =>{
        return cart.reduce((acc,el) => acc + el.cantidad,0 )

    }

    return(
        <cartContext.Provider value={ {
            cart,
            agregarAlCarrito, 
            isInCart,
            totalCantidad
          } }>
        {/* Si o si tengo que devolver los children que capturo en App.js}*/}
            {children}
        </cartContext.Provider>
    )
}