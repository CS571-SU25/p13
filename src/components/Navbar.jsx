
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function UINavbar() {
    return <Navbar bg="dark" variant="dark" sticky="top" style={{ width: '100vw' }}>
        <Container fluid>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/instructions">Instructions</Nav.Link>
                <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}
