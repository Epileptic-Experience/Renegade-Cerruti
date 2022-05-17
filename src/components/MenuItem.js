import './MenuItem.css'
import { Card, Button } from 'react-bootstrap'

const MenuItem = ({ tittle, price, size }) => {



    return (


        <Card className='contenedor' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./una_muerte.jpg" />
            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                <Card.Text>
                   <span>${price}</span>
                </Card.Text>
                <Button className='boton' variant="dark">COMPRAR</Button>
            </Card.Body>
        </Card>
    )
}
export default MenuItem