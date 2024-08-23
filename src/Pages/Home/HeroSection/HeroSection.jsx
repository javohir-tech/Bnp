import React from 'react'
import car from '../../../assets/yukmoshina.svg'
import emplema from '../../../assets/emplema.svg'
import naushnik from '../../../assets/naushnik.svg'
import wallet from '../../../assets/wallet.svg'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <>
            <section className='hero-section'>
                <div className='container'>
                    <div className='row g-4 justify-content-between'>
                        <div className='col-md-6 col-xl-3 d-flex align-items-center '>
                            <div className='hero-section__img me-2'>
                                <img src={car} width={55} className='img-fluid' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>Yetkazib berish bepul</h6>
                                <p>Barcha buyurtmalar uchun bepul yetkazib berish</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-md-6 col-xl-3'>
                            <div className='hero-section__img me-2'>
                                <img src={emplema} width={50} className='img-fluid' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>Qaytish kafolati</h6>
                                <p>30 kunlik pulni qaytarish</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-md-6 col-xl-3'>
                            <div className='hero-section__img'>
                                <img src={naushnik} width={50} className='img-fluid me-2' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>24/7 onlayn qo'llab-quvvatlash</h6>
                                <p>24/7 texnik yordam</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-md-6 col-xl-3'>
                            <div className='hero-section__img me-2'>
                                <img src={wallet} width={50} className='img-fluid' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>Xavfsiz to'lov</h6>
                                <p>Barcha to'lov usullari qabul qilinadi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
