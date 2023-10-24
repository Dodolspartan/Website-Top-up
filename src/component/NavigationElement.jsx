import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";


const NavigationElement = () => {
  return (
    <div className="navigation-element">
      <Navbar expand="lg" className="w-50">
        <Container>
          <Navbar.Brand href="#" className=" fw-bold">
            Games.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form.Control type="text" placeholder="Search" aria-label="Search" />
            <Form className="d-flex">
              <Button className="mx-2">Masuk</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationElement;
