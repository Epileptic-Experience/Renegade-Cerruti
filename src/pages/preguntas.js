import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Preguntas.css'
import { getDocs, collection } from "firebase/firestore";
import dataBase from '../utils/FirebaseConfig';


const PreguntasFrecuentes = () => {
    const [preguntas, setPreguntas] = useState([])

    const getPreguntasFirebase = async () => {
        const preguntasSnapshot = await getDocs(collection(dataBase, "Preguntas"))
        const listaPreguntas = preguntasSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return listaPreguntas;
    }

    useEffect(() => {
        getPreguntasFirebase().then((res) => {
            setPreguntas(res)
        })
    }, [])
    return (

        <div className='contenedorPreguntas'>
            <div className='contenidoPreguntas'>
                {(preguntas == null) ? (
                    <h1 className='cargando'> Cargando producto </h1>
                ) : (
                    <>
                        {preguntas.map((pregunta) => {
                            const { titulo, respuesta, id } = pregunta
                            return (

                                <div key={id}>

                                    <Accordion bg="dark" >
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
                                </div>

                            )
                        })}
                    </>
                )}


            </div>
        </div>

    )

}

export default PreguntasFrecuentes