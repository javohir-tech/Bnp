import React, { useState } from 'react'
import './Contacts.css'
import FormSection from '../../Components/Form/FormSection'

//modal


//images
import pochta from '../../assets/pochta.svg'
import telefon from '../../assets/telefon.svg'
import location from '../../assets/location.svg'
import { useTranslation } from 'react-i18next'


export default function Contacts() {
  const {t} = useTranslation()
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <FormSection title={t("ContactsSection.title")} />
          </div>
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d91170.0413859884!2d69.2617216!3d41.3007872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6005c5142bf3%3A0xe04bf246835d2d7f!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0JDRjdGA0L7Qv9C-0YDRgiDQuNC80LXQvdC4INCY0YHQu9Cw0LzQsCDQmtCw0YDQuNC80L7QstCw!5e1!3m2!1sru!2s!4v1724761752503!5m2!1sru!2s" width={"100%"} height={"450"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="row my-5">
          <div className=' col-xl-4'>
            <a href="mailto:suvonovjavohir625@gmail.com" target='_blank'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='hero-section__img me-2'>
                  <img src={pochta} width={70} className='img-fluid' alt="" />
                </div>
                <div className='hero-section__text contact-links'>
                  <h6 className='d-inline'>{t("ContactsSection.email")}:</h6>
                  <p className='d-inline'>  suvonovjavohir625@gmail.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-xl-4'>
            <a href="tel:+998 90 007 29 04" target='_blank'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='hero-section__img me-2'>
                  <img src={telefon} width={45} className='img-fluid' alt="" />
                </div>
                <div className='hero-section__text contact-links'>
                  <h6 className='d-inline'>{t("ContactsSection.phone")}:</h6>
                  <p className='d-inline'> +998 90 007 29 04</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-xl-4'>
            <a href="https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%90%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82+%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8+%D0%98%D1%81%D0%BB%D0%B0%D0%BC%D0%B0+%D0%9A%D0%B0%D1%80%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0/@41.3007872,69.2617216,12z/data=!4m6!3m5!1s0x38ae6005c5142bf3:0xe04bf246835d2d7f!8m2!3d41.2595981!4d69.279151!16zL20vMDhkanh4?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='hero-section__img me-2'>
                  <img src={location} width={40} className='img-fluid' alt="" />
                </div>
                <div className='hero-section__text contact-links'>
                  <h6 className='d-inline'>{t("ContactsSection.address") }:</h6>
                  <p className='d-inline'> Buxoro, st. Alpomish 80.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    
    </>
  )
}
