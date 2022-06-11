import './Home.css'
import MockProductos from "../utils/productosMock";
import { Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';



const Home = () => {
    const { id } = useParams()


    return (
        <div className="contenedorHome" >
            <div className='tituloHome'>
                <h1>Articulos Recomendados</h1>
            </div>
            <div className='contenedorCarusel'>

                <Carousel className='carusel' >
                    {MockProductos.slice(0, 4).map(
                        (recomendado) => {
                            const { tittle, img, id } = recomendado
                            return (
                                <Carousel.Item key={id}>
                                    <Link to={`/producto/${id}`}>


                                        <img
                                            className='imagenHome'
                                            src={img}
                                            alt="First slide"
                                        />
                                    </Link>

                                    <Carousel.Caption className='textoCarusel'>
                                        <h3 className='tituloCarusel'>{tittle}</h3>


                                    </Carousel.Caption>
                                </Carousel.Item>

                            )
                        }
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default Home