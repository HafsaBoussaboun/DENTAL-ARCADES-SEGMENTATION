import React from "react";
export default function Navbar(){
    return(
        <div>
               <nav className="navbar navbar-default ">
                        <div className="container">
                        <div className="col-md-12">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                            <a className="navbar-brand" href="#"><img src="./assets/img/logo.png" className="img-responsive" style={{ width: "100px", height: "100", marginTop: "-16px" }} /></a>
                            </div>
                            <div className="collapse navbar-collapse navbar-right" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#banner">Home</a></li>
                                <li className=""><a href="/vis"> Visualisation </a></li>
                                <li className=""><a href="#about">Why DentalArcadeSeg</a></li>
                                <li className=""><a href="#contact">Contact</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </nav>
        </div>
    )
}