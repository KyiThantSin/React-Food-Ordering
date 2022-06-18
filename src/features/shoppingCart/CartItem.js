import { Container, Row, Col, Button} from "react-bootstrap";
import "../styles.css";
import { useDispatch } from "react-redux";
import { deletingCart } from "./cartSlice";


const CartItem = (props) => {
    const dispatch = useDispatch();
    return (  
        <Container>   
            <Row  md={8} className="cart">
                    <Col md={4}>
                        <img src={props.item.src} 
                        alt={props.item.name}
                        width="50%"/>
                    </Col>
                    <Col md={6} xs={10} className="mt-2">
                        <h4><b>$ {props.item.price}</b></h4>
                        <h5>{props.item.name}</h5>
                        <h6>Quantity : <b>{props.item.number}</b></h6>
                    </Col>
                    <Col md={2} xs={2}>
                        <Button variant="light"
                                onClick={()=>dispatch(deletingCart(props.item.id))}>
                            <img src={require('../../icons/cancel.png')} 
                                 alt="cancel"/>
                        </Button>
                    </Col>
            </Row>

        </Container>
    );
}
 
export default CartItem;