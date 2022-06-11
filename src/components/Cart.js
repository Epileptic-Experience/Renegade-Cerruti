import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../contextos/CartContext'

const Cart = () => {
    const { getAmountOfItems } = useContext(CartContext)
    const AmountOfItems = getAmountOfItems()
  

    return (
        <Link to={"/checkout"} className="Link" >
            <div>
                <div className='cantidadCart' >
                    <i className="bi bi-cart4 carrito"></i>
                    {AmountOfItems}
                </div>
            </div>
        </Link>
    )

}
export default Cart