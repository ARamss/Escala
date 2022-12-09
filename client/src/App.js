import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./assets/css/pe-icon-7.css";
import "./assets/scss/themes.scss";
import Landing from "./pages/Landing/Landing";
import Resume from "./pages/Resume/pages/Resume";
import Admin from "./pages/Admin/Admin";
import Config from "./pages/Admin/Config";
import Apply from "./pages/Admin/Apply";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import State from './reducers/State';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


const App =()=>{

  const isAuth = {
    token: "Bearer "+localStorage.getItem("jwt")
  }

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
          <Route exact path="/admin">
             <Admin/>
          </Route>
          <Route exact path="/config">
             <Config/>
          </Route>
          <Route exact path="/apply">
             <Apply/>
          </Route>
      </Switch>
    </Router>
  )
}


export default App;
