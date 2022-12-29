import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/service-icon-bg.png";
import Icon1 from "../../assets/images/services-icon/icon-1.png";
import Icon2 from "../../assets/images/services-icon/icon-2.png";
import Icon3 from "../../assets/images/services-icon/icon-3.png";
import { Link } from "react-router-dom";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Soluciones digitales únicas.</h2>
                    <p className="text-muted">Nuestros usuarios profesionales siempre contarán con la gama más sofisticada de soluciones digitales para sobresalir en los sectores más competidos de forma inteligente, organizada y hecha a mano.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon1} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Inteligente</h4>
                  <p className="service-subtitle mb-4 f-15">Constantemente inovamos para ti, creamos soluciones a la medida para explotar tu potecial en todas tus metas profesionales.</p>
                  {/*<Link to="#" className="read-more">More<span className="right-icon ml-2">&#8594;</span></Link>*/}
                </div>
              </Col>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon2} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Organizada</h4>
                  <p className="service-subtitle mb-4 f-15">Entendemos lo que es relevante para ti. Por eso automatizamos y personalizamos nuestro servicio a nuestros usurios a lo que es relevante a su rama profesional.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon3} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Hecha a mano</h4>
                  <p className="service-subtitle mb-4 f-15">Creado por profesionales entendemos las necesidades y retos de todos nuestros aplicantes, por eso, desarrollamos a base de tus necesidades y con la de miles de profesionales.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
