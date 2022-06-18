import { Container, Row, Col, Button} from "react-bootstrap";
import "../styles.css";

const CartItem = () => {
    return (  
        <Container>   
            <Row  md={8} className="cart">
                    <Col md={4}>
                        <img src={require('../../icons/cookie.jpg')} 
                        alt="item"
                        width="50%"/>
                    </Col>
                    <Col md={6} xs={10} className="mt-2">
                        <h4><b>$ 20</b></h4>
                        <h5>Name</h5>
                        <h6>Quantity : <b>2 </b></h6>
                    </Col>
                    <Col md={2} xs={2}>
                        <Button variant="light">
                            <img src={require('../../icons/cancel.png')} alt="cancel"/>
                        </Button>
                    </Col>
            </Row>

        </Container>
    );
}
 
export default CartItem;