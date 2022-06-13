import { Container, Row , Col, Button} from "react-bootstrap";

const SideNavbar = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6} xs={6}>
                    <Button variant="light">
                        <img src={require("../../icons/leftarrow.png")} alt="back arrow"/>
                    </Button>                  
                </Col>
                <Col md={6} xs={6}>
                    <Button variant="light">
                        <img src={require("../../icons/starblack.png")} alt="star"/>
                    </Button>
                </Col>
            </Row>
        </Container>
      );
}
 
export default SideNavbar;
