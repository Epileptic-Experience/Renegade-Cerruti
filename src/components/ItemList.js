import Item from "./Item";
import './ItemList.css';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import MockProductos from "../utils/productosMock";




const ItemList = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    const getProductos = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(MockProductos)
            })

        })
    }
    useEffect(() => {
        console.log("category", category)
        getProductos().then(
            (res) => {
                // setProducts(res)
                setProducts([])
                filterByCategory(res)

            }
        ).catch((err) => {

            console.log("fallo en la llamada", err)
        }
        )
    }, [category])


    const filterByCategory = (array) => {
        return array.map((item) => {
            if (item.category == category) {
                return setProducts(products => [...products, item])
            }
        })
    }

    return (
        <div className="itemListContainer">

            {
                products.map((Producto) => {
                    const { id, tittle, price, img } = Producto
                    return (
                        <div key={id}>
                            <Item

                                tittle={tittle}
                                price={price}
                                Img={img}
                                id={id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList