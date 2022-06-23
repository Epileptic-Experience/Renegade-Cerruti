import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Preguntas.css'
import { getDocs, collection } from "firebase/firestore";
import dataBase from '../utils/FirebaseConfig';


const PreguntasFrecuentes = () => {
    const [preguntas, setPreguntas] = useState([])
    const getPreguntasFirebase = async () => {
        const productSnapshot = await getDocs(collection(dataBase, "Preguntas"))

        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList;
    }

    useEffect(() => {
        getPreguntasFirebase().then((res) => {
            setPreguntas(res)
        })
    }, [])
    return (
        <div className='contenedorPreguntas'>
            <div className='contenidoPreguntas'>
                {preguntas.map((pregunta) => {
                    const { titulo, respuesta } = pregunta
                    return (
                        <>

                            <Accordion bg="dark">
                                <Accordion.Item>
                                    <Accordion.Header>
                                        <p className='tituloPregunta' >{titulo}</p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='textoPregunta'>
                                            {respuesta}
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </>
                    )
                })}

            </div>
        </div>

    )

}

export default PreguntasFrecuentes