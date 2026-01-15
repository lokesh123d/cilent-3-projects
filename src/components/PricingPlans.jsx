import React, { useState } from 'react';
import './PricingPlans.css';

const PricingPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState('daily');

    const dailyPlans = [
        { sms: '5,000', days: 10, perSms: '0.25', total: '1,250', popular: false },
        { sms: '7,500', days: 15, perSms: '0.24', total: '1,800', popular: true },
        { sms: '10,000', days: 20, perSms: '0.23', total: '2,300', popular: false },
        { sms: '12,500', days: 25, perSms: '0.22', total: '2,750', popular: false },
        { sms: '15,000', days: 30, perSms: '0.21', total: '3,150', popular: false }
    ];

    const bulkPlans = [
        { sms: '30,000', perSms: '0.19', total: '5,700' },
        { sms: '40,000', perSms: '0.18', total: '7,200' },
        { sms: '50,000', perSms: '0.17', total: '8,500', popular: true },
        { sms: '60,000', perSms: '0.16', total: '9,600' },
        { sms: '70,000', perSms: '0.15', total: '9,000' },
        { sms: '80,000', perSms: '0.14', total: '9,800' },
        { sms: '90,000', perSms: '0.13', total: '11,700' },
        { sms: '1,00,000', perSms: '0.12', total: '12,000' }
    ];

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        Pricing Plans
                    </div>
                    <h2><span className="gradient-text">WhatsApp Bulk SMS</span> Service Plans</h2>
                    <p className="section-description">
                        Choose the plan that fits your business needs. Zero setup charges, instant activation!
                    </p>
                </div>

                <div className="plan-toggle">
                    <button
                        className={`toggle-btn ${selectedPlan === 'daily' ? 'active' : ''}`}
                        onClick={() => setSelectedPlan('daily')}
                    >
                        <img src="https://img.icons8.com/fluency/48/calendar.png" alt="Calendar" className="toggle-icon-img" />
                        Daily Plans (Basic)
                    </button>
                    <button
                        className={`toggle-btn ${selectedPlan === 'bulk' ? 'active' : ''}`}
                        onClick={() => setSelectedPlan('bulk')}
                    >
                        <img src="https://img.icons8.com/fluency/48/rocket.png" alt="Rocket" className="toggle-icon-img" />
                        Bulk Plans (Premium)
                    </button>
                </div>

                {selectedPlan === 'daily' && (
                    <div className="pricing-grid">
                        {dailyPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`pricing-card card ${plan.popular ? 'popular' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {plan.popular && <div className="popular-badge">Most Popular</div>}
                                <div className="pricing-header">
                                    <div className="sms-count">{plan.sms}</div>
                                    <div className="sms-label">Total SMS</div>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-tag">
                                        <span className="currency">₹</span>
                                        <span className="amount">{plan.total}</span>
                                    </div>
                                    <ul className="pricing-features">
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            500 SMS per day
                                        </li>
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            {plan.days} days validity
                                        </li>
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            ₹{plan.perSms} per SMS
                                        </li>
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            Instant activation
                                        </li>
                                    </ul>
                                </div>
                                <button className={`pricing-cta btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {selectedPlan === 'bulk' && (
                    <div className="pricing-grid bulk-grid">
                        {bulkPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`pricing-card card ${plan.popular ? 'popular' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {plan.popular && <div className="popular-badge">Best Value</div>}
                                <div className="pricing-header">
                                    <div className="sms-count">{plan.sms}</div>
                                    <div className="sms-label">Total SMS</div>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-tag">
                                        <span className="currency">₹</span>
                                        <span className="amount">{plan.total}</span>
                                    </div>
                                    <ul className="pricing-features">
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            Bulk SMS delivery
                                        </li>
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            ₹{plan.perSms} per SMS
                                        </li>
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            24/7 support
                                        </li>
                                        <li>
                                            <img src="https://img.icons8.com/fluency/24/checkmark.png" alt="check" />
                                            No expiry
                                        </li>
                                    </ul>
                                </div>
                                <button className={`pricing-cta btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="pricing-note">
                    <img src="https://img.icons8.com/fluency/48/note.png" alt="Note" className="note-icon-small" />
                    <p>
                        <strong>Note:</strong> If you have a local contact list, you can provide it.
                        Otherwise, we will promote in your local area using our own verified contact lists.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
