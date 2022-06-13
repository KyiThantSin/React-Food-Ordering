import { Col, Container, Row} from 'react-bootstrap';
import './App.css';
import Menu from './features/menu/Menu';
import MealDetails from './features/menu/MealDetails';
import MainNavbar from './features/navbar/MainNavbar';

function App() {
  return (
    <Container>
      <MainNavbar />
      <Row>
          <Col md={8}>
              <Menu />
          </Col>
          <Col md={4}>
              <MealDetails />
          </Col>
      </Row>
    </Container>
  );
}

export default App;
