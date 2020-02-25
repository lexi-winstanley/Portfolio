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
        }
    };

    const formSubmit = event => {
        if (contactName === '' || contactEmail === '' || contactMessage === '') {
            //modal error
            event.preventDefault();
            console.log('error');
        } else {
            event.preventDefault();
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
                <input name="contactName" type="text" value={contactName} onChange={formChange} />
            </label>
            <label>
                Email:
                <input name="contactEmail" type="text" value={contactEmail} onChange={formChange} />
            </label>
            <label>
                Message:
                <textarea name="contactMessage" value={contactMessage} onChange={formChange} />
            </label>
            <input type="submit" value="Submit" />
        </form> : <>Thanks for Contacting!</>
    )
};

export default ContactForm;