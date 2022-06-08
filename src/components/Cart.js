import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../contextos/CartContext'

const Cart = () => {
    const { cartItemList } = useContext(CartContext)
    const checkoutList = cartItemList.length
    console.log(cartItemList.cantidad)

    return (
        <Link to={"/checkout"} className="Link" >
            <div>
                <div className='cantidadCart' >
                    <i className="bi bi-cart4 carrito"></i>
                    {checkoutList}
                </div>
            </div>
        </Link>
    )

}
export default Cart