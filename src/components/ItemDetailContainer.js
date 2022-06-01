import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { mockProductos } from "../utils/productosMock";
import { useParams } from "react-router-dom";






const ItemDetailContainer = () => {
    const { id } = useParams
    const [product, setProduct] = useState({})

    useEffect(() => {
        const productfilter = mockProductos.find((product) => {
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