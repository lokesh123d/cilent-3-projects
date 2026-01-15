import React, { useState } from 'react';
import './ConnectModal.css';

const ConnectModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    });

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const whatsappMessage =
            `*New Inquiry from Website*%0A` +
            `---------------------------%0A` +
            `👤 *Name:* ${formData.name}%0A` +
            `📞 *Phone:* ${formData.phone}%0A` +
            `💼 *Service Interest:* ${formData.service}%0A` +
            `📝 *Message:* ${formData.message || 'No specific message'}%0A` +
            `---------------------------%0A` +
            `Please connect with me!`;

        // Open WhatsApp
        window.open(`https://wa.me/917607033877?text=${whatsappMessage}`, '_blank');

        // Optional: Close modal after sending
        setIsOpen(false);
        setFormData({ name: '', phone: '', service: 'General Inquiry', message: '' });
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <button className="floating-connect-btn" onClick={toggleModal}>
                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" className="btn-icon" />
                <span>Connect with Owner</span>
            </button>

            {/* Modal Overlay */}
            <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => {
                if (e.target.classList.contains('modal-overlay')) toggleModal();
            }}>
                <div className="connect-modal">
                    <div className="modal-header">
                        <h3>
                            <img src="https://img.icons8.com/fluency/32/whatsapp.png" alt="WA" />
                            Connect via WhatsApp
                        </h3>
                        <button className="close-btn" onClick={toggleModal}>&times;</button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="connect-name">Your Name *</label>
                                <input
                                    type="text"
                                    id="connect-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="connect-phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="connect-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your mobile number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="connect-service">Service Interested In</label>
                                <select
                                    id="connect-service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                                    <option value="Bulk SMS">Bulk SMS Services</option>
                                    <option value="Digital Marketing">Digital Marketing Ad</option>
                                    <option value="CSC Service">CSC / Government Service</option>
                                    <option value="Banking Service">Banking / ATM Service</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="connect-message">Message (Optional)</label>
                                <textarea
                                    id="connect-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Any specific requirement?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn submit-btn">
                                <span>Start Verified Chat</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConnectModal;
