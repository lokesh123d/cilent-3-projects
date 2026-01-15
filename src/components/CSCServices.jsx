import React from 'react';
import './CSCServices.css';

const CSCServices = () => {
    const serviceCategories = [
        {
            title: 'Banking Services',
            icon: 'https://img.icons8.com/fluency/96/bank.png',
            services: [
                'Instant Account Opening',
                'Aadhar ATM / Cash Withdrawal',
                'Balance Inquiry',
                'Money Transfer (DMT)',
                'Mobile/DTH Recharge'
            ]
        },
        {
            title: 'Government Services',
            icon: 'https://img.icons8.com/fluency/96/museum.png',
            services: [
                'PAN Card Application',
                'Aadhar Card Services',
                'Voter ID Card',
                'Ration Card',
                'Income / Caste / Domicile Certificate'
            ]
        },
        {
            title: 'Utility Services',
            icon: 'https://img.icons8.com/fluency/96/receipt.png',
            services: [
                'Electricity Bill Payment',
                'Water Bill Payment',
                'Gas Bill Payment',
                'Insurance Premium',
                'Loan EMI Payment'
            ]
        },
        {
            title: 'Digital Services',
            icon: 'https://img.icons8.com/fluency/96/domain.png',
            services: [
                'Digital Signature',
                'E-Passport',
                'Driving License',
                'Vehicle Registration',
                'PDF/PPT/MS Word Creation'
            ]
        },
        {
            title: 'Educational Services',
            icon: 'https://img.icons8.com/fluency/96/book.png',
            services: [
                'Online Form Filling',
                'Scholarship Applications',
                'Certificate Verification',
                'Distance Education Enrollment',
                'Exam Form Submission'
            ]
        },
        {
            title: 'Business Services',
            icon: 'https://img.icons8.com/fluency/96/business.png',
            services: [
                'GST Registration',
                'FSSAI License',
                'Trade License',
                'Udyog Aadhaar',
                'Company Registration'
            ]
        }
    ];

    const popularServices = [
        'Instant Bank Account Opening',
        'Aadhaar Cash Withdrawal',
        'Third Party Deposit',
        'Passbook Printing',
        'Jeevan Pramaan (Life Cert)',
        'Aadhar Seeding',
        'Cheque Book Request',
        'Bank Statement Print',
        'RuPay Debit Card Apply',
        'PF Online Services',
        'LIC Premium Deposit'
    ];

    return (
        <section className="csc-services" id="csc">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        CSC Services
                    </div>
                    <h2>
                        Rural Online <span className="gradient-text">Public Service Center</span>
                    </h2>
                    <p className="section-description">
                        Banda Digital Agency - Bank of Baroda (Customer Service Point)
                        <br />
                        All types of online government and banking services available!
                    </p>
                </div>

                <div className="csc-grid">
                    {serviceCategories.map((category, index) => (
                        <div
                            key={index}
                            className="csc-category card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="category-header">
                                <img src={category.icon} alt={category.title} className="category-icon-img" />
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <ul className="category-services">
                                {category.services.map((service, i) => (
                                    <li key={i}>
                                        <img src="https://img.icons8.com/fluency/16/checkmark.png" alt="check" />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="popular-services">
                    <h3>Other Popular Services</h3>
                    <div className="services-list">
                        {popularServices.map((service, index) => (
                            <div
                                key={index}
                                className="service-tag"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="csc-features">
                    <div className="feature-item">
                        <img src="https://img.icons8.com/fluency/96/flash-on.png" alt="Fast" className="feature-icon-img" />
                        <div className="feature-content">
                            <h4>Instant Service</h4>
                            <p>Fast processing and instant activation</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="https://img.icons8.com/fluency/96/verified-badge.png" alt="Verified" className="feature-icon-img" />
                        <div className="feature-content">
                            <h4>100% Authentic</h4>
                            <p>Government authorized CSC center</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="https://img.icons8.com/fluency/96/lock.png" alt="Secure" className="feature-icon-img" />
                        <div className="feature-content">
                            <h4>Secure & Safe</h4>
                            <p>Your data is completely protected</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="https://img.icons8.com/fluency/96/money.png" alt="Price" className="feature-icon-img" />
                        <div className="feature-content">
                            <h4>Best Pricing</h4>
                            <p>Competitive rates for all services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CSCServices;
