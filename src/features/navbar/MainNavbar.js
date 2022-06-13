import { Col, Container,Row, Button } from "react-bootstrap";
import "../styles.css";

const MainNavbar = () => {
    return ( 
        <Container className="mt-3">
            <Row>
                <Col md={6} xs={6}>
                    <img src={require('../../icons/spaghetti.png')} alt="logo" />
                </Col>
                <Col md={6} xs={6}>
                    <Button variant="light">
                        <img src={require('../../icons/shopping-cart.png')} alt="cart"/>
                    </Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default MainNavbar;