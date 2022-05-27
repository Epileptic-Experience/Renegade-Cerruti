import './itemDetail.css'
import ItemCounter from './ItemCounter'

const ItemDetail = () => {
    return (
        <div className="contenedorDetail" >

            <div className='contenedorImagen'>
                <img className='imagen' src='./una_muerte.jpg'></img>
            </div>
            <div className='contenedorDetalles'>
                <div className='detalles'>
                    <p>Batman una muerte en la familia</p>
                    <p>$3500</p>
                    <p>mientras la relación de batman con jason se pone cada vez peor jason descubre mas de su pasado, mientras tanto el joker escapa de arkham nuevamente para realizar su peor broma hasta la fecha</p>
                </div>
               
               <ItemCounter></ItemCounter>
            </div>

        </div>
    )
}

export default ItemDetail