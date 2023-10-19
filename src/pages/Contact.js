import React ,{ useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ve2mify', 'template_ck79ok8', form.current, '8OqT5PaVCbkNB9mNv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <div>
         <section id="contact" className="section-padding">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h2 className="ser-title">Contact us</h2>
                        <hr className="botm-line"/>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <img src="./assets/img/logo2.png" style={{opacity: 0.5}}></img>
                        </div>
                        <div className="col-md-8 col-sm-8 marb20">
                        <div className="contact-info">
                            <h3 className="cnt-ttl">Having Any Question</h3>
                            <div className="space"></div>
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form ref={form} onSubmit={sendEmail}  role="form" className="contactForm">
                            <div className="form-group">
                                <input type="text" name="user_name" className="form-control br-radius-zero" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control br-radius-zero" name="user_email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control br-radius-zero" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validation"></div>
                            </div>

                            <div className="form-action">
                                <button type="submit" className="btn btn-form">Send Message</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
      </div>
    )
  }