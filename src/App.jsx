import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingPlans from './components/PricingPlans';
import CSCServices from './components/CSCServices';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConnectModal from './components/ConnectModal';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Banda Digital</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <PricingPlans />
      <CSCServices />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <ConnectModal />
    </div>
  );
}

export default App;
