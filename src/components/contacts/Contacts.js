import React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return(
        <div className='contacts-data'>
            <h4>Got any feedback or having any concerns? Feel free to reach out to us:</h4>
            <p>Email: <a href="#">amandeep@email.com</a></p>
            <p>Phone Number: <a href="#">+1-888-456-7890</a></p>
            <p>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
            </p>
        </div>
    )
}

export default Contacts;