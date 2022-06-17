import { Container, Row , Col, Button} from "react-bootstrap";
import SideNavbar from "../navbar/SideNavbar";
import "../styles.css";
import {selectItemById} from '../menu/menuSlice';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { increment,decrement } from "../shoppingCart/cartSlice";

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const item = useSelector(state => selectItemById(state, id))
    
    const number = useSelector(state => state.cart.value)

    return ( 
        <Container className="recipesDetails mt-3" style={{textAlign:"center"}} >
            <Row  style={{backgroundColor:"whitesmoke",borderRadius:"3%"}}>
                <Col md={1} xs={1}>
                    <SideNavbar id={id}/>
                </Col>
                <Col md={11} xs={11}>
                <div className="mt-4">
                    <h3>{item.name}</h3>

                    <img src={require("../../icons/testImg.jpg")} 
                        alt="food"
                        width="40%"
                        style={{borderRadius:"4%"}}
                        className="mt-2 detailsImg"
                    />
                
                    <div className="details m-3">

                       <Row>
                           <Col md={8}>
                               <h4><b>Description</b></h4>
                               <p> Substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
                           </Col>
                           <Col md={4}>
                           <Row className="mt-4 m-5">
                        
                        <Col md={4} xs={4}>
                        <Button variant="light">
                                <img src={require("../../icons/plus.png")} 
                                     alt="plus sign"
                                     onClick={() => dispatch(increment())}/>
                        </Button>
                        </Col>
                        <Col md={4} xs={4}>
                            <h4><b>{number}</b></h4>
                        </Col>
                        <Col md={4} xs={4}>
                            <Button variant="light">
                                <img src={require("../../icons/remove.png")} 
                                     alt="minus sign"
                                     onClick={()=> dispatch(decrement())}/>
                            </Button>
                        </Col>

                    </Row>
                    </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={6} xs={6}>
                            <h4><b>$ {item.price}</b></h4>
                        </Col>
                        <Col md={6} xs={6}>
                            <Button style={{backgroundColor:"#FDBA09",color:"white"}}
                                    variant="outline-none">Add To Cart</Button>
                        </Col>
                    </Row>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Details;