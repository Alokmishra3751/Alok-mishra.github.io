import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Style from './portfolio.css';

// const Label = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   borderBottomLeftRadius: 0,
//   borderBottomRightRadius: 0,
// }));

export default function ImageMasonry() {
  return (
    <Box>
      <Masonry columns={3} spacing={1}>
        {itemData.map((item) => (
          <div className="item-wrapper">
            <div className="desc-wrap">
              <h4 className="text-white">{item.title}</h4>
              <a href={item.url} className="btn btn-secondary white">View More</a>
            </div>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',                
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
   {
    img: './img/gym.png',
    title: 'Fit2Fine - Gym Fitness Website',
    url:'https://www.templatemonsterpreview.com/demo/223266.html',
    
  },
   {
    img: './img/Hotel-book.png',
    title: 'Toor - Travel  Booking React Website',
    url:'https://www.templatemonsterpreview.com/demo/224084.html',
    
  },
  {
    img: './img/netfilms-react.png',
    title: 'Netfilms - movie-streaming , web app',
    url:'https://netfilms-58a99.web.app/',
    desc:'Movie Streaming web app build with react js'
  },
  
  {
    img: '/img/expox-banner.png',
    title: 'Expox - Multipurpose , Business & Portfolio',
    url:'https://themeforest.net/item/expox-multipurpose-html5-template/24977900',
    desc:'Expox  Template is a modern corporate template, designed for a variety of businesses &amp; web projects. It has almost every sections and feature that a service-based website would need.  '
  },
   {
    img: '/img/grocery-store.png',
    title: 'FuudStuff - Grocery Shop react website',
    url:'https://www.templatemonsterpreview.com/demo/224215.html',
    
  },
  {
    img: './img/farmtopia-banner.png',
    title: 'Farmtopia - E-Stores & Agriculture',
    url:'http://slidesigma.com/themes/html/Farmtopia/',
    desc:'Farmtopia  is a classic farm and shop based  template, designed for a variety of farm products &amp; online shops. It has almost every sections and feature that a farm-based website would need.'
  },
  {
    img: './img/fire.png',
    title: 'Squad -  Safety Security Website',
    url:'http://www.templatemonsterpreview.com/demo/176537.html',
    
  },
  
  {
    img: './img/tcb.png',
    title: 'thecreativesblock - Multimedia , Portfolio , Entertainment & Studio',
    url:'http://thecreativesblock.in/',
    desc:'The Creative’s Block embraces the art of digital cinema to amplify your message and establish valuable connections with your target audience.'
  },
  {
    img: './img/AI.png',
    title: 'Roboto - AI and IT Startup Agency Template',
    url:'https://www.templatemonsterpreview.com/demo/223269.html',
   
  },
  {
    img: './img/GCC.png',
    title: 'Greenchickchopindia - Food , E-store & E-shop',
    url:'https://greenchickchopindia.com/',
    desc:'Real, fresh, and hygienic meat and seafood available in Green Chick Chop stores or delivered at your doorsteps, along with the condiments.'
  },
  
  {
    img: './img/canadaonline.png',
    title: 'onlineclassescanada - Portfolio & Information',
    url:'http://onlineclassescanada.info/',
    desc:'Onlineclassescanada  offers teachers an efficient way to deliver lessons to students. Online learning has a number of tools such as videos, PDFs, podcasts, and teachers can use all these tools as part of their lesson'
  }
 
 
  
];
