import { Container,Row,Col ,Badge} from "react-bootstrap";
import CartItem from '../shoppingCart/CartItem';
import Checkout from "./Checkout";
import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector(state => state.cart.cart)
    return ( 
        <Container className="mt-4">
            <Row>
                <Col md={6} xs={6}>
                    <h1>Cart</h1>
                </Col>
                <Col md={6} xs={6} className="mt-2">
                    <Badge bg="primary">
                    {items.length} Items
                    </Badge>
                </Col>
            </Row> 
            <Row className="mt-2">
                <Col md={8}>
                    { items.length > 0 ? items.map((item)=>{
                        return(
                            <div key={item.id}>
                                 <CartItem item={item}/>
                            </div>
                        )
                    }) : <img src={require('../../icons/emptyCart.png')} alt="empty cart" width="80%" className="m-3"/> }
                </Col>
                <Col md={4}>
                    <Checkout />
                </Col>
            </Row>
        </Container>
     );
}
 
export default Cart;