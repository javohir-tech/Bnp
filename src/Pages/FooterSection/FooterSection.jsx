import React, { useState } from 'react'
import './FooterSection.css'
import logo from '../../assets/logo.2230098a.png'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { Button, InputGroup, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function FooterSection() {

  const [email, setEmail] = useState("")

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = (e) => {
    e.preventDefault()

    const bot_token = "6814649919:AAHT8Pg3YiorSjlajGsybbMw304-v4Jbf9M"
    const bot_id = "1896479864"

    const message = `
    email"${email}
    `
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: bot_id,
        text: message
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.ok) {
          setEmail("")
          setShow(true)
        }
        else {
          alert("Xabaringiz yuborilmadi")
        }
      })
      .catch(err => {
        console.log(err)
        alert("habarlar jo'natilmadi")
      })
  }
  const { t } = useTranslation()

  return (
    <>
      <footer className='footer-section  pt-5 mt-5'>
        <div className='container'>
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-6">
              <img src={logo} className='img-fluid' alt="immg is not found" />
              <p className='footer-text py-3'>{t("FooterSection.text")}</p>
            </div>
            <div className='col-xl-2 col-md-6'>
              <h5>{t("FooterSection.menu")}</h5>
              <ul className='footer-link'>
                <li><NavLink to={"/"}>{t("navbar.home")}</NavLink></li>
                <li><NavLink to={"/collection"}>{t("navbar.collection")}</NavLink></li>
                <li><NavLink to={"/about"}>{t("navbar.about")}</NavLink></li>
                <li><NavLink to={"/contacts"}>{t("navbar.contacts")}  </NavLink></li>
              </ul>
            </div>
            <div className='col-md-6 col-xl-2'>
              <h5>{t("FooterSection.contact")}</h5>
              <ul className='footer-link'>
                <li>Buxoro, st. Alpomish 80.</li>
                <li>Bnpuz@bk.ru</li>
                <li>bnp_fabrik</li>
                <li>info@bnpfabric.com</li>
                <li>+998 90 007 29 04</li>
                <li>+998 77 123 29 04</li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-4">
              <h5>{t("FooterSection.email")}</h5>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="my-4">
                  <Form.Control
                    placeholder={t("FooterSection.gmail")}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setEmail(e?.target?.value)}
                    value={email}
                    required
                  />
                  <Button type='submit' variant="danger" id="button-addon2">
                    {t("FooterSection.button")}
                  </Button>
                </InputGroup>
              </Form>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{t("modal.title")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t("modal.text")}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <div className='footer-under__info'>
          <div className="container">
            <p className='py-4 mb-0'>© 2024 {t("FooterSection.subtitle")}</p>
          </div>
        </div>
      </footer >
    </>
  )
}
