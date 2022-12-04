import React, { Component, Suspense } from "react";
import { Form, FormGroup, Label, Input , Button} from "reactstrap";

const Footer = React.lazy(() => import("../../component/Footer/Footer"));
const Wizard = React.lazy(() => import("../../component/Wizard/Wizard"));
const NavbarAdmin = React.lazy(() => import("../../component/NavbarAdmin/NavbarAdmin"));

const Page1 = () => (
  <div>
    <Form>
      <FormGroup className="mb-3">
        <Label for="exampleFormControlInput1" className="f-15">Tu Nombre Completo*</Label>
        <Input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
      </FormGroup>
      <FormGroup className="mb-3">
        <Label for="exampleFormControlInput2" className="f-15">Correo*</Label>
        <Input type="email" className="form-control" id="exampleFormControlInput2" placeholder="" />
      </FormGroup>
      <FormGroup className="mb-4">
        <Label for="exampleFormControlInput3" className="f-15">Número de teléfono*</Label>
        <Input type="password" className="form-control" id="exampleFormControlInput3" placeholder="" />
      </FormGroup>
    </Form>
  </div>
);

const Page2 = () => (
  <div>
    <h1>Pagina 2</h1>
  </div>
);
const Page3 = () => (
  <div>
    <h1>Pagina 3</h1>
  </div>
);


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
          <NavbarAdmin />
          <Wizard>
              <Page1 />
              <Page2 />
              <Page3 />
          </Wizard>
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Apply
