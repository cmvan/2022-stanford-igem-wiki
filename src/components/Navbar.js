import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavScroll() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Stanford</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Team">
              <NavDropdown.Item as={Link} to="/team">Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/attributions">Attributions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/collaborations">Collaborations</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Project">
              <NavDropdown.Item as={Link} to="/communication">Communication</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contribution">Contribution</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/description">Description</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineering">Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/experiments">Experiments</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/implementation">Implementation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/notebook">Notebook</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/partnership">Partnership</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/proof-of-concept">Proof of Concept</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/results">Results</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Parts">
              <NavDropdown.Item as={Link} to="/part-collection">Part Collection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/parts">Parts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/improve">Improve</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/safety">Safety</Nav.Link>
            <Nav.Link as={Link} to="/human-practices">Human Practices</Nav.Link>
            <NavDropdown title="Awards">
              <NavDropdown.Item as={Link} to="/education">Education</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/entrepreneurship">Entrepreneurship</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inclusivity">Inclusivity</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/measurement">Measurement</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/model">Model</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/software">Software</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sustainable">Sustainable</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
