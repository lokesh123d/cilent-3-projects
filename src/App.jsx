import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingPlans from './components/PricingPlans';
import CSCServices from './components/CSCServices';
import WhyChooseUs from './components/WhyChooseUs';
import CEOSection from './components/CEOSection';
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGFKv3Q0TqelzVVEbY7a4EHQ30Tm6AWnqpg&s" alt="Logo" className="loader-logo" />
          <div className="loader-text">Gramin Jan Seva Kendra</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CEOSection />
      <CSCServices />
      <Services />
      <PricingPlans />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <ConnectModal />
    </div>
  );
}

export default App;
