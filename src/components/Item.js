import './Item.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import textSlicer from '../utils/helpers';



const Item = ({ tittle, price, Img, id }) => {



    return (


        <Card className='itemContainer' style={{ width: '18rem' }}>

            <Card.Img variant="top"  src={`.${Img}`} />

            <Card.Body>
                <Card.Title>{textSlicer(tittle)}</Card.Title>
                <Card.Text>
                    <span>${price}</span>
                </Card.Text>
                <Link to={`/producto/${id}`}>
                    <button>Ver detalle</button>
                </Link>
            </Card.Body>
        </Card>



    )
}
export default Item