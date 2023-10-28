import React from "react";
export default function About() {
    return (
      <div>
         <section id="about" className="section-padding">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="section-title">
                            <h2 className="head-title lg-line">Why Dental Arcades Segmentation ????????? </h2>
                            <hr className="botm-line"/>
                            
                        </div>
                        </div>
                        <div className="col-md-9 col-sm-8 col-xs-12">
                        <div  className="col-sm-9 more-features-box">
                            <div className="more-features-box-text">
                            <div className="more-features-box-text-icon"> <i className="fa fa-angle-right" aria-hidden="true"></i> </div>
                            <div className="more-features-box-text-description">
                                <h3>Fast Response</h3>
                                <p>We refined our API to achieve the highest levels of speed and dependability.</p>
                            </div>
                            </div>
                            <div className="more-features-box-text">
                            <div className="more-features-box-text-icon"> <i className="fa fa-angle-right" aria-hidden="true"></i> </div>
                            <div className="more-features-box-text-description">
                                <h3>Easy & Simple to use</h3>
                                <p>We designed our user interface to provide a seamless and uncomplicated experience, complete with seamless 3D integration.</p>
                            </div>
                            </div>

                            <div className="more-features-box-text">
                            <div className="more-features-box-text-icon"> <i className="fa fa-angle-right" aria-hidden="true"></i> </div>
                            <div className="more-features-box-text-description">
                                <h3>The best Model </h3>
                                <p>We are employing the MeshSetNet, a highly precise model for teeth segmentation, in order to conduct our segmentation tasks.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
      </div>
    )
  }
