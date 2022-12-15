import React, { Component, Suspense } from "react";

// Import Background Image
import { Link } from "react-router-dom";

const Wizard = React.lazy(() => import("../../component/Wizard/Wizard"));

class Apply extends Component {
  //set preloader div
  PreLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.PreLoader()}>
          <Wizard/>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Apply
