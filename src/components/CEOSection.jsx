import React from 'react';
import './CEOSection.css';

const CEOSection = () => {
    return (
        <section className="ceo-section" id="about">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        Our Leadership
                    </div>
                    <h2>
                        Meet Our <span className="gradient-text">Founder</span>
                    </h2>
                </div>

                <div className="ceo-content">
                    <div className="ceo-image-wrapper">
                        <div className="ceo-image-container">
                            <img src="/ceo.jpeg" alt="Pushpendra Kumar - CEO" className="ceo-image" />
                            <div className="ceo-image-border"></div>
                        </div>
                        <div className="ceo-social-links">
                            <a href="https://whatsapp.com/channel/0029Vb6KCOXJ3juxGijgOg2f" target="_blank" rel="noopener noreferrer" className="ceo-social-btn">
                                <img src="https://img.icons8.com/fluency/32/whatsapp.png" alt="WhatsApp" />
                            </a>
                            <a href="tel:9369794580" className="ceo-social-btn">
                                <img src="https://img.icons8.com/fluency/32/phone.png" alt="Phone" />
                            </a>
                        </div>
                    </div>

                    <div className="ceo-info">
                        <h3 className="ceo-name">Pushpendra Kumar Rajput</h3>
                        <p className="ceo-title">Founder & CEO</p>
                        <div className="ceo-divider"></div>
                        <p className="ceo-description">
                            Founder and CEO of Gramin Jan Seva Kendra, on a mission to bring digital services to every household in Banda and surrounding areas.
                        </p>
                        <p className="ceo-description">
                            Our goal is to provide affordable and reliable digital marketing services in rural areas. WhatsApp Bulk SMS, Banking Services, and all Government Services at one place.
                        </p>
                        
                        <div className="ceo-stats">
                            <div className="ceo-stat">
                                <span className="stat-number">5000+</span>
                                <span className="stat-label">Happy Customers</span>
                            </div>
                            <div className="ceo-stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Services</span>
                            </div>
                            <div className="ceo-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>

                        <div className="ceo-contact-info">
                            <div className="ceo-contact-item">
                                <img src="https://img.icons8.com/fluency/24/marker.png" alt="Location" />
                                <span>In Front of Head Post Office, Bangalupura, Banda, UP 210001</span>
                            </div>
                            <div className="ceo-contact-item">
                                <img src="https://img.icons8.com/fluency/24/phone.png" alt="Phone" />
                                <span>9369794580</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEOSection;
