import React from 'react'
import mainImg from '../../../assets/mainImg.png'
import './MainSection.css'

export default function MainSection() {
    return (
        <>
            <div className='container'>
                <section className='main-section py-3'>
                    <div className="row align-items-center  main-section__content position-relative">
                        <div className="col-xl-6">
                            <img src={mainImg} alt="mainImg" className='img-fluid main-img' />
                        </div>
                        <div className="col-xl-6 main-section-titles">
                            <h3 className='text-md-end'>Bukhara</h3>
                            <h2 className='text-md-end'>Natural</h2>
                            <h1 className='text-md-end '>Product</h1>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
