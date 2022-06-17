import { Container } from "react-bootstrap";
import "../styles.css";

const Promotion = () => {
    return ( 
        <Container className="promotion">
            <div className="m-4">
                <img src={require('../../icons/cookie.jpg')} 
                    alt="cookie promotion" 
                    width="90%" />
            </div>

        </Container>
     );
}
 
export default Promotion;