import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImg.png'
import { ArrowRight } from 'react-bootstrap-icons'

export default function About() {
  return (
    <>
      <div className='container my-5'>
        <div className="row g-3 align-items-center">
          <div className="col-md-6 order-md-1 order-2 about-info" >
            <h1 className='mb-3'>Buxoro tabiiy mahsuloti</h1>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarFabrikamız uzoq yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan.
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarUshbu kompaniya 17 yildan beri mijozlarga xizmat ko'rsatadi.
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarUshbu kompaniyaning asosiy maqsadi yuqori sifatli va tejamkor mahsulotlar
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarUshbu kompaniyaning ishlab chiqarish jarayoni butunlay ekologik toza
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarKorxonada xaridorlarning talab va takliflari asosida har qanday turdagi paxta xomashyosi ishlab chiqarilishi mumkin.
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarKompaniya DongJia to‘quv mashinalarining O‘zbekistondagi rasmiy dileri hisoblanadi.
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarAyni paytda 80 dan ortiq oila o‘z oilasini moddiy jihatdan ta’minlab, korxona nufuzi va muvaffaqiyatiga hissa qo‘shmoqda.
            </p>
            <p>
              <ArrowRight />Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarBu talabni qondirish uchun 50 ta to‘quv dastgohi to‘xtovsiz yuqori tezlikda ishlamoqda.
            </p>
            <p>
              <ArrowRight />  Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarOyiga 200-250 ming metr gazlama to‘qish quvvatiga egamiz.
            </p>
            <p>
              <ArrowRight /> Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarMijozlarimizning yuqori talabidan kelib chiqib, korxonada yuqori sifatli yuqori sifatli eko-sumkalar ishlab chiqarish yo‘lga qo‘yildi.
            </p>
            <p>
              <ArrowRight /> Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar“Bukhara Natural Product” kompaniyasi oʻz sodiq mijozlariga istalgan vaqtda xizmat koʻrsatishdan mamnun.
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
