/**
 * @Reference https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
 */

import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
      .then(data => data.json())
      */
   }

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
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