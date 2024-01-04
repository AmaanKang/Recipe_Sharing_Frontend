/**
 * @Reference https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
 */

import React,{ useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import api from '../../api/axiosConfig';
import {Button} from 'react-bootstrap';


export default function Login({ setToken,setName }) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    
    if (username === '' || password === '') {
      setMessage("Email and password fields are required!");
    } else {
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
    
  }
  return(
    <div className="login-wrapper">
      <table>
        <tr>
          <td>
          <h1>Please Log In</h1>
          <div className='validation'>
            <p>{message}</p>
          </div>
          <form onSubmit={handleSubmit} >
            <label>
              <p>Email</p>
              <input type="text" onChange={e => setUserName(e.target.value)} value={username}/>
            </label>
            <br/>
            <br/>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </label>
            <br/>
            <br/>
            <div>
              <Button variant="info" onClick={handleSubmit}>Submit</Button>
            </div>

          </form>
          <br/>
          <p>
            New user? <Link to='/register'>Register here</Link>
          </p>
          </td>
          <td>
          <div className='food-image'>
          <img src={require("../Simple Cooking.jpg")} />
          </div>
          </td>
        </tr>
      </table>
      
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }