import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [cartItemList, setCartItemList] = useState([])
    const addProductToCart = (product) => {
        setCartItemList(product)
    }
    const data = {
        cartItemList,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

export { CartProvider }