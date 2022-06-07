import { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './ItemCounter.css'


const ItemCounter = ({ addProductToCart, cantidad, setCantidad, stock }) => {

    
   

    function addCount() {
        if (cantidad < stock) {

            setCantidad(cantidad + 1)
        }

    }
    const removeCount = () => {

        setCantidad(cantidad - 1)
    }




    return (
        <div className="contenedor">
            <button className="boton" onClick={addCount} >+</button>
            <div className="cuenta" >unidades:{cantidad}</div>
            <button className="boton" onClick={removeCount} disabled={cantidad === 1}  >-</button>
            <br />
            <button className="comprar"
                onClick={addProductToCart}>
                Agregar al carrito
            </button>

        </div>)
}
export default ItemCounter