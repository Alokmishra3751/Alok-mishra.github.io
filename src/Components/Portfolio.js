import React from 'react';
import  './portfolio.css';
import skillsImg from './img/skills.jpg';

import SimpleSlider from './slider.js';
import ImageMasonry from './masonary.js';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-tsparticles';
import CountUp from 'react-countup';
import Progress from './progress-bars';

import Contact from './contact';
import Fade from 'react-reveal/Fade';

export default function Portfolio() {   
   
    
    return(
        <div>
        <div className="hero-banner">
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
                    "fpsLimit":120,

                    "particles": {
                    "color":{
                    value:"#fff"
                    },

                    number: {
                        density: {
                        enable: true,
                        area: 300,
                        },
                        value: 20,
                    },



                    "links":{
                    enable:true,
                    color:"#fff",
                    distance:90,
                    opacity:0.9,
                    height:1,
                    width:1,
                    },
                    "move":{
                    enable:true
                    }
                    }

                    }} />
                </div>   
        <section>
            <div class="container">
               <div className="row">
                   <div className="col-12">
                        <div class="hero-inner">
                            <h1 className='gText'>Alok  Mishra</h1>
                            
                            <div class="mid-text mt-3 mb-3">                        
                                <h5>As a professional I'm a frontend Developer who is curious about human behaviour and your user experiences.</h5>
                            </div>
                            
                            <div class="flex justify-center">
                            <a href="#" class="btn btn-primary">Hire me</a>
                           
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
        </div>

        <div className="about section-padding" id="About">
           
            <div class="container">
                <div class="row">
                    
                    <div class="col-12">
                        <div class="content">
                           
                            <div class="title-holder">
                                <p className='sub-title gText'># About me</p>
                                <h3 class="simple-title">
                                    <Fade top>
                                        Hii there , I am Alok mishra    
                                    </Fade>                            
                                </h3>
                                
                                 <span class="sub-title">A Lead <span className="gText"> Developer / Designer </span> based in India</span>
                            </div>
                            <div class="desc">
                                <p>Passionate Developer From Delhi , India With 5yrs Of Experience In Innovative Web Designs And Professional Code Standards. Excellent Communicator Experienced In Interpreting And Implementing Client And Staff Visions Of New Websites. Ability To Multi-Task And Juggle Between Multiple Projects Simultaneously,Meeting All Deadlines.</p>
                                <a href="./Docs/alok-cv.pdf" class="btn btn-primary mt-3" download>Download Resume</a>
                                
                            </div>
                        
                            
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        
        <div className="section-padding masonary gray-bg" id="projects">
             
            <div className="container-fluid no-gutter">
                <div className="container">
                <div class="title-holder">
                    <p className='sub-title gText'># Portfolio</p>
                    <h3 class="simple-title">
                        <Fade top>
                        Featured Work
                        </Fade>
                        
                    </h3>
                </div>
                </div>
                <ImageMasonry/>
             </div>   
        </div>
        <div className="section-padding skills bg-fade">
            <div className="container">
                <div class="title-holder">
                <p className='sub-title gText'># Technical</p>
                    <h3 class="simple-title">
                        Skills & Experience
                        
                    </h3>
                </div>
                <div className="row">
                 
                    <div class="col-md-6 col-sm-12">
                     <div class="hero-wrap">
                        <Parallax speed = {-3} easing = {'easeOutQuad'} translateY={[-10, 5]} className="para-T">
                        <div className='hero-center'>
                            <div className='hero-cover'>
                                <img src={skillsImg} alt="skills-img" className='skillsImg'/>
                            
                            </div>
                            

                        </div>          
                            </Parallax> 
                     </div>
                    </div>
                   
                 <div className="col-md-6">   
                    <div className="progressBox">
                        <Progress/> 
                    </div> 
                      
                </div>
                </div>           
            </div>
        </div>
        <div className="section-padding slider gray-bg">
            <div className="container">
                 <div class="title-holder">
                 <p className='sub-title gText'># Services</p>
                    <h3 class="simple-title">
                        <Fade top>
                            My expertise
                        </Fade>
                        
                    </h3>
                    <p>We offer high quality products for competitive prices. 
                    Our main goal is customer satisfaction, which we obtain through market orientation of ongoing service and support.</p>
                </div>
                <div className="slider-talent mt-5">
                    <SimpleSlider/>
                </div>
            </div>
        </div>

        <div className="section-padding quote gray-bg">
            <div className="container">
                <div class="about-features-wrap">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-feature-left">
                                <h3>I Create Thoughtful Experiences for the web and digital products.</h3>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-feature-right"> <p> Dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas.</p>
                            </div>
                        </div>
                        </div>
                        <div class="radius-ball"></div>
                    </div>
            </div>
        </div>
        
        <div className="section-padding contact-sec bg-theme">
            <div className="container">
                
                <Contact/>
            </div>
        </div>
        
    </div>
    )
}