import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section-modern py-5" data-aos="fade-up">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">CONTACT</span>
                    <h2 className="contact-headline mt-3">
                        GET IN TOUCH<br />
                    </h2>
                </div>

                <div className="row g-5">
                    {/* Left Column: Text & Socials */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="py-2"> {/* Wrapper for vertical balancing */}
                            <p className="contact-text mb-5">
                                Secure. Creative. Impactful. Let's work together to build your next big project with confidence.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="https://github.com/thanuj-23" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <i className="fa-brands fa-github"></i> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/thanujthilakarathne/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Email Card */}
                    <div className="col-lg-6">
                        <div className="email-card">
                            <div className="mb-2">
                                <label className="email-label">
                                    <i className="fa-solid fa-circle" style={{ fontSize: '6px', color: '#2ea043' }}></i> EMAIL
                                </label>
                                <a href="mailto:hello@itsthanuj.com" className="email-link">
                                    hello@itsthanuj.com
                                </a>
                            </div>
                            <a href="mailto:hello@itsthanuj.com" className="get-in-touch-btn">
                                <i className="fa-regular fa-envelope me-2"></i> GET IN TOUCH
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
