import { Col, Container,Row, Button } from "react-bootstrap";
import "../styles.css";
import { Link } from "react-router-dom";


const MainNavbar = () => {
    return ( 
        <Container className="mt-3" style={{borderBottom:"1px solid lightgray",paddingBottom:"10px"}}>
            <Row>
                <Col md={8} xs={6}>
                    <img src={require('../../icons/spaghetti.png')} alt="logo" />
                </Col>
                <Col md={2} xs={3}>
                    <Button variant="light">
                        <img src={require('../../icons/shopping-cart.png')} alt="cart"/>
                    </Button>
                </Col>
                <Col md={2} xs={3}>
                    <Link to="/menu">
                        <Button variant="light" >
                            <img src={require('../../icons/home.png')} alt="home"/>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
     );
}
 
export default MainNavbar;