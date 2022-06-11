import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Cart from './Cart';
import './Navbar.css';
import CartContext from '../contextos/CartContext';

const NavBar = () => {
    const categories = ["DCcomics", "Marvelcomics"]
    const { getAmountOfItems } = useContext(CartContext)
    const amountOfItems = getAmountOfItems()

    return (
        <Navbar bg="dark" expand="lg">

            <Link to={"/"}>

                <div className="navbar-brand">

                    <p className='marca'>Renegade </p>

                </div>
            </Link>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Link to={"/"} className="nav-link active">
                            <li className="nav-item link-blanco">
                                <p>Inicio</p>
                            </li>
                        </Link>
                        <Link className="nav-link" to={"/preguntas"}>
                            <li className="nav-item link-blanco">
                                <p>Preguntas Frecuentes</p>
                            </li>
                        </Link>
                        <Link className="nav-link" to={"/contacto"}>
                            <li className="nav-item link-blanco">
                                <p>contacto</p>
                            </li>
                        </Link>

                        <NavDropdown className='dropdown  ' title="productos" id="basic-nav-dropdown">
                            <Link className="nav-link" to={"/productos"}>
                                <li className="nav-item ">
                                    <p>Todos</p>
                                </li>
                            </Link>
                            <div className='link-blanco'>
                                {categories.map((category) => {
                                    return <Link className="nav-link  " to={`/productos/${category} `}>
                                        <li className="nav-item ">
                                            <p>{category}</p>
                                        </li>
                                    </Link>

                                })}
                            </div>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

                { amountOfItems > 0 && <Cart className="nav-link"  />}
            </Container>
        </Navbar>
    )
}


export default NavBar