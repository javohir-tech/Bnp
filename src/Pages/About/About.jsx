import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImg.png'
import { ArrowRight } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <div className='container my-5'>
        <div className="row g-3 align-items-center">
          <div className="col-md-6 order-md-1 order-2 about-info" >
            <h1 className='mb-3'>{t("NewsSection.text")}</h1>
            <p>
              <ArrowRight />{t("AboutSection.text1")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text2")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text3")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text4")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text5")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text6")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text7")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text8")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text9")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text10")}
            </p>
            <p>
              <ArrowRight />{t("AboutSection.text11")}
            </p>
          </div>
          <div className='col-md-6 about-img order-md-2 order-1'>
            <img src={aboutImg} className='img-fluid' alt="img is not found" />
          </div>
        </div>
      </div>
    </>
  )
}
