import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'
import logo from '../../assets/logo.2230098a.png'

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/"><img className='img-fluid me-3' width={150} src={logo} alt="logo" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-navbar-items d-flex justify-content-between">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="collection">Collection</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="contacts">Contacts</NavLink>
                    </Nav>
                    <div>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Ingliz</option>
                            <option value="2">Uzbek</option>
                            <option value="3">Russian</option>
                        </Form.Select>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default BasicExample;