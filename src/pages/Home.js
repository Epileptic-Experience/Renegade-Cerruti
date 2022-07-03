import './Home.css'
import { Carousel } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import dataBase from '../utils/FirebaseConfig';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Home = () => {
    const [sliderProduct, setSliderProduct] = useState([])

    const getProductosFirebase = async () => {
        const productSnapshot = await getDocs(collection(dataBase, "0"))
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList;

    }
    useEffect(() => {
        getProductosFirebase().then((res) => {
            setSliderProduct(res)
        })
    }, [])

    return (
        <div className="contenedorHome" >
            <div className='tituloHome'>
                <h1>Articulos Recomendados</h1>
            </div>
            <div className='contenedorCarusel'>

                <Carousel className='carusel' >
                    {sliderProduct.slice(0, 4).map(
                        (recomendado) => {
                            const { tittle, img, id } = recomendado
                            return (
                                <Carousel.Item key={id}>
                                    <Link to={`/producto/${id}`}>


                                        <img
                                            className='imagenHome'
                                            src={img}
                                            alt={tittle}
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