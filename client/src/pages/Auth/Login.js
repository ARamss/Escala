import React from "react";
import "./css/bootstrap.min.css";
import axios from 'axios';
import formValidation from '../../reducers/FormValidation';
import inputErrors from '../../reducers/InputErrors';
import "./css/iofrm-style.css";
import "./css/iofrm-theme29.css";
import logolight from "../../assets/images/logo-dark-gradient.png";
import graphic from "./images/graphic3.svg";

const Login = () => {

    const initialState = {
      email: '',
      password: ''
    };

    // const [userNotFound, setUserNotFound] = useState(false);
    // const [wrongPassword, setWrongPassword] = useState(false);

    const axiosFunc = () => {
    // setUserNotFound(false);
    // setWrongPassword(false);
    axios.post(`/auth/signin`, values )
      .then(res => {
        // Save JWT token in localStorage
        localStorage.setItem("jwt",res.data)
        // localStorage.setItem("user",JSON.stringify(res.data))

        // Redirect user to admin page
        window.location = '/admin';
      })
      .catch(err => {
        const error = err.response.data
        if (error === 'Username/Email not found') {
          // setUserNotFound(true);
          console.log('Username not found')
        }
        if (error === 'Invalid password') {
          // setWrongPassword(true);
          console.log('Wrong Password')
        }
      })
    }

    const {handleSubmit, handleChange, values, isSubmitting} = formValidation(initialState, inputErrors, axiosFunc);

    return (
      <React.Fragment>
          <div class="form-body without-side">
              <div class="website-logo">
                      <div class="logo">
                          <img class="logo-size" src={logolight} alt=""/>
                      </div>
              </div>
              <div class="row">
                  <div class="img-holder">
                      <div class="bg"></div>
                      <div class="info-holder">
                          <img src={graphic} alt=""/>
                      </div>
                  </div>
                  <div class="form-holder">
                      <div class="form-content">
                          <div class="form-items">
                              <h3>Bienvenid@ de vuelta</h3>
                              <p>Entra a editar tu resume o a aplicar a miles de vacantes al insante.</p>
                              <form onSubmit={handleSubmit}>
                                  <input
                                      class="form-control"
                                      type="text"
                                      name="email"
                                      required
                                      value={values.email}
                                      onChange={handleChange}
                                      placeholder={'Username or Email'}
                                      style={{color:'#fff'}}/>
                                  <input
                                      class="form-control"
                                      type="password"
                                      required
                                      name="password"
                                      value={values.password}
                                      onChange={handleChange}
                                      placeholder={'Password'}
                                      autoComplete="password"
                                      style={{color:'#fff'}}/>
                                  <div class="form-button">
                                      <button id="submit" type="submit" disabled={isSubmitting} class="btn btn-primary btn-block btn-sm">Login</button>
                                  </div>
                              </form>
                              <div class="other-links">
                              </div>
                              <div class="page-links">
                                  <a href="register22.html">¿No tienes cuenta?</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
    )
}

export default Login
