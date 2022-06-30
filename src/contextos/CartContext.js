import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [cartItemList, setCartItemList] = useState([])

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
    const cleanCart = () => {
        setCartItemList([])
    }
    const getAmountOfItems = () => {
        let amount = 0
        cartItemList.forEach((item) => { amount = amount + item.cantidad })
        return amount
    }

    const getTotalPrice = ()=>{
        let totalPrice = 0
        cartItemList.forEach((item)=>{totalPrice = totalPrice + item.cantidad * item.price })
        return totalPrice
    }
    const data = {
        cartItemList,
        addProductToCart,
        removeFromCart,
        getAmountOfItems,
        setCartItemList,
        cleanCart,
        getTotalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

export { CartProvider }