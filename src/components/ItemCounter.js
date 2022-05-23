import { useState } from "react";
import './ItemCounter.css'

const ItemCounter =  () => {
        const [count, setCount] = useState(1);

        const stock = Math.floor(Math.random() * 100)

        function addCount() {
            if (count < stock) {
                setCount(count + 1);
            }

        }
        const removeCount = () => {
            setCount(count - 1)
        }

        const reset = () => {
            setCount(1)
        }



        return (
            <div className="contenedor">
                <button className="boton" onClick={addCount}  >+</button>
                <div className="cuenta" >unidades:{count}</div>
                <button className="boton" onClick={removeCount} disabled={count === 1}  >-</button>
                <br />
                <button className="comprar" onClick={reset}>Agregar al carrito</button>
            </div>)
    }
export default ItemCounter