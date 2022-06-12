import { Col, Container, Row } from "react-bootstrap";
import Recipes from "./Recipes";

const Menu = () => {
    return ( 
        <Container>
            <h2>Popular Dishes</h2>
            <Row>
                <Col md={4} xs={6}>
                        <Recipes />
                </Col>
                <Col md={4} xs={6}>
                        <Recipes />
                </Col>
                <Col md={4} xs={6}>
                        <Recipes />
                </Col>
            </Row>
        </Container>
     );
}
 
export default Menu;