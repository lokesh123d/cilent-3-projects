import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: 'https://img.icons8.com/fluency/96/whatsapp.png',
            title: 'WhatsApp Marketing',
            description: 'Bulk WhatsApp messages with banner/poster sharing. Reach thousands instantly.',
            features: ['Bulk messaging', 'Image/Video sharing', 'Link sharing', 'Contact management']
        },
        {
            icon: 'https://img.icons8.com/fluency/96/sms.png',
            title: 'SMS Services',
            description: 'Professional bulk SMS services for effective marketing campaigns.',
            features: ['500 SMS/day plans', 'Bulk plans available', 'Real-time delivery', 'Affordable rates']
        },
        {
            icon: 'https://img.icons8.com/fluency/96/megaphone.png',
            title: 'Digital Advertising',
            description: 'Promote on Facebook, Instagram, YouTube, Gmail, LinkedIn, Twitter.',
            features: ['Social media ads', 'Google Ads', 'Email marketing', 'Analytics & reporting']
        },
        {
            icon: 'https://img.icons8.com/fluency/96/target.png',
            title: 'Targeted Marketing',
            description: 'Reach your exact audience with location and demographic targeting.',
            features: ['Local targeting', 'Age/Gender filters', 'Interest-based', 'ROI tracking']
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        Our Services
                    </div>
                    <h2>Complete <span className="gradient-text">Digital Marketing</span> Solutions</h2>
                    <p className="section-description">
                        Best and most affordable online digital marketing services.
                        Promote your products & services to every household!
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img src={service.icon} alt={service.title} className="service-icon" />
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="10" fill="url(#gradient)" />
                                            <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            <defs>
                                                <linearGradient id="gradient" x1="0" y1="0" x2="20" y2="20">
                                                    <stop offset="0%" stopColor="#1C4D8D" />
                                                    <stop offset="100%" stopColor="#0F2854" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="service-cta">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="services-note">
                    <img src="https://img.icons8.com/fluency/96/info.png" alt="Info" className="note-icon-img" />
                    <div className="note-content">
                        <h4>Additional Services:</h4>
                        <p>
                            <strong>Audio Recording Call SMS Service</strong> •
                            <strong>Text Number SMS Service</strong> •
                            <strong>Voice Call SMS Service</strong> •
                            <strong>Email Bulk SMS Service (Bulk Plan)</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
