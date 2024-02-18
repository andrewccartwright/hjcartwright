'use client'

import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import '../css/Contact.css';

const SERVICE_ID = 'service_r4evqhh';
const TEMPLATE_ID = 'template_s2426po';
const PUBLIC_KEY = 'ZLdFSgGEf7xxbsO-7';

const templateParams = {
    from_name: 'Test',
    to_name: 'Drew',
    reply_to: 'pandarocks96@gmail.com',
    message: 'test message'
}

const Contact = (props: {}) => {
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        emailjs.init({
            publicKey: PUBLIC_KEY
        })
    }, []);

    const sendEmail = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(event);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target as HTMLFormElement, {
            publicKey: PUBLIC_KEY
        }).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        })
    }

    const validateEmail = (event: React.ChangeEvent) => {
        event.preventDefault();

        const email = (event.target as HTMLInputElement).value;
        if (email !== "" && String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            setShowError(false);
        } else {
            setShowError(true);
        }
    }

    return (
        <div id="contact-form-container">
            <form onSubmit={sendEmail}>
                <div className='form-item'>
                    <label htmlFor="from_name">Your Name:</label>
                    <input name="from_name" type="text" required />
                </div>
                
                <div className='form-item'>
                    <label htmlFor='reply_to'>Your Email Address:</label>
                    <input name="reply_to" type="text" required onChange={validateEmail} />
                    {showError && <p id="error-message">Please enter a valid email address</p> }
                </div>

                <div className='form-item'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" required />
                </div>

                <button type="submit" className='btn btn-primary' disabled={showError}>Send</button>
            </form>
        </div>
    )
}

export default Contact;