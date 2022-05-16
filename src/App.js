import logo from './logo.svg';
import './App.css';
import {Rings} from  'react-loader-spinner';

import Header from './Components/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Portfolio from './Components/Portfolio';
import Footer from './Components/footer';
import  { useEffect , useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  
  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
  
    // Wait for 3 seconds
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer)
  }, []);
  

  return isLoading?<div className="Loader"><Rings color="#00BFFF" height={80} width={80} css isLoading={isLoading}/></div>:(
    <div className="App animate__animated animate__fadeIn">
      
      <Header/>
      <ParallaxProvider>
        <Portfolio/>
      </ParallaxProvider>
      <Footer/>
    </div>
  );
}

export default App;
