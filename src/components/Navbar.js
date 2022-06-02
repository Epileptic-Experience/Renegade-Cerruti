import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xlg navbar-dark bg-dark">

            <div className="container-fluid">
                <Link to={"/"}>

                    <div className="navbar-brand">

                        <p className='marca'>Renegade </p>

                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">


                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">


                    <ul className="navbar-nav">
                        <Link to={"/"} className="nav-link active">
                            <li className="nav-item">
                                <p>Inicio</p>
                            </li>
                        </Link>
                        <Link className="nav-link" to={"/Productos"}>
                            <li className="nav-item">
                                <p>Productos</p>
                            </li>
                        </Link>
                        <Link className="nav-link" to={"/preguntas"}>
                            <li className="nav-item">
                                <p>Preguntas Frecuentes</p>
                            </li>
                        </Link>
                        <Link className="nav-link" to={"/contacto"}>
                            <li className="nav-item">
                                <p>contacto</p>
                            </li>
                        </Link>

                    </ul>
                    <Cart />
                </div>
            </div>
        </nav >
    )
}


export default NavBar