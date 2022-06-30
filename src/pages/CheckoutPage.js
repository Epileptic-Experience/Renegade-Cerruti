import { useContext, useState, useRef } from 'react';
import CartContext from './../contextos/CartContext';
import { Button, Modal, ModalFooter } from 'react-bootstrap';
import './checkoutPage.css';
import { Link } from 'react-router-dom';
import dataBase from '../utils/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore'

const CheckoutPage = () => {
    const { removeFromCart, cartItemList, cleanCart, getTotalPrice } = useContext(CartContext);
    const totalPrice = getTotalPrice()
    const inputRef = {
        name: useRef(null),
        phone: useRef(null),
        mail: useRef(null),
        direction: useRef(null)
    }

    const [order, setOrder] = useState({
        buyer: {

        },
        items: cartItemList.map((item) => {
            const { id, tittle, price, cantidad } = item
            return {
                id: id,
                tittle: tittle,
                price: price,
                cantidad: cantidad
            }
        }),
        orderTotalPrice: totalPrice


    })

    const [succesOrder, setSuccesOrder] = useState()
    const checkForm = () => {
        return {
            name: inputRef.name.current.value,
            mail: inputRef.mail.current.value,
            phone: inputRef.phone.current.value,
            direction: inputRef.direction.current.value
        }

    }
    const handleSubmit = () => {
        checkForm()
        setOrder({ ...order, buyer: checkForm() })
        addOrder({ ...order, buyer: checkForm() })


    }
    const handleChange = (e) => {

    }
    function MyVerticallyCenteredModal(props) {
        return (


            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                className='modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p>Datos de compra</p>
                    </Modal.Title>
                </Modal.Header>
                {succesOrder ? (
                    <Modal.Body>
                        <div>

                            orden completada con exito
                            numero de orden {succesOrder} <br />


                        </div>
                    </Modal.Body>
                ) : (
                    <>
                        <Modal.Body>
                            <h4>Datos de facturación</h4>
                            <input required type="Text" name='name' ref={inputRef.name} onChange={handleChange} placeholder='nombre' ></input>
                            <input type="Number" name='phone' ref={inputRef.phone} onChange={handleChange} placeholder='telefono'></input>
                            <input type="mail" name='mail' ref={inputRef.mail} onChange={handleChange} placeholder='Email'></input>
                            <input type="text" name='direction' ref={inputRef.direction} onChange={handleChange} placeholder='direccion'></input>
                        </Modal.Body>
                        <Modal.Footer>


                            {loading === false && <Button className='enviar' type='Submit' onClick={handleSubmit}>enviar</Button>}
                        </Modal.Footer>

                    </>
                )}
            </Modal >
        );
    }
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false)


    const addOrder = async (newOrder) => {
        setLoading(true)
        const orderFireBase = collection(dataBase, 'ordenes')
        const orderDoc = await addDoc(orderFireBase, newOrder)
        console.log("orden generada:", newOrder)
        setSuccesOrder(orderDoc.id)
        console.log("id orden:", succesOrder)
        cleanCart()

    }

    return (
        <div className='tittleHolder'>

            <h1>Checkout</h1>
            <div className='wrapCheckout'>

                {
                    cartItemList.map((Producto) => {
                        const { id, tittle, cantidad, price, img } = Producto
                        const Total = ((cantidad * price))
                        return (
                            <>
                                <div className='contenedorCheckout' key={id}>
                                    <div className='contenidoCheckout'>
                                        <p className='textoCheckout' >
                                            {tittle}
                                            <br></br>

                                            <span>{cantidad} X {price}</span> <span>Total:${Total}  </span><span onClick={() => removeFromCart(id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-x remove" viewBox="0 0 16 16">
                                                    <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z" />
                                                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                                </svg>
                                            </span>
                                        </p>
                                    </div>
                                    <div className='contenedorImagenCheckout'>
                                        <img src={img} alt={tittle} className='imagenCheckout' />
                                    </div>

                                </div>

                            </>

                        )

                    })


                }

                {cartItemList.length === 0 ? <Link to={'/productos'}> < Button className='botonCheckout' variant="dark" > ver productos  </Button>  </Link> :
                    <Button className='botonCheckout' variant="dark" onClick={() => setModalShow(true)}>Pagar: ${totalPrice}</Button>}


                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </div >
        </div>
    )
}

export default CheckoutPage