
import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Checkpoint</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        
        <Container className="my-5">
          <h1 className="text-center mb-4">
            Welcome to React Development
          </h1>

          <p className="text-center mb-5">
            Explore the fundamentals of React and frontend development.
          </p>

          
          <Row className="g-4">

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>React Fundamentals</Card.Title>
                  <Card.Text>
                    Learn the basics of React, components, JSX and props.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>React Bootstrap</Card.Title>
                  <Card.Text>
                    Build attractive interfaces using reusable Bootstrap
                    components.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Frontend Development</Card.Title>
                  <Card.Text>
                    Develop responsive and interactive web applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

      </div>
    </>
  );
}

export default App;
