/**
 * @Reference https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
 */

import React,{ useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import api from '../../api/axiosConfig';
import {Button} from 'react-bootstrap';

async function loginUser(credentials) {
    /**
     * post this to the api in the backend java, compare if the username and password exists
     * return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

      .then(dak+ta => data.json())
      */
   }

export default function Login({ setToken,setName }) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('api/v1/login',{
      emailAddress:username,
      password:password
    });
    if(response.data == 1){
      setName(username);
      setUserName('');
      setPassword('');
      setToken(true);
    }else{
      setToken(false);
      setMessage("Login failed!");
    }
    
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <h3>{message}</h3>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} value={username}/>
        </label>
        <br/>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
        </label>
        <div>
          <Button variant="info" onClick={handleSubmit}>Submit</Button>
        </div>

      </form>
      <p>
        New user? <Link to='/register'>Register here</Link>
      </p>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }