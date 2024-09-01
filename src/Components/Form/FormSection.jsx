import React, { useState } from 'react'
import './Form.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  Modal  from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

export default function FormSection({ title, col, subtitle }) {

    //modal js
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // post method

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const bot_token = "6814649919:AAHT8Pg3YiorSjlajGsybbMw304-v4Jbf9M"
        const bot_id = "1896479864"

        const xabar = `
            name: ${name}
            email:${email}
            message: ${message}
        `

        fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: bot_id,
                text: xabar
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res.ok) {
                    setEmail("")
                    setName("")
                    setMessage("")
                    handleShow()
                }
                else {
                    alert("Xabaringiz yuborilmadi")
                }
            })
            .catch(err => {
                console.log(err);
                alert("Xabaringiz yuborilmadi")
            })
    }

    const { t } = useTranslation()

    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <div className='row g-3'>
                            <div className={col}>
                                <Form.Control type="email" onChange={(e) => setEmail(e?.target?.value)} value={email} placeholder={t("Form.email")} required />
                            </div>
                            <div className={col}>
                                <Form.Control type="text" onChange={(e) => setName(e?.target?.value)} value={name} placeholder={t("Form.name")} required/>
                            </div>
                            <div className='col'>
                                <Form.Control as="textarea" onChange={(e) => setMessage(e?.target?.value)} value={message} rows={5} placeholder={t("Form.message")} required/>
                            </div>
                        </div>
                        <div className='text-end'>
                            <Button type='submit' variant="danger" className='my-3 px-5 rounded-pill'>{t("Form.button")}</Button>
                        </div>
                    </Form>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{t("modal.title")}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{t("modal.text")}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}
