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
      speed: 800,
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
                 <p>Designing and construction of websites which meets the user expectations and their needs.</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={designIco}/></span>
               <div className="inner">
                 <h4>Creative Design</h4>
                 <p>Creation of visual compositions to solve problems and communicate ideas through typography, imagery, color and form.</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={caseIco}/></span>
               <div className="inner">
                 <h4>R&D Case Studies</h4>
                 <p>Case Study examining the product development of Products, including innovation and identifying consumer needs.</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={planIco}/></span>
               <div className="inner">
                 <h4>Strategic Planning</h4>
                 <p>Writing or developing the content, developing the information architecture, navigational aids, visual design of the site</p>
               </div>
            </div>
          </div>
          <div>
            <div className="Item">
               <span class="icon"><img src={brandIco}/></span>
               <div className="inner">
                 <h4>Brand Identity</h4>
                 <p>visible elements of a brand, such as color, design, and logo, that identify and distinguish the brand in consumers' minds.</p>
               </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}