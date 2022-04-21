import React from 'react';
import ReactDOM from 'react-dom';
import Style from './footer.css';
import Logo from './img/am-logo.png';

export default function Footer(){
  return(
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-6">
                   <div className="logo">
                       <img src={Logo} alt="logo"/>
                    </div> 
                </div>
                <div className="col-6">
                    <ul class="social-icons inline-block">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        
					</ul>
                </div>
             </div>
             <div className="row mt-5">   
                <div className="col-lg-3 col-md-6">
                    <div className="wrap">
                        <h5>Get In Touch</h5>
                        <p>Flat-212, Pocket-03, Sector-A9, Narela, Delhi - 110040</p>
                        <p>(+91) 8527932207</p>
                        <p>alokmishra11.am@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="wrap q-links pl-7">
                        <h5>Quick Links</h5>
                        <p><a href="#About">About</a></p>
                        <p><a href="#About">Work</a></p>
                        <p><a href="#About">Services</a></p>
                        <p><a href="#About">Contact</a></p>

                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="wrap pl-5">
                        <h5>Want to discuss a project ?</h5>
                        <p>Drop your email to know more about my services and work experiences</p>
                        <form className="form-inline" method="Post">
                            <div className="row align-items-center">
                                <div  className="form-group col-10">
                                    <input name="email" className="form-control"  type="text" placeholder="Email address" />
                                </div>
                                <div className="form-group col-2">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div> 
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright top-50">
            <div className="container">
            <h6>ALOK MISHRA</h6>
            <p>© Copyright 2022 . All rights reserved.</p>
            </div>
		</div>
      </div>
  )

}