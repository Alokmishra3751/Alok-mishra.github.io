import React from 'react';
import ReactDOM from 'react-dom';
import Style from './portfolio.css';
import aboutImg from './img/hero-main2.2.png';
import html5Img from './img/icons/001-html-5.png';
import Css3Img from './img/icons/002-css-3.png';
import reactImg from './img/icons/004-atom.png';
import jsImg from './img/icons/003-js.png';
import wordpressImg from './img/icons/006-wordpress.png';
import nodeImg from './img/icons/009-nodejs.png';
import githubImg from './img/icons/008-github-sign.png';
import awsImg from './img/icons/aws.jpg';
import shopifyImg from './img/icons/007-shopify.png';
import SimpleSlider from './slider.js';
import ImageMasonry from './masonary.js';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-tsparticles';
import CountUp from 'react-countup';
// import Progress from './progress-bars';
import Contact from './contact';
import  { useState } from 'react';

export default function Portfolio() {   
   
    
    return(
        <div>
        <div className="hero-banner">
        <section>
            <div class="container">
                <div className="tsparticles">
                        <Particles
                                      style={{ "position":"absolute" , "zIndex":0     }}
        options={{
        
        "fullScreen":{
            enable:false
        },
        /*interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
        },*/
        "fpsLimit":60,
        
	    "particles": {
            "color":{
                value:"#fff"
            },
           
	        
            "links":{
                enable:true,
                color:"#fff",
                distance:10,
                opacity:0.8,
                width:2,
            },
            "move":{
                enable:true
            }
	    }
	    
	}} />
                    </div>
                <div class="hero-inner">
                    
                    <h1>Alok <span class="stroke-text"> Mishra</span></h1>
                    
                    <div class="mid-text mt-3 mb-5">
                   
                    <h5>As a professional I'm a frontend Developer who is curious about human behaviour and your user experiences.</h5>
                    </div>
                    <div class="flex justify-center">
                   
                    <a href="./Docs/alok-cv.pdf" class="btn btn-secondary" download>Download Resume</a>
                    <button class="btn btn-primary">Hire me</button>
                    </div>
                </div>
            
            </div>
        </section>
        </div>

        <div className="about section-padding" id="About">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-5 col-sm-12">
                     <Parallax speed = {-3} easing = {'easeOutQuad'} translateY={[-10, 5]} className="para-T">
                      <div class="img-wrapper hero-img">
                          <img src={aboutImg} alt="about-img"/>
                      </div>
                     </Parallax> 
                    </div>
                    <div class="col-md-7 col-sm-12">
                        <div class="content">
                            <div class="title-holder">
                                <h3 class="simple-title">
                                    Hii there , I am Alok mishra                                
                                </h3>
                                 <span class="sub-title"><i>Developer / Designer</i></span>
                            </div>
                            <div class="desc">
                                <p>Passionate Developer From Delhi , India With 5yrs Of Experience In Innovative Web Designs And Professional Code Standards. Excellent Communicator Experienced In Interpreting And Implementing Client And Staff Visions Of New Websites. Ability To Multi-Task And Juggle Between Multiple Projects Simultaneously,Meeting All Deadlines. Fluent In English And Hindi</p>
                                
                                
                            </div>
                            <div className="row lang-row mt-5">
                                <h4>Technical Skills</h4>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={html5Img} alt="html5"/></span>
                                        <h5>Html5</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={Css3Img} alt="html5"/></span>
                                        <h5>Css3</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={reactImg} alt="html5"/></span>
                                        <h5>React</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={nodeImg} alt="html5"/></span>
                                        <h5>Node.js</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={wordpressImg} alt="html5"/></span>
                                        <h5>Wordpress</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={jsImg} alt="html5"/></span>
                                        <h5>Javascript</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={shopifyImg} alt="html5"/></span>
                                        <h5>Shopify</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={githubImg} alt="html5"/></span>
                                        <h5>Github</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="lang">
                                        <span><img src={awsImg} alt="html5"/></span>
                                        <h5>AWS</h5>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        
        <div className="section-padding masonary bg-light">
            <div className="container">
                <div class="title-holder">
                    <h3 class="simple-title">
                        Featured Work
                        <span class="section-title">Portfolio</span>
                    </h3>
                </div>
                <ImageMasonry/>
             </div>   
        </div>
        {/*<div className="section-padding skills bg-theme">
            <div className="container">
                <div class="title-holder">
                    <h3 class="simple-title">
                        Skills
                        <span class="section-title">Technical</span>
                    </h3>
                </div>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="wrapper pr-30">
                                <h5>Html5 <span>95%</span> </h5>                                
                                <Progress done="95"/>                                
                            </div>
                            <div className="wrapper pr-30">
                                <h5>Css3 <span>90%</span> </h5>                                
                                <Progress done="90"/>                                
                            </div>
                            <div className="wrapper pr-30">
                                <h5>Javascript <span>75%</span> </h5>                                
                                <Progress done="75"/>                                
                            </div>
                            <div className="wrapper pr-30">
                                <h5>Bootstrap <span>85%</span> </h5>                                
                                <Progress done="85"/>                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="wrapper pr-30">
                                <h5>React <span>65%</span> </h5>                                
                                <Progress done="65"/>                                
                            </div>
                            <div className="wrapper pr-30">
                                <h5>Node<span>40%</span> </h5>                                
                                <Progress done="40"/>                                
                            </div>
                            <div className="wrapper pr-30">
                                <h5>Tailwind Css<span>75%</span> </h5>                                
                                <Progress done="75"/>                                
                            </div>
                            <div className="wrapper pr-30">
                                <h5>Jquery<span>75%</span> </h5>                                
                                <Progress done="75"/>                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>*/}
        <div className="section-padding skills">
            <div className="container">
                 <div class="title-holder">
                    <h3 class="simple-title">
                        Areas of expertise
                        <span class="section-title">Services</span>
                    </h3>
                </div>
                <div className="slider-talent mt-5">
                    <SimpleSlider/>
                </div>
            </div>
        </div>
        
        <div className="section-padding contact-sec">
            <div className="container">
                
                <Contact/>
            </div>
        </div>
        <div className="section-padding quote primary-overlay">
            <div className="container">
                <div className="inner">
                    <h3 className="text-white">Feel Free to discuss any project</h3>
                    <a href="" className="btn btn-secondary white mt-2">Contact</a>
                </div>
            </div>
        </div>
    </div>
    )
}