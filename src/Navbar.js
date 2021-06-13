import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <Nav className="justify-content-center align-items-center fixed-top navbar-dark bg-dark">
            <Nav.Item>
                <Nav.Link href="#home" active>accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#about-me">à propos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#services">services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contact">contact</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
