import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'



const ItemDetail = ({ tittle, price, detail, img }) => {
  
    return (
        <div className="contenedorDetail" >

            <div className='contenedorImagen'>
                <img className='imagen' src={img}></img>
            </div>
            <div className='contenedorDetalles'>
                <div className='detalles'>
                    <p>{tittle}</p>
                    <p>${price}</p>
                    <p>{detail}</p>
                </div>
                <div className='contador' >
                    <button className='boton'>+</button>
                    <button className='comprar'>Agregar al</button>
                    <button className='boton'>-</button>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail