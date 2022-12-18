import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./assets/css/pe-icon-7.css";
import "./assets/scss/themes.scss";
import Landing from "./pages/Landing/Landing";
import Resume from "./pages/Resume/pages/Resume";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App =()=>{

  // const isAuth = {
  //   token: "Bearer "+localStorage.getItem("jwt")
  // }

  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <Landing/>
          </Route>
          <Route path="/entrar" component={Login}/>
          <Route path="/registro" component={Register}/>
          <Route path="/resume">
             <Resume/>
          </Route>
      </Switch>
    </Router>
  )
}


export default App;
