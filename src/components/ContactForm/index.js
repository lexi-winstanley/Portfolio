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