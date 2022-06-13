import { Container , Badge, Row, Col} from "react-bootstrap";
import "../styles.css";

const Meal= () => {
    return ( 
        <Container className="mealCard">
            <img src={require("../../icons/testImg.jpg")} 
                 alt="food"
                 />
            <div className="mt-3">
                <Row>
                    <Col md={6} xs={6}>
                        <h5>Pizza</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <Badge bg="light" text="dark">
                            <img src={require('../../icons/star.png')} alt="star" />
                            3
                        </Badge>
                    </Col>
                </Row>
            </div>
            <h6>$20</h6>
        </Container>
     );
}
 
export default Meal;