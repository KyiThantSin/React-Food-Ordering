import {Container, Row ,Col, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSearch } from './searchSlice';
import Meal from '../menu/Meal';

const SearchResult = () => {
    const results = useSelector((state)=> state.search.result)
    const dispatch = useDispatch();

    return (  
        <Container>
            <Row style={{borderBottom:"1px solid lightgray"}} >
                <Col md={2} xs={4}>
                    <h4>Results</h4>
                </Col>
                <Col md={2} xs={4} className="mb-3">
                    <Button variant="light"
                        onClick={()=>dispatch(deleteSearch())}>
                        <img src={require('../../icons/cancel.png')} 
                            alt="cancel"
                            width="80%" />
                    </Button>
                </Col>
            </Row>

            <Row className='mt-4'> 
                { results.length > 0 ? 
                    <Col md={4} style={{borderBottom :"1px solid lightgray"}}>
                        {results.map((result)=>{
                        return (
                            <div key={result.id}>
                                <Meal data={result} />
                            </div>
                        )
                        })}
                    </Col> : <h4>Sorry Currently Unavailable</h4>
                }
            </Row>
        </Container>
    );
}
 
export default SearchResult;