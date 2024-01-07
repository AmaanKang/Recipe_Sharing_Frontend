import React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return(
        <div className='contacts-data'>
            <h4>Got any feedback or having any concerns? Feel free to reach out to us:</h4>
            <p>Email: <a href="#">amandeep@email.com</a></p>
            <p>Phone Number: <a href="#">+1-888-456-7890</a></p>
            <p>
                <FontAwesomeIcon icon={faInstagram} style={{"padding":"2%"}} />
                <FontAwesomeIcon icon={faFacebook} style={{"padding":"2%"}} />
                <FontAwesomeIcon icon={faTwitter} style={{"padding":"2%"}} />
                <FontAwesomeIcon icon={faYoutube} style={{"padding":"2%"}} />
            </p>
        </div>
    )
}
export default Contacts;