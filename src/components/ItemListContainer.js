import './ItemListContainer.css'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount.js'


const ItemListContainer = ({ tittle, price, src }) => {



    return (


        <Card className='itemContainer' style={{ width: '18rem' }}>

            <Card.Img variant="top" src={src} />

            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                <Card.Text>
                    <span>${price}</span>
                </Card.Text>
                <ItemCount />
            </Card.Body>
        </Card>



    )
}
export default ItemListContainer