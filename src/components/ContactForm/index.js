import React, {useState} from 'react';
import './style.css';

const ContactForm = props => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const formChange = event => {
        switch (event.target.name) {
            case 'contactName':
                setContactName(event.target.value);
            break;
            case 'contactEmail':
                setContactEmail(event.target.value);
            break;
            case 'contactMessage':
                setContactMessage(event.target.value);
            break;
            default:
                //do nothing
            break;
        }
    };

    const formSubmit = event => {
        if (contactName === '' || contactEmail === '' || contactMessage === '') {
            //modal error
            event.preventDefault();
            console.log('error');
        } else {
            event.preventDefault();
            window.scrollTo(0, 0);
            const nodemailer = require('nodemailer');
            const aws = require('aws-sdk');
            aws.config.update({
                accessKeyId: process.env.ACCESS_KEY,
                secretAccessKey: process.env.SECRET_KEY,
                region: process.env.REGION
            });
            let transporter = nodemailer.createTransport({
                SES: new aws.SES({
                    apiVersion: '2010-12-01'
                })
            });
            let mailOptions = {
                from: 'contact@lexiwinstanley.com',
                to: 'lexi@lexiwinstanley.com',
                subject: 'New Portfolio Contact',
                text: `Name: ${contactName} \n Email: ${contactEmail} \n Message: ${contactMessage}`,
                html: '<h1>You have a new contact: </h1><h2>Name: {contactName}</h2><h2>Email: {contactEmail}</h2><h2>Message: {contactMessage}</h2>'
            };

            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(info);
                }
            });
            setSubmitted(true);
            setContactName('');
            setContactEmail('');
            setContactMessage('');
        }
    };

        return (
            submitted === false ?
        <form onSubmit={formSubmit}>
            <label>
                Name:
                <input className="formInput" name="contactName" type="text" value={contactName} onChange={formChange} />
            </label>
            <label>
                Email:
                <input className="formInput" name="contactEmail" type="text" value={contactEmail} onChange={formChange} />
            </label>
            <label>
                Message:
                <textarea rows="5" className="formInput" name="contactMessage" value={contactMessage} onChange={formChange} />
            </label>
            <input id="submitButton" type="submit" value="Submit" />
        </form> : <><h2 id="contactConfirmMessage">Thanks for getting in touch! I appreciate your interest and I will get back to you as soon as possible. </h2></>
    )
};

export default ContactForm;