import React, { useEffect } from 'react'
import './NewscardMashrut.css'
import FormSection from '../../Components/Form/FormSection'
import { useLocation } from 'react-router';

export default function NewscardMashrut({ NewsContentImg, data }) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <div className='container'>
                <div className='news-content'>
                    <div className='news-content__img'>
                        <img src={NewsContentImg} className='img-fluid w-100' alt="imd is not found" />
                    </div>
                    <div className='news-content__info'>
                        <p className='news-content__text'><p className='text-danger d-inline'>{data}</p>- admin tomonidan</p>

                        <p className='news-content__text'>
                            Go‘zal vodiy atrofimni bug‘ bilan to‘ldirganda va meridian quyoshi daraxtlarimning o‘tib bo‘lmas barglarining ustki yuzasiga urilib, ichkaridagi ma’badga bir nechta adashgan yaltirab kirsa, men o‘zimni baland o‘tlar orasiga tashlab ketaman. oqayotgan oqim; Yerga yaqin yotganimda, minglab noma’lum o‘simliklar ko‘z oldimga keladi: poyalar orasidan kichkina dunyoning shovqin-suronini eshitib, hasharotlar va pashshalarning ta’riflab bo‘lmaydigan ko‘rinishlari bilan tanishganimda, men bizni o'z qiyofasida shakllantirgan Qodir Tangrining borligi va bizni ko'tarib turuvchi va qo'llab-quvvatlovchi o'sha umumbashariy muhabbat nafasi, u atrofimizda abadiy saodatda suzib yuradi; Shunda, do‘stim, ko‘zlarimni zulmat qoplaganda, osmonu yer qalbimda o‘rnashib, uning kuchini xuddi suyukli bekasi qiyofasiga singdirayotganday bo‘lsa, men ko‘pincha sog‘inch bilan o‘ylayman: “Oh, bu tushunchalarni tasvirlab berardimmi? Mening qalbim cheksiz Xudoning ko'zgusi bo'lgani kabi, u mening qalbimning ko'zgusi bo'lishi uchun ichimda yashovchi hamma narsani qog'ozga ta'sir qilishi mumkin!
                        </p>
                        <p className='news-content__text'>
                            Ey do'stim - lekin bu mening kuchim uchun juda ko'p - men bu vahiylarning ulug'vorligi og'irligi ostida cho'kib ketaman! Men butun qalbim bilan zavqlanadigan bahorning shirin tonglariday ajoyib bir xotirjamlik butun qalbimni egallab oldi. Menga o‘xshagan qalblar saodati uchun yaratilgan bu maskanda yolg‘izman, borliq jozibasini his etaman.
                        </p>
                        <p className='news-content__text'>
                            Men juda baxtiyorman, aziz do'stim, osoyishta yashashning ajoyib tuyg'usiga shunchalik berilib ketdimki, men o'z iste'dodlarimni e'tiborsiz qoldiraman. Men hozirda bitta zarbani chizishga qodir emasman; va shunga qaramay, men hech qachon hozirgidek buyuk rassom bo'lmaganimni his qilaman.
                        </p>
                        <p className='news-content__text'>
                            Go‘zal vodiy atrofimni bug‘ bilan to‘ldirganda va meridian quyoshi daraxtlarimning o‘tib bo‘lmas barglarining ustki yuzasiga urilib, ichkaridagi ma’badga bir nechta adashgan yaltirab kirsa, men o‘zimni baland o‘tlar orasiga tashlab ketaman. oqayotgan oqim; Yerga yaqin yotganimda, minglab noma’lum o‘simliklar ko‘z oldimga keladi: poyalar orasidan kichkina dunyoning shovqin-suronini eshitib, hasharotlar va pashshalarning ta’riflab bo‘lmaydigan ko‘rinishlari bilan tanishganimda, men bizni o'z qiyofasida shakllantirgan Qodir Tangrining borligi va bizni ko'tarib turuvchi va qo'llab-quvvatlovchi o'sha umumbashariy muhabbat nafasi, u atrofimizda abadiy saodatda suzib yuradi; Shunda, do‘stim, ko‘zlarimni zulmat qoplaganda, osmonu yer qalbimda o‘rnashib, uning kuchini xuddi suyukli bekasi qiyofasiga singdirayotganday bo‘lsa, men ko‘pincha sog‘inch bilan o‘ylayman: “Oh, bu tushunchalarni tasvirlab berardimmi? Qog'ozga ichimda yashovchi hamma narsani to'liq va iliq taassurot qoldirishi mumkin edi.
                        </p>
                        <div className='news-section__form'>
                            <FormSection title={"Izoh qoldiring "} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
