import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";






const ItemDetailContainer = () => {
    const MockProductos = [
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
    const { id } = useParams
    const [product, setProduct] = useState({})

    useEffect(() => {
        const productfilter = MockProductos.find((product) => {
            return (
                product.id == id
            )

        });
        setProduct(productfilter)
    }, [id])

    
    return (
        <div>
            <ItemDetail data={product} />
        </div>
    )

}


export default ItemDetailContainer