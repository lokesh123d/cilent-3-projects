import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'CSC Services', href: '#csc' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        'WhatsApp Marketing',
        'Bulk SMS Services',
        'Digital Advertising',
        'PAN Card Services',
        'Aadhar Services',
        'Banking Services'
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="footer-brand">
                                <div className="brand-icon">
                                    <span className="icon-letter">B</span>
                                </div>
                                <div className="brand-text">
                                    <h3 className="brand-name gradient-text">Banda Digital</h3>
                                    <p className="brand-tagline">Marketing & Jan Seva Kendra</p>
                                </div>
                            </div>
                            <p className="footer-about">
                                Adopt the best and most affordable digital marketing services.
                                Promote your products & services to every household!
                            </p>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <img src="https://img.icons8.com/fluency/32/phone.png" alt="Phone" className="contact-icon-small" />
                                    <div>
                                        <a href="tel:7607033877">7607033877</a>
                                        <a href="tel:9369794580">9369794580</a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <img src="https://img.icons8.com/fluency/32/marker.png" alt="Location" className="contact-icon-small" />
                                    <p>Opp. Head Post Office, Bangalipura, Banda</p>
                                </div>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a href="#services">{service}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Connect With Us</h4>
                            <p className="footer-text">
                                Follow us on social media for updates and special offers.
                            </p>
                            <div className="footer-socials">
                                <a href="#" className="social-btn" title="WhatsApp">
                                    <img src="https://img.icons8.com/fluency/48/whatsapp.png" alt="WhatsApp" />
                                </a>
                                <a href="#" className="social-btn" title="Facebook">
                                    <img src="https://img.icons8.com/fluency/48/facebook.png" alt="Facebook" />
                                </a>
                                <a href="#" className="social-btn" title="Instagram">
                                    <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />
                                </a>
                                <a href="#" className="social-btn" title="YouTube">
                                    <img src="https://img.icons8.com/fluency/48/youtube-play.png" alt="YouTube" />
                                </a>
                                <a href="#" className="social-btn" title="LinkedIn">
                                    <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />
                                </a>
                                <a href="#" className="social-btn" title="Gmail">
                                    <img src="https://img.icons8.com/fluency/48/gmail.png" alt="Gmail" />
                                </a>
                            </div>
                            <div className="newsletter">
                                <h5>Subscribe to Updates</h5>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Your email" />
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Banda Digital. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#privacy">Privacy Policy</a>
                            <span className="separator">•</span>
                            <a href="#terms">Terms of Service</a>
                            <span className="separator">•</span>
                            <a href="#refund">Refund Policy</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
