import React, { useEffect } from 'react'
import './Kvadratchlar.css'
import birinchi from '../../../../assets/Tovars/1chi.jpg'
import ikkinchi from '../../../../assets/Tovars/qishki2.jpg'
import uchinchi from '../../../../assets/Tovars/qishki3.jpg'
import tortinchi from '../../../../assets/Tovars/qishki4.jpg'
import beshinchi from '../../../../assets/Tovars/qishki5.jpg'
import oltinchi from '../../../../assets/Tovars/qishki6.jpg'
import yettinchi from '../../../../assets/Tovars/qishki7.jpg'
import sakkizinchi from '../../../../assets/Tovars/qishki8.jpg'
import DivanMashrut from '../../../../Components/DivanMashrut'
import { useLocation } from 'react-router'

export default function Kravatchalar({ text,mashrutImg, kategoriya, mashrut1, mashrut2, mashrut2Img, mashrut1Img, mashrut1Text, mashrut2Text }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className="row gx-3 pb-3">
            <div className="col-md-6 addition-section__img">
              <img src={mashrutImg} alt="img is not found" className='img-fluid' />
            </div>
            <div className="col-md-5 offset-md-1">
              <h1 className='mt-md-0 mt-5'>{text}</h1>
              <table className='table table-bordered table-striped'>
                <tbody>
                  <tr>
                    <td>Material</td>
                    <td>100 % paxta flanel</td>
                  </tr>
                  <tr>
                    <td>Yostiq kiyimi</td>
                    <td>50x70 sm (2 dona)</td>
                  </tr>
                  <tr>
                    <td>Choyshab:</td>
                    <td>260×280 sm (1 dona)</td>
                  </tr>
                  <tr>
                    <td>Ko'rpa-to'shak:</td>
                    <td>160x220 sm (2 dona)</td>
                  </tr>
                  <tr>
                    <td>Hajmi:</td>
                    <td>Maxsus o'lcham</td>
                  </tr>
                  <tr>
                    <td>Ishlab chiqaruvchi:</td>
                    <td>Buxoro tabiiy mahsuloti</td>
                  </tr>
                </tbody>
              </table>
              <p>Kategotiya: <p className='text-danger d-inline'>{kategoriya}</p></p>
            </div>
          </div>
          
          <div className='py-5 addition-section__info'>
            <h2>tasnif</h2>
            <h1>Choyshablar to'plami Kvadratchalar</h1>
            <p>
              Choyshab - bu qulaylik va go'zallik uchun mo'ljallangan
              uy-ro'zg'or buyumlari va yotoqxona dekoratsiyasi. Choyshab,
              adyol, yostiq hunarmandchiligi va boshqa aksessuarlarni o'z ichiga
              olgan turli xil to'shak to'plamlarini tanlashingiz mumkin. Ularda turli
              dizaynlar, bosma naqshlar, kashtalar yoki boshqa dizayn elementlari mavjud.
              Ular oson va tez tozalanadi va tozalanadi. Ular yumshoq materiallardan tayyorlangan
              bo'lib, ular yotoqxonangizni qulay va qulay qiladi.
            </p>
          </div>
          <div className='my-3 text-center'>
              <h1>Shunga o'xshash mahsulotlar</h1>
          </div>
          <div className='my-5 row'>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection={mashrut1} reklamImg={mashrut1Img} tovarName={mashrut1Text} />
            </div>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection="/Ikat" reklamImg={ikkinchi} tovarName="Ikat" />
            </div>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection={mashrut2} reklamImg={mashrut2Img} tovarName={mashrut2Text} />
            </div>
            <div className="col-xl-3 col-md-4 ">
              <DivanMashrut additionSection="/davralar" reklamImg={uchinchi} tovarName="Davralar" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
