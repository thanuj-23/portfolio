import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import certificationsData from '../data/CertificationsData';
import Swal from 'sweetalert2';

const Certifications = () => {
    // Show only first 3 certifications (Newest First)
    const displayedCerts = [...certificationsData].reverse().slice(0, 3);

    // Custom Modal State
    const [showModal, setShowModal] = useState(false);
    const [activeCert, setActiveCert] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleViewCert = (cert) => {
        if (cert.gallery) {
            setActiveCert(cert);
            setCurrentImageIndex(0);
            setShowModal(true);
        } else {
            Swal.fire({
                imageUrl: cert.file,
                imageAlt: cert.title,
                showConfirmButton: false,
                showCloseButton: true,
                background: 'transparent',
                backdrop: 'rgba(0,0,0,0.9)',
                padding: 0,
                customClass: {
                    popup: 'glass-popup-full',
                    image: 'img-fluid rounded'
                },
                width: 'auto',
                maxWidth: '90vw',
                imageWidth: 'auto',
                imageHeight: 'auto',
            });
        }
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (activeCert && activeCert.gallery) {
            setCurrentImageIndex((prev) => (prev + 1) % activeCert.gallery.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (activeCert && activeCert.gallery) {
            setCurrentImageIndex((prev) => (prev - 1 + activeCert.gallery.length) % activeCert.gallery.length);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setActiveCert(null);
    };

    return (
        <section id="certifications" className="certifications-section" data-aos="fade-up">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">CREDENTIALS</span>
                    <h2 className="section-title mt-2">Certifications</h2>
                </div>

                <div className="row g-4 justify-content-center">
                    {displayedCerts.map((cert) => (
                        <div key={cert.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="cert-modern-card">
                                <div className="card-image-wrapper">
                                    <img src={cert.file} alt={cert.title} loading="lazy" />
                                    <div className="card-overlay-gradient"></div>
                                    <div className="card-year-badge">2025</div>
                                    <div className="card-issuer-icon">
                                        <i className="fa-solid fa-medal"></i>
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="card-title">{cert.title}</h4>
                                    <div className="card-issuer-name">{cert.issuer}</div>

                                    <button
                                        className="verify-btn"
                                        onClick={() => handleViewCert(cert)}
                                    >
                                        <i className="fa-solid fa-eye"></i> See Certificate
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="/certifications" className="btn btn-primary see-all-btn">
                        See All Certifications
                    </Link>
                </div>
            </div>

            {/* Custom Carousel Modal */}
            {showModal && activeCert && (
                <div className="custom-modal-overlay" onClick={closeModal}>
                    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="custom-close-btn" onClick={closeModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="modal-header-simple">
                            <h5 className="modal-cert-title">{activeCert.title}</h5>
                            <span className="modal-counter">
                                {currentImageIndex + 1} of {activeCert.gallery.length}
                            </span>
                        </div>

                        <div className="modal-image-container">
                            <button className="nav-btn prev-btn" onClick={prevImage}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>

                            <img
                                src={activeCert.gallery[currentImageIndex]}
                                alt={`Page ${currentImageIndex + 1} `}
                                className="modal-main-image"
                            />

                            <button className="nav-btn next-btn" onClick={nextImage}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
