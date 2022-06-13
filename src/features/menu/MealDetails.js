import { Container, Row , Col, Button} from "react-bootstrap";
import SideNavbar from "../navbar/SideNavbar";
import "../styles.css";

const MealDetails = () => {
    return ( 
        <Container className="recipesDetails" style={{textAlign:"center"}} >
            <SideNavbar />
            <div className="mt-4">
            <h3>Pizza</h3>

            <img src={require("../../icons/testImg.jpg")} 
                alt="food"
                width="80%"
                style={{borderRadius:"4%"}}
                className="mt-2"
                />

            <Row className="mt-4 m-5">
                <Col md={4} xs={4}>
                   <Button variant="light">
                        <img src={require("../../icons/plus.png")} alt="plus sign"/>
                    </Button>
                </Col>
                <Col md={4} xs={4}>
                    <h4><b>1</b></h4>
                </Col>
                <Col md={4} xs={4}>
                    <Button variant="light">
                        <img src={require("../../icons/remove.png")} alt="minus sign"/>
                    </Button>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} xs={6}>
                    <h4>$12</h4>
                </Col>
                <Col md={6} xs={6}>
                    <Button style={{backgroundColor:"#FDBA09",color:"white"}}
                            variant="outline-none">Add To Cart</Button>
                </Col>
            </Row>
            </div>
        </Container>
     );
}
 
export default MealDetails;