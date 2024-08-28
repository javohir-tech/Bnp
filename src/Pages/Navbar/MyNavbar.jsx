import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'
import logo from '../../assets/logo.2230098a.png'
import { useTranslation } from 'react-i18next';

function BasicExample() {

    const { t, i18n } = useTranslation();
    const language = localStorage.getItem('i18nextLng')

    const handleChange = (e) => {
        e.preventDefault();

        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage)
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100">
            <Container>
                <NavLink to="/"><img className='img-fluid me-3' width={150} src={logo} alt="logo" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-navbar-items d-flex justify-content-between">
                        <NavLink to="/">{t("navbar.home")}</NavLink>
                        <NavLink to="collection">{t("navbar.collection")}</NavLink>
                        <NavLink to="about">{t("navbar.about")}</NavLink>
                        <NavLink to="contacts">{t("navbar.contacts")}</NavLink>
                    </Nav>
                    <div>
                        <Form.Select aria-label="Default select example" value={language} onChange={handleChange}>
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                        </Form.Select>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default BasicExample;