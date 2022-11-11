import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input , Button} from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-4-bg-img.png";
import logolight from "../../assets/images/logo-dark-gradient.png";

import { Link } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-4-bg position-relative" id="home" style={{ borderRadius: 0, marginTop: 0, backgroundColor: "#000", backgroundImage: `url(${Background})` }}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="6">
              <div className="">
                {/*<p className="text-uppercase font-weight-bold f-14 mb-4">Smart candidates</p>*/}
                <img src={logolight} alt="" className="" style={{ width: 155, marginBottom: 15 }} />
                <h1 className="hero-4-title mb-4 line-height-1_4" style={{ color: "#fff"}}>La plataforma profesional, hecha para ti.</h1>
                <p className="text-muted mb-4 pb-3">Tu CV digital y aplica de forma instantanea a cientos de vacantes disponibles para ti. Agrega tus datos, aplica y mira como te llegan ofertas al instante.</p>
                <Link to="#" className="btn btn-primary">¿Cómo funciona?</Link>
              </div>
            </Col>
            <Col lg={4} className="offset-lg-2 col-md-8">
              <div className="hero-login-form mx-auto bg-white shadow p-4 rounded mt-5 mt-lg-0">
                <div className="text-center">
                <p className="text-muted mb-2 f-13 text-uppercase">Bienvenid@ a escala</p>
                <h5 className="form-title mb-4">Aplica hoy.</h5>
                </div>
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
                  <Button type="submit" color="primary" className="btn btn-primary btn-block btn-sm">Empieza hoy.<span className="ml-2 right-icon">&#8594;</span><i className="mdi mdi-telegram ml-2"></i></Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
      </React.Fragment>
    );
  }
}

export default Section;
