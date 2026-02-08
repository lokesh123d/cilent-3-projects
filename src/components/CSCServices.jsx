import React, { useState } from 'react';
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

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [showAllImages, setShowAllImages] = useState(false);

    const galleryImages = [
        {
            src: '/featured-01.jpeg',
            alt: 'CEO at Work',
            title: 'Our Team at Work'
        },
        {
            src: '/featured-02.jpeg',
            alt: 'Team Collaboration',
            title: 'Team Meeting'
        },
        {
            src: '/featured-03.jpeg',
            alt: 'Customer Service',
            title: 'Serving Customers'
        },
        {
            src: '/featured-04.jpeg',
            alt: 'Professional Service',
            title: 'Professional Touch'
        },
        {
            src: '/featured-05.jpeg',
            alt: 'Banking Services',
            title: 'Banking Counter'
        },
        {
            src: '/featured-06.jpeg',
            alt: 'Documentation Work',
            title: 'Office Work'
        },
        {
            src: '/gallery-08.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-09.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-10.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-11.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-12.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-13.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-14.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-15.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-16.jpeg',
            alt: 'Service Image',
            title: 'Our Services'
        },
        {
            src: '/gallery-01.jpeg',
            alt: 'WhatsApp Bulk SMS Service - Pricing Plans',
            title: 'WhatsApp Bulk SMS Service'
        },
        {
            src: '/gallery-02.jpeg',
            alt: 'Gramin Online Jan Seva Kendra - All Services',
            title: 'Jan Seva Kendra Services'
        },
        {
            src: '/gallery-03.jpeg',
            alt: 'Bank of Baroda Customer Service Center',
            title: 'Bank of Baroda CSP'
        }
    ];

    const visibleImages = showAllImages ? galleryImages : galleryImages.slice(0, 6);
    const hiddenCount = galleryImages.length - 6;

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

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

                <div className="gallery-section">
                    <h3>📸 Gallery</h3>
                    <p className="gallery-subtitle">Click on any image to view in full screen</p>
                    <div className="gallery-grid">
                        {visibleImages.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => openLightbox(galleryImages.findIndex(img => img.src === image.src))}
                            >
                                <img src={image.src} alt={image.alt} />
                                <div className="gallery-overlay">
                                    <span className="gallery-zoom-icon">🔍</span>
                                    <span className="gallery-title">{image.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showAllImages && hiddenCount > 0 && (
                        <div className="gallery-view-more">
                            <button 
                                className="view-more-btn"
                                onClick={() => setShowAllImages(true)}
                            >
                                View More (+{hiddenCount} images)
                            </button>
                        </div>
                    )}
                    {showAllImages && (
                        <div className="gallery-view-more">
                            <button 
                                className="view-more-btn"
                                onClick={() => setShowAllImages(false)}
                            >
                                Show Less
                            </button>
                        </div>
                    )}
                </div>

                {/* Lightbox Modal */}
                {lightboxOpen && (
                    <div className="lightbox-overlay" onClick={closeLightbox}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>❮</button>
                            <div className="lightbox-image-container">
                                <img 
                                    src={galleryImages[currentImage].src} 
                                    alt={galleryImages[currentImage].alt} 
                                />
                                <div className="lightbox-caption">
                                    <span className="lightbox-title">{galleryImages[currentImage].title}</span>
                                    <span className="lightbox-counter">{currentImage + 1} / {galleryImages.length}</span>
                                </div>
                            </div>
                            <button className="lightbox-nav lightbox-next" onClick={nextImage}>❯</button>
                        </div>
                    </div>
                )}

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
