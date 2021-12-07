import React, { useContext } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { cartContext } from '../context/cartContext'
import './CartWidget.css'


export const CartWidget = () => {

    const {totalCantidad} = useContext(cartContext)
    return(
        <div className="cart-Widget">
            <BsFillCartPlusFill/>
            <span>{totalCantidad()}</span>
        </div>
    )
}