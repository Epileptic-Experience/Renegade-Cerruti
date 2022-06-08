import React from "react";
import MockProductos from "../utils/productosMock";
import { useEffect, useState } from "react";
import Products from "../pages/Products";
import './AllItemList.css'
import { CartProvider } from "../contextos/CartContext";
import Item from "./Item";



const AllItemList = () => {
    const [allProducts, setAllProducts] = useState([])
    
    
    const getAllProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MockProductos)
            }, 500)
        })
    }
    useEffect(() => {

        getAllProducts().then((res) => {
            setAllProducts(res)
        }).catch((err) => {
            console.log("error en la carga", err)
        })
    }, [])

    return (
        <div className="allItems-container">
            {allProducts.map((Product) => {
                const { id, tittle, price, img } = Product
                return (
                    <div className="contenedor">
                        
                            <Item

                                tittle={tittle}
                                price={price}
                                Img={img}
                                id={id}
                            />
                        

                    </div>
                )
            })}
        </div>
    )

}

export default AllItemList