import React,{useState,useEffect} from "react";
import "./css/bootstrap.min.css";
// import "./css/fontawesome-all.min.css";
import "./css/iofrm-style.css";
import "./css/iofrm-theme29.css";
import logo from "./images/logo-light.svg";
import graphic from "./images/graphic3.svg";
import {Link,useHistory} from 'react-router-dom';

const Register = () => {
    const history =  useHistory()
    const [name,setName] = useState("")
    const [lastname,setLastname] = useState("")
    const [slug,setSlug] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [url,setURL] = useState(undefined)

    useEffect(()=>{
       if(url){
           uploadFields()
       }
    },[url])

    const uploadFields = () => {
            //email format verification
            //eslint-disable-next-line
            if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
              console.log('error')
              return
            }
            fetch("/auth/signup",{
              method:"post",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  name,
                  lastname,
                  slug,
                  password,
                  email,
                  // pic:url
              })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    console.log('error')
                }
                else{
                   console.log('registrado')
                   history.push('/entrar')
                }
            }).catch(error=>{
                console.log(error)
            })
    }

    const PostData = () => {
        uploadFields()
    }

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
                              <input
                                  class="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Nombre"
                                  value={name}
                                  onChange={(e)=>setName(e.target.value)}
                                  required
                                  style={{color:'#fff'}}/>
                              <input
                                  class="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Apellido"
                                  value={lastname}
                                  onChange={(e)=>setLastname(e.target.value)}
                                  required
                                  style={{color:'#fff'}}/>
                              <input
                                  class="form-control"
                                  type="text"
                                  name="slug"
                                  placeholder="escala.ai/usuario"
                                  value={slug}
                                  onChange={(e)=>setSlug(e.target.value)}
                                  required
                                  style={{color:'#fff'}}/>
                              <input
                                  class="form-control"
                                  type="email"
                                  name="email"
                                  value={email}
                                  onChange={(e)=>setEmail(e.target.value)}
                                  placeholder="E-mail Address"
                                  required
                                  style={{color:'#fff'}}/>
                              <input
                                  class="form-control"
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e)=>setPassword(e.target.value)}
                                  required
                                  style={{color:'#fff'}}/>
                              <div class="form-button">
                                  <button id="submit" type="submit" class="btn btn-primary btn-block btn-sm" onClick={()=>PostData()}>Registrarme</button>
                              </div>
                          </form>
                          <div class="other-links">
                          </div>
                          <div class="page-links">
                              <Link to="/entrar">Login to account</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </React.Fragment>
    );
}
export default Register;
