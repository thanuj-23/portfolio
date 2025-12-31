import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import certificationsData from '../data/CertificationsData';
import Swal from 'sweetalert2';

const AllCertifications = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [certifications, setCertifications] = useState([...certificationsData].reverse());

    // Custom Modal State
    const [showModal, setShowModal] = useState(false);
    const [activeCert, setActiveCert] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Initial load animation 
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = certificationsData.filter(cert =>
            cert.title.toLowerCase().includes(term) ||
            cert.issuer.toLowerCase().includes(term) ||
            cert.description.toLowerCase().includes(term)
        );
        setCertifications(filtered);
    };

    const handleLike = (id) => {
        setCertifications(prevCerts => prevCerts.map(cert => {
            if (cert.id === id) {
                return { ...cert, likes: cert.likes + 1, liked: true };
            }
            return cert;
        }));
    };

    const handleComment = (id) => {
        Swal.fire({
            title: 'Add a Comment',
            input: 'text',
            inputPlaceholder: 'Type your comment here...',
            showCancelButton: true,
            confirmButtonText: 'Post',
            customClass: {
                popup: 'glass-popup',
                input: 'glass-input'
            },
            background: '#0d1117',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                setCertifications(prevCerts => prevCerts.map(cert => {
                    if (cert.id === id) {
                        return { ...cert, comments: [...cert.comments, result.value] };
                    }
                    return cert;
                }));
                Swal.fire({
                    icon: 'success',
                    title: 'Comment Posted!',
                    timer: 1500,
                    showConfirmButton: false,
                    background: '#0d1117',
                    color: '#fff'
                });
            }
        });
    };

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
                background: 'transparent', // Make background transparent to focus on image
                backdrop: 'rgba(0,0,0,0.9)', // Darker backdrop
                padding: 0,
                customClass: {
                    popup: 'glass-popup-full', // Optional custom class if needed, or reuse
                    image: 'img-fluid rounded'
                },
                width: 'auto', // Auto width to fit image aspect ratio or max width
                maxWidth: '90vw', // 90% of viewport width
                imageWidth: 'auto', // Natural width constrained by popup
                imageHeight: 'auto', // Natural height
                // Allow styling via CSS to ensure max-height: 90vh
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

    const handleClear = () => {
        setSearchTerm('');
        setCertifications(certificationsData);
    };

    return (
        <div className="all-certifications-page">
            {/* Header */}
            <header className="cert-header">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <Link to="/" className="back-btn">
                        <i className="fa-solid fa-arrow-left"></i> Back to Home
                    </Link>
                    <h2 className="text-white m-0">All Certifications</h2>
                    <div className="header-spacer d-none d-md-block" style={{ width: '100px' }}></div>
                </div>
            </header>

            <div className="container mt-3">
                <div className="d-flex justify-content-end">
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1rem' }}>
                        Total Certifications: {certificationsData.length}
                    </span>
                </div>
            </div>

            <div className="container py-5">
                {/* Search Bar */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8">
                        <div className="search-wrapper">
                            <i className="fa-solid fa-search search-icon"></i>
                            <input
                                type="text"
                                className="form-control search-input"
                                placeholder="Search certifications by title, issuer, or keyword..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            {searchTerm && (
                                <i className="fa-solid fa-xmark search-clear-icon" onClick={handleClear}></i>
                            )}
                        </div>
                    </div>
                </div>

                {/* Certifications Grid (Modern Style) */}
                <div className="row">
                    {certifications.length > 0 ? (
                        certifications.map(cert => (
                            <div key={cert.id} className="col-md-6 col-lg-4 mb-4">
                                <div className="cert-modern-card fade-in-up">
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
                        ))
                    ) : (
                        <div className="col-12 text-center text-muted py-5">
                            <i className="fa-regular fa-folder-open fa-3x mb-3"></i>
                            <h3>No certifications found</h3>
                            <p>Try searching for something else.</p>
                        </div>
                    )}
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
                                alt={`Page ${currentImageIndex + 1}`}
                                className="modal-main-image"
                            />

                            <button className="nav-btn next-btn" onClick={nextImage}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllCertifications;
