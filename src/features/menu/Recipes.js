import { Container , Badge, Card} from "react-bootstrap";

const Recipes = () => {
    return ( 
        <Container>
           <Card>
               <Card.Img src={require("../../icons/testImg.jpg")} alt="food"/>
               <Card.Body>
                   <Card.Title>
                       Pizza
                       <Badge bg="light" text="dark">
                            <img src={require("../../icons/star.png")} alt="star"/> 
                            4.9
                       </Badge> 
                    </Card.Title>
                    $10.5      
               </Card.Body>
           </Card>
        </Container>
     );
}
 
export default Recipes;