import { Container, Carousel } from "react-bootstrap";
import "../styles.css";

const Promotion = () => {
    return ( 
        <Container className="mb-3" >
            <h5>Latest Promotions</h5>
            <Carousel fade className="promotion">
                <Carousel.Item>
                    <img src={require('../../icons/cookie.jpg')} 
                    alt="cookie promotion" 
                    width="98%" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../../icons/chicken.jpg')} 
                    alt="chicken promotion" 
                    width="98%" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../../icons/tea.jpg')} 
                    alt="sushi promotion" 
                    width="98%" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../../icons/brunch.jpg')} 
                    alt="brunch promotion" 
                    width="98%" />
                </Carousel.Item>
            </Carousel>
        </Container>
     );
}
 
export default Promotion;