import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

function NavbarBoots({Logout}) {

  const clickHandler = e => {
    e.preventDefault();
    Logout()
}
  return (
    <>
      {[true, 'sm', 'md'].map((expand) => (
        <Navbar key={expand} fixed="top" expand={expand} className="mb-3" bg="dark" variant="dark">
          <Container fluid>
            <LinkContainer to="/">
            <Navbar.Brand to="/" id="site-title">Bonnie & Max</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bonnie & Max's Wedding
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/OurStory">
                    <Nav.Link>Our Story</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/BridalParty">
                    <Nav.Link>Bridal Party</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Details">
                    <Nav.Link>Details</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/RSVP">
                    <Nav.Link>RSVP</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Registry">
                    <Nav.Link>Registry</Nav.Link>
                  </LinkContainer>
                  <Button variant="outline-light" onClick={clickHandler}>Logout</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarBoots;