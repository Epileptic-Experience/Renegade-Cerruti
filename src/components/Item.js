import './Item.css'
import { Card } from 'react-bootstrap'
import ItemCounter from './ItemCounter';



const Item = ({ tittle, price, Img, id }) => {


    return (


        <Card className='itemContainer' style={{ width: '18rem' }}>

            <Card.Img variant="top" src={Img} />

            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                <Card.Text>
                    <span>${price}</span>
                </Card.Text>
                <ItemCounter />
            </Card.Body>
        </Card>



    )
}
export default Item