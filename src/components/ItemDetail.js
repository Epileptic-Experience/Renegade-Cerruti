import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import MockProductos from "../utils/productosMock";
import ItemCounter from './ItemCounter'



const ItemDetail = ({ data }) => {
    const { tittle, price, detail, img } = data
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [cantidad, setCantidad] = useState(1)
    const [mostrarTerminar, setMostrarTerminar] = useState(false)
    const [mostrarContador, setMostrarContador] = useState(true)

    useEffect(() => {
        const productfilter = MockProductos.find((product) => product.id == id);
        setProduct(productfilter)
    }, [id])


    
    const addProductToCart = () => {
        setMostrarTerminar(true)
        setMostrarContador(false)
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
                {mostrarContador && <ItemCounter cantidad={cantidad} addProductToCart={addProductToCart} setCantidad={setCantidad} ></ItemCounter>}
                {mostrarTerminar && <Link to={"/checkout"}><button className='terminar'>Terminar Compra</button></Link>}

            </div>

        </div>
    )
}

export default ItemDetail