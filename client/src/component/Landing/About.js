import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Img1 from "../../assets/images/about/img-1.png";
import Img2 from "../../assets/images/about/img-2.png";

//import icon
import FeatherIcon from "feather-icons-react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">¿Cómo funciona?</h2>
                  <p className="text-muted">Genera tu resume digital y aplica a cientos de vacantes al instante.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <h2 className="font-weight-normal line-height-1_4 mb-4">Creado y Diseñado Para <span className="font-weight-medium">Profesionales</span></h2>
                <p className="text-muted mb-4">Aplicamos por ti a cientos de vacantes al instante para aumentar tus probabilidades de encontrar trabajo.</p>
                <p className="f-17 text-muted"><FeatherIcon className="icon-xs text-primary icon-fill-primary icon mr-2" icon="layout" /> Formulario úncio y sencillo</p>
                <p className="f-17 text-muted"><FeatherIcon className="icon-xs text-primary icon-fill-primary icon mr-2" icon="cpu" /> Aplicación automatizada y personalizada</p>
                <p className="f-17 text-muted mb-4"><FeatherIcon className="icon-xs text-primary icon-fill-primary icon mr-2" icon="briefcase" /> Recibe ofertas relevantes</p>
                <Link to="/apply" className="read-more f-18">Aplicar hoy <span className="ml-2 right-icon f-24">&#8594;</span></Link>
              </Col>
              <Col lg={4}>
                <div className="card border-0">
                  <div className="bg-soft-primary about-img rounded">
                  <img src={Img1} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">AUTOMATIZACIÓN</p>
                    <h4 className="f-18">Aplicación Automatizada</h4>
                    <p className="text-muted">Aplicamos por ti de forma inteligente a cientos o miles de vacantes para aumentar tus probabilidades de encontrar un trabajo relevante a ti.</p>

                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card border-0">
                  <div className="bg-soft-info about-img rounded">
                    <img src={Img2} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">Link in bio</p>
                    <h4 className="f-18">Tu @Link in Bio Profesional</h4>
                    <p className="text-muted">Genera y eneseña tu portafolio profesional, en un solo link</p>
                    <Link to="#" className="read-more">Próximamente</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
