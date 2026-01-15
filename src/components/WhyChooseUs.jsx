import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: 'https://img.icons8.com/fluency/96/trophy.png',
            title: 'Best Prices',
            description: 'All services available at the most affordable rates'
        },
        {
            icon: 'https://img.icons8.com/fluency/96/lightning-bolt.png',
            title: 'Fast Service',
            description: 'Instant service delivery and immediate activation'
        },
        {
            icon: 'https://img.icons8.com/fluency/96/medal.png',
            title: '10+ Years Experience',
            description: 'Over 10 years of experience in the market'
        },
        {
            icon: 'https://img.icons8.com/fluency/96/customer-support.png',
            title: '10,000+ Clients',
            description: 'Thousands of satisfied customers across the region'
        },
        {
            icon: 'https://img.icons8.com/fluency/96/security-shield-green.png',
            title: '100% Secure',
            description: 'Your data is completely safe and secure with us'
        },
        {
            icon: 'https://img.icons8.com/fluency/96/clock.png',
            title: '24/7 Support',
            description: 'Customer support always available whenever you need'
        }
    ];

    return (
        <section className="why-choose">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        Why Choose Us
                    </div>
                    <h2>
                        Why <span className="gradient-text">Banda Digital</span> is Your Best Choice
                    </h2>
                    <p className="section-description">
                        Trusted by thousands of businesses across Uttar Pradesh for digital marketing and government services
                    </p>
                </div>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-card glass"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img src={reason.icon} alt={reason.title} className="reason-icon-img" />
                            <h3 className="reason-title">{reason.title}</h3>
                            <p className="reason-description">{reason.description}</p>
                        </div>
                    ))}
                </div>

                <div className="guarantee-section">
                    <div className="guarantee-content">
                        <h3>Our Guarantee</h3>
                        <p>
                            You can send your business details, posters, links, text messages etc. to our WhatsApp Number.
                            <br />
                            <strong>100% satisfaction guaranteed or your money back!</strong>
                        </p>
                    </div>
                    <div className="guarantee-badge">
                        <img src="https://img.icons8.com/fluency/200/guarantee.png" alt="100% Guarantee" className="guarantee-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
