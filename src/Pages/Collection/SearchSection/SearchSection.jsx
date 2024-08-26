import React from 'react'
import './SearchSection.css'
import DivanMashrut from '../../../Components/DivanMashrut'

import { Button, Form, InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import WinderSection from '../../Home/WinderSection/WinderSection'

export default function SearchSection() {
    return (
        <>
            <section className='py-3'>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-2">
                            <Form>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="danger" id="button-addon2">
                                    <Search size={20} color='white'  />
                                    </Button>
                                </InputGroup>
                            </Form>
                            <ul className='search-link'>
                                <li><NavLink to={"/collection/winder"}>Qishkgi Kolleksiya</NavLink></li>
                                <li><NavLink to={"/collection/spring"}>Bahorgi Kolleksiya</NavLink></li>
                                <li><NavLink to={"/collection/summer"}>Yozgi Kolleksiya</NavLink></li>
                                <li><NavLink to={"/collection/autumn"}>Kuzgi Kolleksiya</NavLink></li>
                            </ul>
                        </div>
                        <div className='col-md-10 col-12'>
                            <h2>To'plam</h2>
                            <div className="row">
                                <Outlet/>
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
