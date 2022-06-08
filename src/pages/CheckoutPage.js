import { useContext, useState } from 'react';
import CartContext from './../contextos/CartContext';
import { Button } from 'react-bootstrap';
import './checkoutPage.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { removeFromCart, cartItemList } = useContext(CartContext);
    // const [mostrarProductos, setMostrarProductos] = useState(false)

    // const funcionVolver = () => {
    //     setMostrarProductos(!mostrarProductos)
    // }


    return (
        <div>
            <h1>Checkout</h1>
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

            {cartItemList.length === 0 ? <Link to={'/productos'}> < Button className='botonCheckeckout' variant="dark" > ver productos  </Button>  </Link> : < Button className='botonCheckeckout' variant="dark" > PAGAR  </Button> }
        </div >
    )
}

export default CheckoutPage