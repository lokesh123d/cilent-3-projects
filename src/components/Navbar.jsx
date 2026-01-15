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
                        <span className="icon-letter">B</span>
                    </div>
                    <div className="brand-text">
                        <h3 className="brand-name gradient-text">Banda Digital</h3>
                        <p className="brand-tagline">Marketing & Jan Seva Kendra</p>
                    </div>
                </div>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('services')}>Services</li>
                    <li onClick={() => scrollToSection('pricing')}>Pricing</li>
                    <li onClick={() => scrollToSection('csc')}>CSC Services</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>

                <div className="navbar-actions">
                    <a href="tel:7607033877" className="btn btn-primary">
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
