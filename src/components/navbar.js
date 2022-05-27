import Cart from './cart';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xlg navbar-dark bg-dark">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">

                    <p className='marca'>renegade </p>
                </a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <Cart></Cart>

                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">comics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">collectables</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar