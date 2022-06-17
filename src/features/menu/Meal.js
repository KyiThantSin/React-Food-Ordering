import { Container , Badge, Row, Col} from "react-bootstrap";
import "../styles.css";
import { Link } from "react-router-dom";

const Meal= (props) => {
    return ( 
        <Container className="mealCard">
            <Link to={`/menu/${props.data.id}`} >
                <img src={require("../../icons/testImg.jpg")} 
                    alt="food"
                    />
            </Link>
            <div className="mt-3">
                <Row>
                    <Col md={6} xs={6}>
                        <h5>{props.data.name}</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <Badge bg="light" text="dark">
                            <img src={require('../../icons/star.png')} alt="star" />
                            {props.data.rating}
                        </Badge>
                    </Col>
                </Row>
            </div>
            <h6>${props.data.price}</h6>
        </Container>
     );
}
 
export default Meal;