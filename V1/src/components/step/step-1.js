import React from "react";

class StepOne extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel js-active" data-animation="slideHorz" >
                {/* div 1 */}
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no">Paso 1</span>
                                <h2>¿Qué tipo de trabajo buscas?</h2>
                                <div className="step-box">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label className="step-box-content bg-white text-center relative-position active">
                                                <span className="step-box-icon">
                                                    <img src={require("../../assets/img/d1.png")} alt="" />
                                                </span>
                                                <span className="step-box-text">De Todo</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="service_name"
                                                            defaultValue="Corporate Services"
                                                            defaultChecked
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="step-box-content bg-white text-center relative-position">
                                                <span className="step-box-icon">
                                                    <img src={require("../../assets/img/d2.png")} alt="" />
                                                </span>
                                                <span className="step-box-text">Tiempo Completo</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="service_name"
                                                            defaultValue="Freelancing Services"
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="step-box-content bg-white text-center relative-position">
                                                <span className="step-box-icon">
                                                    <img src={require("../../assets/img/d3.png")} alt="" />
                                                </span>
                                                <span className="step-box-text">Internship</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input
                                                            type="radio"
                                                            name="service_name"
                                                            defaultValue="Development Services"
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.inner */}
                    <div className="actions">
                        <ul>
                            <li className="disable" aria-disabled="true">
                                <span className="js-btn-next" title="NEXT">
                                    Backward <i className="fa fa-arrow-right" />
                                </span>
                            </li>
                            <li>
                                <span className="js-btn-next" title="NEXT">
                                    NEXT <i className="fa fa-arrow-right" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >

        );
    }
}

export default StepOne;
