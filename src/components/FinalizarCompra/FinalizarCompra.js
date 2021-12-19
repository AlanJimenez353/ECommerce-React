import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { Timestamp } from "firebase/firestore/lite"
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import {collection,addDoc,doc,getDoc,getDocs,updateDoc,writeBatch,query,where,documentId} from "firebase/firestore/lite"


export const FinalizarCompra= ()=>{
    
    const [orderId,setOrderId]= useState(null)
    const { cart,totalCompra,vaciarCarrito } =useContext(cartContext)

    const [values,setValues]=useState({
        nombre:'',
        doc:'',
        email:'',
    }) 
    const generarOrden = (buyer) =>{

        const order={
            buyer:buyer,
            items:cart,
            total:totalCompra(),
            //Utilizamos el metodo TImestamp para poder almacernarlo en Firease
            date: Timestamp.fromDate(new Date())
        }
        const batch= writeBatch(db)

        const ordersRef=collection(db,'compras')
        const fechasRef= collection(db,'fechas')
        const q = query(fechasRef,where(documentId(),'in',cart.map(el=>el.id)))
        const outOfStock=[]

        //Manejo de stock en Firebase
        getDocs(q)
        .then((res)=>{
            res.docs.forEach((doc)=>{
                const itemToUpdate=cart.find((prod)=> prod.id === doc.id)
                if(doc.data().stock >= itemToUpdate.cantidad){
                    batch.update(doc.ref,{
                        stock:doc.data().stock-itemToUpdate.cantidad
                    })
                }else{
                    outOfStock.push(itemToUpdate)
                }
            })
            //Si llega a este if significa que se agrego todo exitosamente y hacemos el commit a firebase
            if(outOfStock.length === 0){
                batch.commit()
                
                // Agregar compra a mi colleccion en Firebase 
                addDoc(ordersRef,order)
                .then((res)=>{   
                    setOrderId(res.id)
                    vaciarCarrito()
                }) 
            }else{
                alert("No queda Stock de la fecha")
            }
        })
        
    } 

    //Controladores Formulario
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(values.nombre.length >4 && values.email.length>10 && values.doc>6){
            generarOrden(values)            
        }
        else{
            alert("Campos no validos")
        }
    }
    const handleinputChanger = (e) =>{
        //Lo utilizamos para modificar los datos del input en tiempo real, declaramos elemento name del input para saber sobre que elemento actualizar su estado
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }
    return(
        <div className="container my-5">
            {
                orderId
                    ?
                        <>
                            <h2>Gracias por elegirnos !</h2>
                            <p>Su id de compra es : {orderId}</p>
                            <Link to="/" className="btn btn-primary">Volver a Inicio</Link>
                        </>
                    :
                        <>

                            <h2>Resumen de compra </h2>
                            <hr></hr>
                            <form onSubmit={handleSubmit}>
                                <input name="nombre" value={values.nombre} onChange={handleinputChanger} placeholder="Nombre"    className="form-control my-2" type="text"/>
                                <input name="doc" value={values.doc}    onChange={handleinputChanger} placeholder="documento" className="form-control my-2" type="text"/>
                                <input name="email" value={values.email}  onChange={handleinputChanger} placeholder="Email"     className="form-control my-2" type="email"/>
                                 
                                <button type= "submit">Finalizar</button>
                            </form>

                        </>
            }
        </div>
    )



}