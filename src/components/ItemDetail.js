import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import MockProductos from "../utils/productosMock";
import ItemCounter from './ItemCounter'


const ItemDetail = ({ data }) => {
    const { tittle, price, detail, img } = data
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const productfilter = MockProductos.find((product) => product.id == id);
        setProduct(productfilter)
    }, [id])
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const stock = Math.floor(Math.random() * 100)

    function addCount() {
        if (count < stock) {
            setCount(count + 1);
        }

    }
    const removeCount = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(1)
    }

    return (
        <div className="contenedorDetail" >

            <div className='contenedorImagen'>
                <img className='imagen' src={`.${img}`}></img>
            </div>
            <div className='contenedorDetalles'>
                <div className='detalles'>
                    <p>{tittle}</p>
                    <p>${price}</p>
                    <p>{detail}</p>
                </div>
                <ItemCounter></ItemCounter>

            </div>

        </div>
    )
}

export default ItemDetail