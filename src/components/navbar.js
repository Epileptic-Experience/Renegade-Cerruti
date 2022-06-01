import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xlg navbar-dark bg-dark">

            <div className="container-fluid">
                <Link to={"/"}>

                    <div className="navbar-brand">

                        <p className='marca'>renegade </p>

                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">


                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">


                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <Link to={"/Productos"}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Preguntas Frecuentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">contacto</a>
                        </li>
                    </ul>
                    <Cart />
                </div>
            </div>
        </nav >
    )
}


export default NavBar