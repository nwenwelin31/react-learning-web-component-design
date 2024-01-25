
import './App.css';
import Header from './Header';
import Home from './Home';
import Price from './Price';
import Advantages from './Advantages';
import About from './About';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';
import Featureone from './Featureone';
import Featuretwo from './Featuretwo';
import Featurethree from './Featurethree';
import Feedback from './Feedback';
import { useEffect } from 'react';
import Aos from 'aos';


function App() {
  useEffect(()=>{
    Aos.init( {duration:2000, once:'true',})
    
  },[])
  return (
    <>
      <Header></Header>
      <div data-aos="fade-up">
      <Home></Home>
      <Featureone></Featureone>
      <Featuretwo></Featuretwo>
      <Featurethree></Featurethree>
      <Price></Price>
      <Advantages></Advantages>
      <Feedback></Feedback>
      <About></About>
      <News></News>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
