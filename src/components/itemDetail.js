
import './ItemDetail.css'



const ItemDetail = ({ producto }) => {
    const { tittle, price, img, detail } = producto
    return (
        <div className="contenedorDetail" >

            <div className='contenedorImagen'>
                <img className='imagen' src={img}></img>
            </div>
            <div className='contenedorDetalles'>
                <div className='detalles'>
                    <p>{tittle}</p>
                    <p>{price}</p>
                    <p>{detail}</p>
                </div>
                <div className='contador' >
                    <button className='boton'>+</button>
                    <button className='comprar'>COMPRAR</button>
                    <button className='boton'>-</button>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail