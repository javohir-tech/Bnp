import React, { useEffect } from 'react'
import './Kvadratchlar.css'
import ikkinchi from '../../../../assets/Tovars/qishki2.jpg'
import uchinchi from '../../../../assets/Tovars/qishki3.jpg'
import DivanMashrut from '../../../../Components/DivanMashrut'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Kravatchalar({ text,mashrutImg, kategoriya, mashrut1, mashrut2, mashrut2Img, mashrut1Img, mashrut1Text, mashrut2Text }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const {t} =useTranslation();
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className="row gx-3 pb-3">
            <div className="col-md-6 addition-section__img">
              <img src={mashrutImg} alt="img is not found" className='img-fluid w-100' />
            </div>
            <div className="col-md-5 offset-md-1">
              <h1 className='mt-md-0 mt-5'>{t(text)}</h1>
              <table className='table table-bordered table-striped'>
                <tbody>
                  <tr>
                    <td>{t("Table.material")}</td>
                    <td>100 % {t("Table.flanel")}</td>
                  </tr>
                  <tr>
                    <td>{t("Table.ysize")}</td>
                    <td>50x70 {t("Table.sm")} (2 {t("Table.dona")})</td>
                  </tr>
                  <tr>
                    <td>{t("Table.csize")}</td>
                    <td>260×280 {t("Table.sm")} (1  {t("Table.dona")})</td>
                  </tr>
                  <tr>
                    <td>{t("Table.ksize")}</td>
                    <td>160x220 {t("Table.sm")} (2  {t("Table.dona")})</td>
                  </tr>
                  <tr>
                    <td>{t("Table.hajm")}</td>
                    <td>{t("Table.size")}</td>
                  </tr>
                  <tr>
                    <td>{t("Table.by")}</td>
                    <td>{t("NewsSection.text")}</td>
                  </tr>
                </tbody>
              </table>
              <p>{t("Kravatchalar.categoriy")}<p className='text-danger d-inline'>{t(kategoriya)} </p></p>
            </div>
          </div>
          
          <div className='py-5 addition-section__info'>
            <h2>{t("Kravatchalar.comment")}</h2>
            <h1>{t("Kravatchalar.title")}</h1>
            <p>{t("Kravatchalar.text")}</p>
          </div>
          <div className='my-3 text-center'>
              <h1>{t("Kravatchalar.banner")}</h1>
          </div>
          <div className='my-5 row'>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection={mashrut1} reklamImg={mashrut1Img} tovarName={t(mashrut1Text)} />
            </div>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection="/Ikat" reklamImg={ikkinchi} tovarName={t("WinderSection.Winder2")} />
            </div>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection={mashrut2} reklamImg={mashrut2Img} tovarName={t(mashrut2Text)} />
            </div>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection="/davralar" reklamImg={uchinchi} tovarName={t("WinderSection.Winder4")} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
