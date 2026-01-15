import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'whatsapp',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = `Hello, My name is ${formData.name}.%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/917607033877?text=${whatsappMessage}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        Contact Us
                    </div>
                    <h2>
                        Get in <span className="gradient-text">Touch</span> With Us
                    </h2>
                    <p className="section-description">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="info-subtitle">Fill up the form and our team will get back to you within 24 hours.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <img src="https://img.icons8.com/fluency/96/phone.png" alt="Phone" className="info-icon-img" />
                                <div className="info-content">
                                    <h4>Phone Numbers</h4>
                                    <a href="tel:7607033877">7607033877</a>
                                    <a href="tel:9369794580">9369794580</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <img src="https://img.icons8.com/fluency/96/marker.png" alt="Location" className="info-icon-img" />
                                <div className="info-content">
                                    <h4>Office Address</h4>
                                    <p>Near Head Post Office (Dakghar)<br />Bangalipura, Banda, Uttar Pradesh</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <img src="https://img.icons8.com/fluency/96/clock.png" alt="Time" className="info-icon-img" />
                                <div className="info-content">
                                    <h4>Working Hours</h4>
                                    <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <img src="https://img.icons8.com/fluency/96/whatsapp.png" alt="WhatsApp" className="info-icon-img" />
                                <div className="info-content">
                                    <h4>WhatsApp</h4>
                                    <a href="https://wa.me/917607033877" target="_blank" rel="noopener noreferrer">
                                        Chat with us on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link" title="WhatsApp">
                                <img src="https://img.icons8.com/fluency/48/whatsapp.png" alt="WhatsApp" />
                            </a>
                            <a href="#" className="social-link" title="Facebook">
                                <img src="https://img.icons8.com/fluency/48/facebook.png" alt="Facebook" />
                            </a>
                            <a href="#" className="social-link" title="Instagram">
                                <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />
                            </a>
                            <a href="#" className="social-link" title="Twitter">
                                <img src="https://img.icons8.com/fluency/48/twitter.png" alt="Twitter" />
                            </a>
                            <a href="#" className="social-link" title="YouTube">
                                <img src="https://img.icons8.com/fluency/48/youtube-play.png" alt="YouTube" />
                            </a>
                            <a href="#" className="social-link" title="LinkedIn">
                                <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Select Service *</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="whatsapp">WhatsApp Marketing</option>
                                <option value="sms">SMS Services</option>
                                <option value="csc">CSC Services</option>
                                <option value="digital">Digital Marketing</option>
                                <option value="other">Other Services</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Tell us about your requirements"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            <span>Send Message</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
