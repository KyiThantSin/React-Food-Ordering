import { Col, Container, Row} from 'react-bootstrap';
import './App.css';
import Menu from './features/menu/Menu';
import Details from './features/menu/Details';
import MainNavbar from './features/navbar/MainNavbar';
import {BrowserRouter as Router , Routes , Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <Container>
      <Router>
        <MainNavbar />
          <Routes>
              <Route path='/' element={<Navigate replace to="/menu" />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<Details />} />

          </Routes>
      </Router>
    </Container>
  );
}

export default App;
