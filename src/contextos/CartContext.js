import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [cartItemList, setCartItemList] = useState([])
    // const Total = (cartItemList.cantidad * cartItemList.price)

    // const totalCompra = ([...Total + Total])

    const addProductToCart = (product) => {
        const cartList = [...cartItemList];
        cartList.push(product);
        setCartItemList(cartList)
    }
    const removeFromCart = (productId) => {
        const newArray = [];
        for (let index = 0; index < cartItemList.length; index++) {
            const item = cartItemList[index];
            if (productId !== item.id) newArray.push(item);
        }
        setCartItemList(newArray)
    }

    const getAmountOfItems = () => {
        let amount = 0
        cartItemList.forEach((item) => { amount = amount + item.cantidad })
        return amount
    }
    const data = {
        cartItemList,
        addProductToCart,
        removeFromCart,
        getAmountOfItems,
        
        // totalCompra
       
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

export { CartProvider }