import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-brand">
                    <div className="brand-icon">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGFKv3Q0TqelzVVEbY7a4EHQ30Tm6AWnqpg&s" alt="Gramin Jan Seva Kendra Logo" className="brand-logo-img" />
                    </div>
                    <div className="brand-text">
                        <h3 className="brand-name gradient-text">Gramin Jan Seva Kendra</h3>
                        <p className="brand-tagline">Digital Advertising</p>
                    </div>
                </div>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li onClick={() => scrollToSection('csc')}>Gramin Jan Seva Kendra</li>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('services')}>Services</li>
                    <li onClick={() => scrollToSection('pricing')}>Pricing</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>

                <div className="navbar-actions">
                    <a href="tel:9369794580" className="btn btn-primary">
                        📞 Call Now
                    </a>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
