import { Container, Row , Col} from "react-bootstrap";

const Navbar = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6} xs={6}>
                    <img src={require("../../icons/leftarrow.png")} alt="back arrow"/>
                </Col>
                <Col md={6} xs={6}>
                    <img src={require("../../icons/starblack.png")} alt="star"/>
                </Col>
            </Row>
        </Container>
      );
}
 
export default Navbar;
