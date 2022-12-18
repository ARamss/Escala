import React from "react";

class StepTwo extends React.Component {
    render() {
        return (
                <div className="multisteps-form__panel" data-animation="slideHorz">
                    {/* div 2 */}
                    <div className="wizard-forms">
                        <div className="inner pb-100 clearfix">
                            <div className="form-content pera-content">
                                <div className="step-inner-content">
                                    <span className="step-no bottom-line">Paso 2</span>
                                    <div className="step-progress float-right">
                                        <span>2 of 5 completed</span>
                                        <div className="step-progress-bar">
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>Registra tus datos</h2>
                                    <p>Para presentarte de esta forma a todas las vacantes.</p>

                                    <div className="form-inner-area">
                                        <input type="text" name="full_name" className="form-control required" minLength="2" placeholder="First and last name *" required />
                                        <input type="email" name="email" className="form-control required" placeholder="Email Address *" required />
                                        <input type="text" name="phone" placeholder="Phone" />
                                    </div>

                                    <div className="comment-box">
                                        <p><i className="fas fa-comments"></i> Platicanos de tu experiencia y habilidades </p>
                                        <textarea name="full_comments" placeholder="Write here"></textarea>
                                    </div>

                                    <div className="upload-documents">
                                        <h3>Sube tu CV o resume:</h3>
                                        <div className="upload-araa bg-white">
                                            <input type="hidden" value="" name="fileContent" id="fileContent" />
                                            <input type="hidden" value="" name="filename" id="filename" />
                                            <div className="upload-icon float-left">
                                                <i className="fas fa-cloud-upload-alt"></i>
                                            </div>
                                            <div className="upload-text">
                                                <span>( File accepted: pdf. doc/ docx -
												Max file size : 150kb )</span>
                                            </div>
                                            <div className="upload-option text-center">
                                                <label htmlFor="attach">Subir Documento</label>
                                                <input id="attach" style={{display : 'none'}} type="file" />
											</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/*<!-- /.inner -->*/}
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

export default StepTwo;
