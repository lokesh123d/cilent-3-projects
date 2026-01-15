import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Premier & Affordable Online Services
                    </div>

                    <h1 className="hero-title">
                        <span className="gradient-text">Digital Marketing</span>
                        <br />
                        & Jan Seva Kendra
                    </h1>

                    <p className="hero-description">
                        Grow your business with WhatsApp & SMS Marketing. Your trusted partner for government services,
                        banking, and digital growth.
                        <br />
                        <strong>Serving Banda, Uttar Pradesh.</strong>
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number gradient-text">10,000+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">50+</div>
                            <div className="stat-label">Services</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">24/7</div>
                            <div className="stat-label">Support</div>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <a href="#pricing" className="btn btn-primary">
                            <span>View Pricing Plans</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Us
                        </a>
                    </div>

                    <div className="hero-contacts">
                        <div className="contact-item">
                            <img src="https://img.icons8.com/fluency/96/phone.png" alt="Phone" className="contact-icon-img" />
                            <div>
                                <div className="contact-label">Call / WhatsApp</div>
                                <a href="tel:7607033877" className="contact-value">7607033877</a>
                                <a href="tel:9369794580" className="contact-value">9369794580</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-card card-1">
                        <img src="https://img.icons8.com/fluency/96/whatsapp.png" alt="WhatsApp Marketing" className="card-icon-img" />
                        <div className="card-title">WhatsApp Marketing</div>
                        <div className="card-stats">
                            <span>15,000 SMS</span>
                            <span className="gradient-text">₹3,150</span>
                        </div>
                    </div>

                    <div className="visual-card card-2">
                        <img src="https://img.icons8.com/fluency/96/services.png" alt="CSC Services" className="card-icon-img" />
                        <div className="card-title">CSC Services</div>
                        <div className="card-stats">
                            <span>PAN, Aadhaar, Bills</span>
                            <span className="gradient-text">All Services</span>
                        </div>
                    </div>

                    <div className="visual-card card-3">
                        <img src="https://img.icons8.com/fluency/96/sent.png" alt="Bulk SMS" className="card-icon-img" />
                        <div className="card-title">Bulk SMS</div>
                        <div className="card-stats">
                            <span>1 Lakh SMS</span>
                            <span className="gradient-text">₹12,000</span>
                        </div>
                    </div>

                    <div className="floating-icons">
                        <img src="https://img.icons8.com/fluency/96/megaphone.png" alt="Marketing" className="social-icon" style={{ animationDelay: '0s' }} />
                        <img src="https://img.icons8.com/fluency/96/graph.png" alt="Analytics" className="social-icon" style={{ animationDelay: '0.5s' }} />
                        <img src="https://img.icons8.com/fluency/96/rupee.png" alt="Payment" className="social-icon" style={{ animationDelay: '1s' }} />
                        <img src="https://img.icons8.com/fluency/96/bullseye.png" alt="Target" className="social-icon" style={{ animationDelay: '1.5s' }} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
