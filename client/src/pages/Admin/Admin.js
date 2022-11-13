import React, { Component, Suspense } from "react";

const Footer = React.lazy(() => import("../../component/Footer/Footer"));
const NavbarAdmin = React.lazy(() => import("../../component/NavbarAdmin/NavbarAdmin"));

class Landing extends Component {
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
          <NavbarAdmin />
          <h1>Admin</h1>
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default Landing;
