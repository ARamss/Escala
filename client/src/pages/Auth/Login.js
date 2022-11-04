import "./css/bootstrap.min.css";
import "./css/fontawesome-all.min.css";
import "./css/iofrm-style.css";
import "./css/iofrm-theme29.css";
import logo from "./images/logo-light.svg";
import graphic from "./images/graphic3.svg";

import React, { Component } from "react";

class Login extends Component {

  render() {
    return (
      <React.Fragment>
          <div class="form-body without-side">
              <div class="website-logo">
                      <div class="logo">
                          <img class="logo-size" src={logo} alt=""/>
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
                              <h3>Login to account</h3>
                              <p>Access to the most powerfull tool in the entire design and web industry.</p>
                              <form>
                                  <input class="form-control" type="text" name="username" placeholder="E-mail Address" required/>
                                  <input class="form-control" type="password" name="password" placeholder="Password" required/>
                                  <div class="form-button">
                                      <button id="submit" type="submit" class="ibtn">Login</button> <a href="forget22.html">Forget password?</a>
                                  </div>
                              </form>
                              <div class="other-links">
                                  <div class="text">Or login with</div>
                                  <a href="/#"><i class="fab fa-linkedin-in"></i>Linkedin</a>
                              </div>
                              <div class="page-links">
                                  <a href="register22.html">Register new account</a>
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
