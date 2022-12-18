import React from "react";

class StepThree extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Paso 3</span>
                                <div className="step-progress float-right">
                                    <span>3 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Escoge la modalidad</h2>
                                <div className="services-select-option">
                                    <ul>
                                        <li className="bg-white active"><label>Presencial <input type="radio" name="web_service" value="Web Design" defaultChecked /></label></li>
                                        <li className="bg-white"><label>Remoto <input type="radio" name="web_service" value="Web Development" /></label></li>
                                        <li className="bg-white"><label>Hibrido <input type="radio" name="web_service" value="Graphics Design" /></label></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                            <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepThree;
