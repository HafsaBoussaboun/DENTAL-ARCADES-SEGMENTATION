import React from "react";
export default function Footer(){
    return(
        <div>
            <footer id="footer">
                <div class="top-footer">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4 col-sm-4 marb20">
                        <div class="ftr-tle">
                          <h4 class="white no-padding">About Us</h4>
                        </div>
                        <div class="info-sec">
                          <p> our mission is to streamline dental arcade segmentation for dental healthcare professionals. We are committed to providing user-friendly and efficient tools to enhance dental practice.</p>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4 marb20">
                        <div class="ftr-tle">
                          <h4 class="white no-padding">Quick Links</h4>
                        </div>
                        <div class="info-sec">
                          <ul class="quick-info">
                            <li><a href="#banner"><i class="fa fa-circle"></i>Segmentation</a></li>
                            <li><a href="/vis"><i class="fa fa-circle"></i>Visualisation</a></li>
                            <li><a href="#contact"><i class="fa fa-circle"></i>Contact</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4 marb20">
                        <div class="ftr-tle">
                          <h4 class="white no-padding">Follow us</h4>
                        </div>
                        <div class="info-sec">
                          <ul class="social-icon">
                            <li class="circle-icon bglight-blue"><i class="fa fa-facebook"></i></li>
                            <li class="circle-icon bgred"><i class="fa fa-google-plus"></i></li>
                            <li class="circle-icon bgdark-blue"><i class="fa fa-linkedin"></i></li>
                            <li class="circle-icon bglight-blue"><i class="fa fa-twitter"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-line">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        © Copyright 3D Smart Factory
                        <div class="credits">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </footer>
        </div>
    )
}