import React, { Component, Suspense } from "react";

// Importing Sections
const Section = React.lazy(() => import("./Section"));
const About = React.lazy(() => import("../../component/Landing/About"));
const Services = React.lazy(() => import("../../component/Landing/Services"));
const Feature = React.lazy(() => import("../../component/Landing/Feature"));
const Project = React.lazy(() => import("../../component/Landing/Project"));
const Clients = React.lazy(() => import("../../component/Landing/Clients"));
const Contact = React.lazy(() => import("../../component/Landing/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));
const Navbar = React.lazy(() => import("../../component/Navbar/Navbar"));


// import { Spinner } from "reactstrap";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "about", navheading: "About Us" },
        { id: 3, idnm: "services", navheading: "Services" },
        { id: 4, idnm: "features", navheading: "Features" },
        { id: 5, idnm: "project", navheading: "Project" },
        { id: 6, idnm: "clients", navheading: "Clients" },
        { id: 7, idnm: "contact", navheading: "Contact Us" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: true });
    }
  };

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
          <Navbar />

          {/* Importing Section */}
          <Section />

          {/* Importing About */}
          <About />

           {/* Importing Service */}
           <Services />

          {/* Importing Feature */}
          <Feature />

          {/* Importing Project */}
          <Project />

          {/* Importing Client */}
          <Clients />

          {/* Importing Contact Us */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default Landing;
