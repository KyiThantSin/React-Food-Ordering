import { Container, Row ,Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
    const totalItem = useSelector(state => state.cart.cart);
   
    const tax = 0.99;
    const deliFee = 4
   
   const total=totalItem.reduce((total,cur)=>{
          return total += cur.price * cur.number
    },0)
    //console.log(total)
    return ( 
        <Container className="mt-3">
            
            <div className="checkout">
                <h3>Summary</h3>
                
                <Row className="mt-4 mb-3">
                    <Col md={6} xs={6}>
                        <h5>Order Total</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <h5>$ {total}</h5>
                    </Col>
                </Row>

                <Row className="mt-4 mb-3">
                    <Col md={6} xs={6}>
                        <h5>Tax</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <h5>{ total ? `$ ${tax}` : "$ 0.00"}</h5>
                    </Col>
                </Row>

                <Row className="mt-4 mb-3">
                    <Col md={6} xs={6}>
                        <h5>Delivery Fee</h5>
                    </Col>
                    <Col md={6} xs={6}>
                        <h5>{ total ? `$ ${deliFee}` : "$ 0.00"}</h5>
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
                            $ {total ? total+tax+deliFee : 0}
                        </h5>
                    </Col>
                </Row>
            </div>

            <Button style={{backgroundColor:"#FDBA09",color:"white"}}
                    className="mt-5 mb-4 float-end"
                    variant="outline-none"
                    disabled={ !total}>
                Checkout Items
            </Button>

        </Container>
     );
}
 
export default Checkout;