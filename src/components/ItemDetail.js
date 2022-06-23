import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import './ItemDetail.css'
import ItemCounter from './ItemCounter'
import CartContext from './../contextos/CartContext';

const ItemDetail = ({ data }) => {
    const { addProductToCart, cartItemList } = useContext(CartContext);
    const [stock] = useState(Math.floor(Math.random() * 100))
    const [product, setProduct] = useState(data)
    const [cantidad, setCantidad] = useState(1)
    const [mostrarTerminar, setMostrarTerminar] = useState(false)
    const [mostrarContador, setMostrarContador] = useState(true)

    const Finish = () => {
        setMostrarTerminar(true)
        setMostrarContador(false)
    }

    const _addProductToCart = () => {
        Finish();
        product.cantidad = cantidad;
        addProductToCart(product);
        
    }
    useEffect(() => {
        if (data && !product) {
            setProduct(data);
            const alreadyExist = cartItemList.find((item) => item.id === data.id);
            if (alreadyExist) {
                Finish();
            }
        }
    }, [data]);
    return (
        <div className="contenedorDetail" >
            {(product == null) ? (
                <h1> Cargando producto </h1>
            ) : (
                <>
                    <div className='contenedorImagen'>
                        <img className='imagen' src={`.${product.img}`}></img>
                    </div>
                    <div className='contenedorDetalles'>
                        <div className='detalles'>
                            <p>{product.tittle}</p>
                            <p>${product.price}</p>
                            <p>{product.detail}</p>
                        </div>
                        {mostrarContador && <ItemCounter stock={stock} cantidad={cantidad} addProductToCart={_addProductToCart} setCantidad={setCantidad} ></ItemCounter>}
                        {mostrarTerminar && <Link to={"/checkout"}><button className='terminar'>Terminar Compra</button></Link>}
                    </div>
                </>
            )}
        </div>
    )
    
}

export default ItemDetail