import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import ItemCounter from './ItemCounter'


const ItemDetail = ({data}) => {
  const {tittle, price, detail, img} = data
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