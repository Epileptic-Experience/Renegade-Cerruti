import React from "react";
import './Footer.css'
const footer = () => {
    return (

        <div className="footerprincipal">
            <div className="conetenedor">
                <div className="fila">
                    {/* columna 1 */}
                    <div className="col">
                        <h4>Renegade Comics</h4>
                        <ul>
                            <li>123-123-123</li>
                            <li>Buenos Aires, argentina</li>
                            <li>Calle siempreviva 123</li>
                        </ul>
                    </div>
                    {/* columna 2 */}
                    <div className="col" >
                        <h4>Información legal</h4>
                        <ul>
                            <li>la propiedad intelectual de Renegade comics asi como de sus logos son propiedad
                                de ramdom company bajo los acuerdos de copyrigth de la repuplica argentina</li>
                            <li>Los recurso utilizados por Random company, renegade y cualquiera de sus afiliados se encuentran
                                bajo lo estipulado por las normativas de fair use </li>
                            <li>Renegade comics since 2016</li>
                        </ul>
                    </div>
                </div>
                <div className="fila">
                    <p>&copy; 2022 | All rigths reserved | legal contact: renegadecomics@renegade.com </p>
                </div>
            </div>
        </div>
    )
}
export default footer