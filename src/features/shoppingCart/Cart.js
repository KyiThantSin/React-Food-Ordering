import { Container,Row,Col ,Badge} from "react-bootstrap";
import CartItem from '../shoppingCart/CartItem';
import Checkout from "./Checkout";

const Cart = () => {
    return ( 
        <Container className="mt-4">
            <Row>
                <Col md={6} xs={6}>
                    <h1>Cart</h1>
                </Col>
                <Col md={6} xs={6} className="mt-2">
                    <Badge bg="light">
                    <h5>4 Items</h5>
                    </Badge>
                </Col>
            </Row> 
            <Row className="mt-2">
                <Col md={8}>
                    <CartItem />
                </Col>
                <Col md={4}>
                    <Checkout />
                </Col>
            </Row>
        </Container>
     );
}
 
export default Cart;