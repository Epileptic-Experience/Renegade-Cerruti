import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './ItemCounter.css'

const ItemCounter = () => {
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <button className="comprar" onClick={handleShow}>Agregar al carrito</button>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Producto cargado</Modal.Title>
                </Modal.Header>
                <Modal.Body>tu producto a sido cargado exitosamente y se encuentra a salvo y esperando por ti en el carrito</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>)
}
export default ItemCounter