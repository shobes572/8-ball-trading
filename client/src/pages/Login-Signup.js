import M from 'materialize-css';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import init from '../utils/materializeInit'

function LoginSignup(props) {
  init();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);


  const handleFormSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { 
          email: formState.user_email_login, 
          password: formState.user_pw_login 
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) { console.log(err) }
  };

  const handleFormSubmitSignup = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.user_email_signup,
        password: formState.user_pw_signup,
        firstName: formState.user_fname,
        lastName: formState.user_lname,
        alpacaKey: formState.user_alpaca
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s3"><a href="#Login" class="active">Login</a></li>
              <li class="tab col s3"><a href="#Signup">Signup</a></li>
            </ul>
          </div>
          <div id="Login" class="col s12">
            <div class="row">
              <form onSubmit={handleFormSubmitLogin} class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <input id="user_email_login" type="email" class="validate" onChange={handleChange} />
                    <label for="user_email_login">Email Address</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="user_pw_login" type="password" class="validate" onChange={handleChange} />
                    <label for="user_pw_login">Password</label>
                  </div>
                </div>
                {error ? (M.toast({html: 'The provided credentials are incorrect'})) : null}
                <div class="row">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Login
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="Signup" class="col s12">
            <div class="row">
              <form onSubmit={handleFormSubmitSignup} class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <input id="user_fname" type="text" class="validate" onChange={handleChange} />
                    <label for="user_fname">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="user_lname" type="text" class="validate" onChange={handleChange} />
                    <label for="user_lname">Last Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="user_email_signup" type="email" class="validate" onChange={handleChange} />
                    <label for="user_email_signup">Email Address</label>
                    <span class="helper-text" data-error="Please Enter a Valid Email Address"></span>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="user_pw_signup" type="password" class="validate" onChange={handleChange} />
                    <label for="user_pw_signup">Password</label>
                    <span class="helper-text" data-error="Please Enter a Valid Password"></span>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="user_alpaca" type="password" class="validate"onChange={handleChange} />
                    <label for="user_alpaca">Alpaca API Key</label>
                    <span class="helper-text" data-error="Please Enter a Valid Alpaca API Key"></span>
                  </div>
                </div>
                <div class="row">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Signup
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
