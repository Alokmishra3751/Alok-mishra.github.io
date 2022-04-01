import React from 'react';
import ReactDOM from 'react-dom';
import Style from './portfolio.css';
import aboutImg from './img/about.png';
import Slider from "react-slick";
import SimpleSlider from './slider.js';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-tsparticles';

export default function Portfolio() {
    
    
    return(
        <div>
        <div className="hero-banner">
        <section>
            <div class="container">
                <div className="tsparticles">
                                      <Particles
                                      style={{ "position":"absolute" , "z-index":0     }}
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
                color:"#b1d5ed",
                distance:50,
                opacity:0.6
            },
            "move":{
                enable:true
            }
	    }
	    
	}} />
                    </div>
                <div class="hero-inner">
                    
                    <h1>Alok</h1>
                    <h1 class="stroke-text">Mishra</h1>
                    <p><i>Developer / Designer</i></p>
                    <div class="flex justify-center">
                    <button class="btn btn-primary">Hire me</button>
                    <button class="btn btn-secondary ms-2">Contact</button>
                    </div>
                </div>
            
            </div>
        </section>
        </div>

        <div className="about section-padding bg-theme" id="About">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-12">
                     <Parallax speed = {-3} easing = {'easeOutQuad'} translateY={[-20, 5]} className="para-T">
                      <div class="img-wrapper">
                          <img src={aboutImg} alt="about-img"/>
                      </div>
                     </Parallax> 
                    </div>
                    <div class="col-md-7 col-sm-12">
                        <div class="content">
                            <div class="title-holder">
                                <h3 class="simple-title">
                                    Hii there , I am Alok mishra 

                                    <span class="section-title">About</span>
                                </h3>
                                <span class="sub-title">Creative & Passionate Developer</span>
                            </div>
                            <div class="desc">
                                <p>Hello everybody! My name is Bernard Sydney. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
                                <p>
                                    With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                                </p>
                                <a href="#" class="btn btn-secondary mt-5">Learn more</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="section-padding slider-talent bg-theme">
            <div className="container">
                <SimpleSlider/>
            </div>
        </div>
    </div>
    )
}