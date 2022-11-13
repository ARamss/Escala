import "./css/bootstrap.min.css";
// import "./css/fontawesome-all.min.css";
import "./css/iofrm-style.css";
import "./css/iofrm-theme29.css";
import logo from "./images/logo-light.svg";
import graphic from "./images/graphic3.svg";

import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
      <div class="form-body without-side">
          <div class="website-logo">
              <a href="index.html">
                  <div class="logo">
                      <img class="logo-size" src={logo} alt=""/>
                  </div>
              </a>
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
                          <h3>Registrate</h3>
                          <p>Access to the most powerfull tool in the entire design and web industry.</p>
                          <form>
                              <input class="form-control" type="text" name="name" placeholder="Full Name" required style={{color:'#fff'}}/>
                              <input class="form-control" type="email" name="email" placeholder="E-mail Address" required style={{color:'#fff'}}/>
                              <input class="form-control" type="password" name="password" placeholder="Password" required style={{color:'#fff'}}/>
                              <div class="form-button">
                                  <button id="submit" type="submit" class="btn btn-primary btn-block btn-sm">Registrarme</button>
                              </div>
                          </form>
                          <div class="other-links">
                          </div>
                          <div class="page-links">
                              <a href="/#">Login to account</a>
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
export default Register;
