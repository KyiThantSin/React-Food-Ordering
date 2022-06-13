import { Col, Container, Row } from "react-bootstrap";
import Search from "../search/Search";
import Meal from "./Meal";


const Menu = () => {
    return ( 
        <Container>
            <Search />
            <div className="mt-4">
                <h4>Popular Dishes</h4>
                <Row className="mt-4">
                    <Col md={4} xs={6}>
                            <Meal />
                    </Col>
                    <Col md={4} xs={6}>
                            <Meal />
                    </Col>
                    <Col md={4} xs={6}>
                            <Meal />
                    </Col>
                </Row>

        
            </div>
            
        </Container>
     );
}
 
export default Menu;