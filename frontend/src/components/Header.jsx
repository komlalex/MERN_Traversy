import {Navbar, Nav, Container} from "react-bootstrap";
import {FaSignInAlt, FaSignOutAlt} from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">MERN Auth</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;