import { Button, Container, Form, Row, Col } from "react-bootstrap";

const Search = () => {
    return ( 
        <Container className="mt-3">
            <h2>Tired of Waiting for Your Meal?</h2>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
            <Form className="mt-3">
                <Row >
                    <Col md={6} xs={8}>
                        <Form.Control type="text" required/>
                    </Col>
                    <Col md={6} xs={4}>
                        <Button variant="outline-primary" type="button">Search</Button>
                    </Col>
                </Row>       
            </Form>
        </Container>
     );
}
 
export default Search;