import React from 'react'
import './Form.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FormSection({title}) {
    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>Sizning elektron pochta manzilingiz nashr etilmaydi. Majburiy maydonlar belgilangan *</p>
                <div>
                    <Form>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <Form.Control type="email" placeholder="Emailingiz" required />
                            </div>
                            <div className='col-md-6'>
                                <Form.Control type="text" placeholder="Ismingiz*" />
                            </div>
                            <div className='col'>
                                <Form.Control as="textarea" rows={5} placeholder='Izoh qoldiring' />
                            </div>
                        </div>
                        <div className='text-end'>
                            <Button type='submit' variant="danger" className='my-3 px-5 rounded-pill'>Yuborish</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
