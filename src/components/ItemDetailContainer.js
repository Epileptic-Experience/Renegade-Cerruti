import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail.js"



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const MockProducto = [{
        tittle: "Una muerte en la familia",
        price: "10.000",
        img: "./una_muerte.jpg",
        id: 1,
        detail: "mientras la relación de batman con jason se pone cada vez peor jason descubre mas de su pasado, mientras tanto el joker escapa de arkham nuevamente para realizar su peor broma hasta la fecha"
    }]

    const getProducto = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MockProducto);
            },2000);
        });
    };

    useEffect(() => {
        getProducto()
            .then((res) => { setProducto(res); })
            .catch((err) => { console.log("Fallo en la cargar del detalle"); })

    },[])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer