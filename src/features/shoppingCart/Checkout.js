import { Container, Row ,Col, Button } from "react-bootstrap";

const Checkout = () => {
    return ( 
        <Container className="mt-3">
            <div className="checkout">
                <h3>Summary</h3>
                
                <Row className="mt-4 mb-3">
                    <Col md={6} xs={6}>
                        <h5>Order Total</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <h5>$200.0</h5>
                    </Col>
                </Row>

                <Row className="mt-4 mb-3">
                    <Col md={6} xs={6}>
                        <h5>Delivery Fee</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <h5>$20</h5>
                    </Col>
                </Row>

            </div>

            <div className="subtotal">
                <Row>
                    <Col md={6} xs={6} className="mt-4">
                        <h5>Subtotal</h5>
                    </Col>
                    <Col md={6} xs={6} className="mt-4">
                        <h5 style={{backgroundColor:"white",padding:"6px",borderRadius:"3%"}}
                            className="m-1">
                            $300
                        </h5>
                    </Col>
                </Row>
            </div>

            <Button style={{backgroundColor:"#FDBA09",color:"white"}}
                    className="mt-5 mb-4 float-end"
                    variant="outline-none">
                Checkout Items
            </Button>

        </Container>
     );
}
 
export default Checkout;