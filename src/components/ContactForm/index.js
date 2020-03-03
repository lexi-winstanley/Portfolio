import React, {useState} from 'react';
import './style.css';

const ContactForm = props => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

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

    const formSubmit = async (event) => {
        if (contactName === '' || contactEmail === '' || contactMessage === '') {
            //modal error
            event.preventDefault();
            console.log('error');
        } else {
            event.preventDefault();
            return await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contactName: contactName,
                    contactEmail: contactEmail,
                    contactMessage: contactMessage
                })
            })
                .then(
                    (result) => {
                        window.scrollTo(0, 0);
                        setSubmitted(true);
                        setContactName('');
                        setContactEmail('');
                        setContactMessage('');
                        console.log(result);
                    },
                    (error) => {
                        window.scrollTo(0, 0);
                        setError(error);
                    }
                )
        }
    };

    let content;
    if (submitted === false) {
        content = <form onSubmit={formSubmit}>
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
        </form>
    } else if (submitted === true && error === null) {
        content = <h2 id="contactConfirmMessage" className="mainHorizontalPadding">Thanks for getting in touch! I appreciate your interest and I will get back to you as soon as possible. </h2>
    } else {
        content = <h2 id="contactErrorMessage" className="mainHorizontalPadding">Unfortunately an error has occurred. Please reach out via email as your message is important to me.</h2>
    }
        return (
            <>
            {content}
            </>
    )
};

export default ContactForm;