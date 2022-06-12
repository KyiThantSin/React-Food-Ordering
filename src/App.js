import { Col, Container, Row} from 'react-bootstrap';
import './App.css';
import Menu from './features/menu/Menu';
import RecipesDetails from './features/menu/RecipesDetails';

function App() {
  return (
    <Container>
      <Row>
          <Col md={8}>
              <Menu />
          </Col>
          <Col md={4}>
              <RecipesDetails />
          </Col>
      </Row>
    </Container>
  );
}

export default App;
