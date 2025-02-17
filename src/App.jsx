import './App.css';
import EasySteps from './components/EasySteps';
import Elementor from './components/Elementor';
import Header from './components/Header';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import Features from './pages/Features';
import Home from './pages/Home';
import { useRef } from 'react';
import Services from './pages/Services';
import ClientsReview from './components/ClientsReview';
import Footer from './components/Footer';

function App() {

  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsReviewRef = useRef(null);

  const scrollToSection = (ref) =>{
    if(ref.current){
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} homeRef={homeRef} featuresRef={featuresRef} aboutCompanyRef={aboutCompanyRef} servicesRef={servicesRef} clientsReviewRef={clientsReviewRef} />
      <Home refProp={homeRef} />
      <Features refProp={featuresRef} />
      <About />
      <AboutCompany refProp={aboutCompanyRef} />
      <Elementor />
      <EasySteps />
      <Services refProp={servicesRef} />
      <ClientsReview refProp={clientsReviewRef} />
      <Footer />
    </div>
  );
}

export default App;
