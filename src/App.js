//import logo from './logo.svg';
import "./App.css";
import Navy from "./Navbar.js";
import Corsel from "./Carousel.js";
import {Container, Row, Col} from "react-bootstrap";
import Cert from "./Cer.js";
import ContainFoot from "./ContainFoot.js";
import Layout from "./layout.js";
import Skill from "./Skill";

function App() {
  return (
    <>
      <Layout />
      <Skill />
      <div className="App">
        {/* <Navy /> */}
        <Container>
          <Row>
            <Col className="pad-top">
              <Cert />
            </Col>
          </Row>
        </Container>
        <ContainFoot />
      </div>
    </>
  );
}

export default App;
