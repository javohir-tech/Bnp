import React from 'react'
import './FooterSection.css'
import logo from '../../assets/logo.2230098a.png'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { Button, InputGroup } from 'react-bootstrap';

export default function FooterSection() {
  return (
    <>
      <footer className='footer-section  pt-5 mt-5'>
        <div className='container'>
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-6">
              <img src={logo} className='img-fluid' alt="immg is not found" />
              <p className='footer-text py-3'>
                “Bukhara Natural Product” koʻp yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.
              </p>
            </div>
            <div className='col-xl-2 col-md-6'>
              <h5>Menu</h5>
              <ul className='footer-link'>
                <li><NavLink to={"/"}>Uy</NavLink></li>
                <li><NavLink to={"/collection"}>Kolleksiya</NavLink></li>
                <li><NavLink to={"/about"}>Biz haqimizda</NavLink></li>
                <li><NavLink to={"/contacts"}>Aloqa</NavLink></li>
              </ul>
            </div>
            <div className='col-md-6 col-xl-2'>
              <h5>Kontaktlar</h5>
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
              <h5>Elektron pochtamizga obuna bo'ling</h5>
              <Form>
                <InputGroup className="my-4">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="danger" id="button-addon2">
                    Button
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </div>
        </div>
        <div className='footer-under__info'>
          <div className="container">
            <p className='py-4 mb-0'>© 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer >
    </>
  )
}
