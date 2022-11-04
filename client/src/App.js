import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import React, { Component } from "react";
import routes from "../src/routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

//import style
import "./assets/css/pe-icon-7.css";

import "./assets/scss/themes.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} exact/>
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
