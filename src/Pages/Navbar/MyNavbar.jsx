import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'
import logo from '../../assets/logo.2230098a.png'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function BasicExample() {

    const { t, i18n } = useTranslation();
    const language = localStorage.getItem('i18nextLng')

    const handleChange = (e) => {
        e.preventDefault();

        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage)
        setExpended(false)
    }

    const [navbar, setNavbar] = useState(false);

    const setNavbarFixed = () => {
        if (window.scrollY >= 500) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }



    // window.addEventListener('scroll', setNavbarFixed)

    const [expended, setExpended] = useState(false)

    const handleExpended = () => {
        setExpended(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', setNavbarFixed);

        // Scroll event handler: scroll bo'lganda modal yopiladi
        const handleScroll = () => {
            if (expended) {
                setExpended(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup: scroll listenerni o'chirish
        return () => {
            window.removeEventListener('scroll', setNavbarFixed);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expended]);
    return (
        <Navbar expand="lg" expanded={expended} className={`bg-body-tertiary ${navbar ? "navbar-fixed" : ""}`} onToggle={() => setExpended(!expended)}>
            <Container>
                <NavLink to="/"><img className='img-fluid me-3' width={150} src={logo} alt="logo" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-navbar-items d-flex justify-content-between" onClick={handleExpended}>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">{t("navbar.home")}</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="collection">{t("navbar.collection")}</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="about">{t("navbar.about")}</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="contacts">{t("navbar.contacts")}</NavLink>
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