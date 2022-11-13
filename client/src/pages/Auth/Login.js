import "./css/bootstrap.min.css";
// import "./css/fontawesome-all.min.css";
import "./css/iofrm-style.css";
import "./css/iofrm-theme29.css";
import logolight from "../../assets/images/logo-dark-gradient.png";
import graphic from "./images/graphic3.svg";

import React, { Component } from "react";

class Login extends Component {

  render() {
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
                              <form>
                                  <input class="form-control" type="text" name="username" placeholder="E-mail Address" required style={{color:'#fff'}}/>
                                  <input class="form-control" type="password" name="password" placeholder="Password" required style={{color:'#fff'}}/>
                                  <div class="form-button">
                                      <button id="submit" type="submit" class="btn btn-primary btn-block btn-sm">Login</button>
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
    );
  }
}
export default Login;
