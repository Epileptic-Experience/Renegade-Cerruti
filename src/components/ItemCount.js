
import './ItemCount.css'
import { useState } from "react";




const Counter = () => {

    const [Count, setCount] = useState(1);


 

    function addCount() {
        setCount(Count + 1);
    }
    const removeCount = () => {
        setCount(Count - 1)
    }

    const reset = () => {
        setCount(1)
    }



    return (
        <div className="contenedor">
            <button className="boton" onClick={addCount} >+</button>
            <div className="cuenta" >unidades:{Count}</div>
            <button className="boton" onClick={removeCount}  >-</button>
            <br />
            <button className="comprar" onClick={reset} >COMPRAR</button>


        </div>
    );
}


export default Counter