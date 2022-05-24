import Item from "./Item";
import './ItemList.css';
import { useState, useEffect } from "react";

const ItemList = () => {

    const [products, setProducts] = useState([])
    const productos = [
        {
            tittle: "Una muerte en la familia",
            price: "10.000",
            img: './una_muerte.jpg',
            id: 1
        },
        {
            tittle: "crisis en tierras inifinitas",
            price: "3.500",
            img: './crisis_tierras_infinitas.webp',
            id: 2
        },
        {
            tittle: "deadpool mata al universo marvel",
            price: "20.000",
            img: './deadpool_mata.jpg',
            id: 3
        },
        {
            tittle: "deadpool mata al universo marvel otra vez",
            price: "17.000",
            img: './Deadpool_otravez.jpg',
            id: 4
        },
        {
            tittle: "Fear itself: spiderman",
            price: "1.700",
            img: './FearItself.jpg',
            id: 5
        },
        {
            tittle: "Liga de la justicia oscura",
            price: "5.000",
            img: './Liga_oscura.jpg',
            id: 6
        }
    ]

    const getProductos = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productos)
            }, 2000)

        })
    }

    useEffect(() => {
        getProductos().then(
            (res) => {
                setProducts(res)
            }
        ).catch((err) => {

            console.log("fallo en la llamada")
        }
        )
    }, [])

    return (
        <div className="itemListContainer">

            {
                products.map((Producto) => {
                    const { id, tittle, price, img } = Producto
                    return (

                        <Item key={id} tittle={tittle} price={price} Img={img} />


                    )
                })
            }
        </div>
    )
}

export default ItemList