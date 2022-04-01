import React, { Component } from "react";
import Slider from "react-slick";
import brandIco from './img/icons/brand.png';
import planIco from './img/icons/plan.png';
import caseIco from './img/icons/case.png';
import designIco from './img/icons/design.png';
import webIco from './img/icons/web.png';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay:true,
      dots:false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
           
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          
          <div>
            <div className="Item">
               <span class="icon"><img src={webIco}/></span>
               <div className="inner">
                 <h4>Web Development</h4>
                 <p>Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. ..</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={designIco}/></span>
               <div className="inner">
                 <h4>Creative Design</h4>
                 <p>Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. ..</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={caseIco}/></span>
               <div className="inner">
                 <h4>Case Studies</h4>
                 <p>Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. ..</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={planIco}/></span>
               <div className="inner">
                 <h4>Strategic Planning</h4>
                 <p>Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. ..</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={brandIco}/></span>
               <div className="inner">
                 <h4>Brand Identity</h4>
                 <p>Building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. ..</p>
               </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}