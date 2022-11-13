import React,{useState,useContext} from "react";
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App';
import "./css/bootstrap.min.css";
// import "./css/fontawesome-all.min.css";
import "./css/iofrm-style.css";
import "./css/iofrm-theme29.css";
import logolight from "../../assets/images/logo-dark-gradient.png";
import graphic from "./images/graphic3.svg";

const Login = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const PostData = ()=>{
       if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            console.log('error')
            return
       }
       fetch("/signin",{
           method:"post",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
               email,
               password
           })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
               console.log('error')
            }else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               // dispatch to user reducer
               dispatch({type:"USER",payload:data.user})
               console.log('success')
               history.push('/')
            }
        }).catch(error=>{
               console.log(error)
        })
    }

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
                                  <input
                                      class="form-control"
                                      type="text"
                                      name="email"
                                      placeholder="E-mail"
                                      required
                                      value={email}
                                      onChange={(e)=>setEmail(e.target.value)}
                                      style={{color:'#fff'}}/>
                                  <input
                                      class="form-control"
                                      type="password"
                                      name="password"
                                      placeholder="Password"
                                      required
                                      value={password}
                                      onChange={(e)=>setPassword(e.target.value)}
                                      style={{color:'#fff'}}/>
                                  <div class="form-button">
                                      <button id="submit" type="submit" class="btn btn-primary btn-block btn-sm" onClick={()=>PostData()}>Login</button>
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
