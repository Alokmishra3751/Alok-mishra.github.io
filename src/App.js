import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Portfolio from './Components/Portfolio';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <Header/>
      <ParallaxProvider>
      <Portfolio/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
