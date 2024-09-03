import React, { useState } from 'react'
import './SearchSection.css'

import { Button, Form, InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

// winder images
import dastlapki from '../../../assets/Tovars/1chi.jpg';
import ikkinchi from '../../../assets/Tovars/qishki2.jpg';
import uchuinchi from '../../../assets/Tovars/qishki3.jpg';
import tortinchi from '../../../assets/Tovars/qishki4.jpg';
import beshinchi from '../../../assets/Tovars/qishki5.jpg';
import oltinchi from '../../../assets/Tovars/qishki6.jpg';
import yetinchi from '../../../assets/Tovars/qishki7.jpg';
import sakinzinchi from '../../../assets/Tovars/qishki8.jpg';

//  summer images
import yoz1 from '../../../assets/Tovars/yozgi1.jpg'
import yoz2 from '../../../assets/Tovars/yozgi2.jpg'
import yoz3 from '../../../assets/Tovars/yozgi3.jpg'
import yoz4 from '../../../assets/Tovars/yozgi4.jpg'
import yoz5 from '../../../assets/Tovars/yozgi5.jpg'
import yoz6 from '../../../assets/Tovars/yozgi6.jpg'
import yoz7 from '../../../assets/Tovars/yozgi7.jpg'
import yoz8 from '../../../assets/Tovars/yozgi8.jpg'

// autumn images
import kuzgi1 from '../../../assets/Tovars/kuzgi1.jpg'
import kuzgi2 from '../../../assets/Tovars/kuzgi2.jpg'
import kuzgi3 from '../../../assets/Tovars/kuzgi3.jpg'
import kuzgi4 from '../../../assets/Tovars/kuzgi4.jpg'
import kuzgi5 from '../../../assets/Tovars/kuzgi5.jpg'
import kuzgi6 from '../../../assets/Tovars/kuzgi6.jpg'
import kuzgi7 from '../../../assets/Tovars/kuzgi7.jpg'
import kuzgi8 from '../../../assets/Tovars/kuzgi8.jpg'

//spring images
import spring1 from '../../../assets/Tovars/spring1.jpg'
import spring2 from '../../../assets/Tovars/spring2.jpg'
import spring3 from '../../../assets/Tovars/spring3.jpg'
import spring4 from '../../../assets/Tovars/spring4.jpg'
import spring5 from '../../../assets/Tovars/spring5.jpg'
import spring6 from '../../../assets/Tovars/spring6.jpg'
import spring7 from '../../../assets/Tovars/spring7.jpg'
import spring8 from '../../../assets/Tovars/spring8.jpg'
import DivanMashrut from '../../../Components/DivanMashrut'
import { useTranslation } from 'react-i18next'


export default function SearchSection() {

    const [searchTerm, setSearchTerm] = useState('');

    const {t} =useTranslation()

    const allItems = [
        {
            additionSection: "/kvadratchalar",
            reklamImg: dastlapki,
            tovarName:t("WinderSection.Winder1"),
        },
        {
            additionSection: "/Ikat",
            reklamImg: ikkinchi,
            tovarName: t("WinderSection.Winder2"),
        },
        {
            additionSection: "/davralar",
            reklamImg: uchuinchi,
            tovarName: t("WinderSection.Winder3"),
        },
        {
            additionSection: "/geometriya",
            reklamImg: tortinchi,
            tovarName: t("WinderSection.Winder4"),
        },
        {
            additionSection: "/tropik",
            reklamImg: beshinchi,
            tovarName: t("WinderSection.Winder5"),
        },
        {
            additionSection: "/bambi",
            reklamImg: oltinchi,
            tovarName: t("WinderSection.Winder6"),
        },
        {
            additionSection: "/vizantiya",
            reklamImg: yetinchi,
            tovarName: t("WinderSection.Winder7"),
        },
        {
            additionSection: "/kechki",
            reklamImg: sakinzinchi,
            tovarName: t("WinderSection.Winder8"),
        },
        {
            additionSection: "/Vintage",
            reklamImg: yoz1,
            tovarName: t("SummerSection.Summer1")
        },
        {
            additionSection: "/hilpiragan",
            reklamImg: yoz2,
            tovarName: t("SummerSection.Summer2")
        },
        {
            additionSection: "/fransuz",
            reklamImg: yoz3,
            tovarName: t("SummerSection.Summer3")
        },
        {
            additionSection: "/qoy",
            reklamImg: yoz4,
            tovarName: t("SummerSection.Summer4")
        },
        {
            additionSection: "/alp",
            reklamImg: yoz5,
            tovarName: t("SummerSection.Summer5")
        },
        {
            additionSection: "/Ilhomlantiruvchi",
            reklamImg: yoz7,
             tovarName: t("SummerSection.Summer6")
        },
        {
            additionSection: "/yashil",
            reklamImg: yoz6,
            tovarName: t("SummerSection.Summer7")
        },
        {
            additionSection: "/zaytun",
            reklamImg: yoz8,
            tovarName: t("SummerSection.Summer8")
        },
        {
            additionSection: "/safari",
            reklamImg: kuzgi1,
            tovarName: t("AutumnSection.Autumn1")
        },
        {
            additionSection: "/colors",
            reklamImg: kuzgi2,
            tovarName: t("AutumnSection.Autumn2")
        },
        {
            additionSection: "/shivali",
            reklamImg: kuzgi3,
            tovarName: t("AutumnSection.Autumn3")
        },
        {
            additionSection: "/malaxit",
            reklamImg: kuzgi4,
            tovarName: t("AutumnSection.Autumn4")
        },
        {
            additionSection: "/bahor",
            reklamImg: kuzgi5,
            tovarName: t("AutumnSection.Autumn5")
        },
        {
            additionSection: "/kuzgi",
            reklamImg: kuzgi6,
            tovarName: t("AutumnSection.Autumn6")
        },
        {
            additionSection: "/moviy",
            reklamImg: kuzgi7,
            tovarName: t("AutumnSection.Autumn7")
        },
        {
            additionSection: "/plaid",
            reklamImg: kuzgi8,
            tovarName: t("AutumnSection.Autumn8")
        },
        {
            additionSection: "/Versal",
            reklamImg: spring1,
            tovarName: t("SpringSection.Spring1")
        },
        {
            additionSection: "/Sakura",
            reklamImg: spring2,
            tovarName: t("SpringSection.Spring2")
        },
        {
            additionSection: "/Toqqa",
            reklamImg: spring3,
            tovarName: t("SpringSection.Spring3")
        },
        {
            additionSection: "/uygunlik",
            reklamImg: spring4,
            tovarName: t("SpringSection.Spring4")
        },
        {
            additionSection: "/dastarxon",
            reklamImg: spring5,
            tovarName: t("SpringSection.Spring5")
        },
        {
            additionSection: "/yovvoyi",
            reklamImg: spring6,
            tovarName: t("SpringSection.Spring6")
        },
        {
            additionSection: "/bollarDunyosi",
            reklamImg: spring7,
            tovarName: t("SpringSection.Spring7")
        },
        {
            additionSection: "/makka",
            reklamImg: spring8,
            tovarName: t("SpringSection.Spring8")
        }
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const currentItems = allItems.filter(item => item.tovarName.toLowerCase().includes(searchTerm.toLowerCase()));

    
    return (
        <>
            <section className='py-3'>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-2">
                            <Form>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder={t("CollectionSection.search")}
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    <Button variant="danger" id="button-addon2">
                                        <Search size={20} color='white' />
                                    </Button>
                                </InputGroup>
                            </Form>
                            <ul className='search-link'>
                                <li><NavLink onClick={() => setSearchTerm("")} to={"/collection"}>{t("CollectionSection.All")}</NavLink></li>
                                <li><NavLink onClick={() => setSearchTerm("")} to={"/collection/winder"}>{t("WinderSection.title")}</NavLink></li>
                                <li><NavLink onClick={() => setSearchTerm("")} to={"/collection/spring"}>{t("SpringSection.title")}</NavLink></li>
                                <li><NavLink onClick={() => setSearchTerm("")} to={"/collection/summer"}>{t("SummerSection.title")}</NavLink></li>
                                <li><NavLink onClick={() => setSearchTerm("")} to={"/collection/autumn"}>{t("AutumnSection.title")}</NavLink></li>
                            </ul>
                        </div>
                        <div className='col-md-10 col-12'>
                            <h2 className='collection-headers'>{t("CollectionSection.title")}</h2>
                            <div className="row">
                                {searchTerm.length == 0
                                    ?
                                    <Outlet />
                                    :
                                    (
                                        currentItems.map((item, index) => (
                                            <div key={index} className='col-md-4 col-xl-3 col-6'>
                                                <DivanMashrut additionSection={item.additionSection} reklamImg={item.reklamImg} tovarName={item.tovarName} />
                                            </div>
                                        ))
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
