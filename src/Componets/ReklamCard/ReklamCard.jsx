import React from 'react'
import reklamimg from '../../assets/111.png'
import './ReklamCard.css'
export default function ReklamCard() {
    return (
        <>
            <div className="container">
                <section className='reklam-card py-5 my-5'>
                    <div className="row justify-content-around align-items-center bg-dange reklam-card__container">
                        <div className="col-xl-3  text-end garandiya order-2 order-xl-1">
                            <h1>100%</h1>
                            <h3>Material quality</h3>
                        </div>
                        <div className="col-xl-3 reklam-card__img order-1 order-xl-2">
                            <img src={reklamimg} className='img-fluid' alt="img undefined" />
                        </div>
                        <div className="col-xl-3 reklam-card__info order-3">
                            <h2>'Bukhara Natural Product'</h2>
                            <p>has been a company that produces cotton fabrics for use all over the world for many years</p>
                            <button>Collection</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
