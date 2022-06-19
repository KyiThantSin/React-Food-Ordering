import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { searchItem , fetchMenuLists} from "./searchSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Search = () => {
    const [name,setName] = useState('');
    const dispatch = useDispatch();

    
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(fetchMenuLists())
        setTimeout(()=> {
            dispatch(searchItem(name))
            setName('')
        }, 1000)
    }
    
    return ( 
        <Container className="mt-3">
            <h2>Tired of Waiting for Your Meal?</h2>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
            
            <Form className="mt-3">
                <Row >
                    <Col md={6} xs={8}>
                        <Form.Control type="text" 
                                      value={name} //serch item name
                                      required
                                      onChange={(e)=> setName(e.target.value)}/>
                    </Col>
                    <Col md={6} xs={4}>
                        <Button variant="outline-primary" 
                                type="submit"
                                onClick={onSubmitHandler}>
                                    Search
                        </Button>
                    </Col>
                </Row>       
            </Form>

        </Container>
     );
}
 
export default Search;