import './Cart.css'
import { Link } from 'react-router-dom'
import { CartProvider } from '../contextos/CartContext'

const Cart = () => {
   

        return (
        <Link to={"/checkout"} >
            <div>
                <i className="bi bi-cart4 carrito"></i>
            </div>
        </Link>
        )
  
}
export default Cart