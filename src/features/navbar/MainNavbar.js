import { Col, Container,Row, Button, Badge } from "react-bootstrap";
import "../styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavbar = () => {
    const items = useSelector(state => state.cart.cart) //cart noti

    return ( 
        <Container className="mt-3" style={{borderBottom:"1px solid lightgray",paddingBottom:"10px"}}>
            <Row>
                <Col md={8} xs={6}>
                    <img src={require('../../icons/spaghetti.png')} alt="logo" />
                </Col>
                <Col md={2} xs={3}>
                    <Link to="/cart">
                        <Button variant="light">
                            <img src={require('../../icons/shopping-cart.png')} alt="cart"/>
                            <Badge bg="light" text="danger">
                                {items.length} 
                            </Badge>
                        </Button>
                       
                    </Link>
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