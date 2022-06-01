import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import MockProductos from "../utils/productosMock";
import { useParams } from "react-router-dom";






const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const productfilter = MockProductos.find((product) => product.id == id);
        setProduct(productfilter)
    }, [id])




    return (
        <div>
            <ItemDetail data={product} />
        </div>
    )

}


export default ItemDetailContainer