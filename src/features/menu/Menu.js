import { Col, Container, Row } from "react-bootstrap";
import Search from "../search/Search";
import Meal from "./Meal";
import { fetchMainMenu, mainMenuData } from "./menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Promotion from "./Promotion";
import SearchResult from "../search/SearchResult";

const Menu = () => {
    const menu = useSelector(mainMenuData)
    const status = useSelector((state)=> state.menu.status)
    const searchResults = useSelector((state)=> state.search.result) //user search

    const dispatch = useDispatch();

    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMainMenu());
        }
    }, [status, dispatch]);

    return ( 
        <Container>
            <Search />
            <div className="mt-4">
                <Row>
                    <Col md={8}>
                        { searchResults.length > 0 ? <SearchResult /> : //show search results if exist      
                            <Row className="mt-4">
                            <h4>Popular Dishes</h4>
                            {   //main menu 
                                menu.length > 0 ?
                                menu.map(meal => {
                                    return(
                                        <Col md={4} xs={6} key={meal.id} className="mt-2">
                                            <Meal data={meal}/>
                                            <hr />
                                        </Col>
                                    )
                                })
                                : <h3 style={{color:"grey"}}> Sorry Currently Unavailable... </h3>
                            }
                        </Row>
                            }
                    </Col>

                    <Col md={4}>
                        <Promotion />
                    </Col>

                </Row>
             </div>
            
        </Container>
     );
}
 
export default Menu;