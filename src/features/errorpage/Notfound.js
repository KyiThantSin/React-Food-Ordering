import { Container } from "react-bootstrap";

const Notfound = () => {
    return (
        <Container style={{textAlign:"center"}} className="mt-5">
            <img src={require('../../icons/404.jpg')} alt="not found" width="50%"/>
        </Container>
      );
}
 
export default Notfound;