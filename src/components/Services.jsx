import React from 'react';
import Swal from 'sweetalert2';

const Services = () => {
    const handleReadMore = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Contact Me',
            text: 'Contact me for more details',
            background: 'rgba(22, 27, 34, 0.9)',
            backdrop: `rgba(0,0,0,0.4)`,
            color: '#fff',
            confirmButtonColor: '#0a84ff',
            iconColor: '#0a84ff',
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }
        });
    };

    return (
        <section id="services" className="my-services py-5" data-aos="fade-up">
            <div className="container">
                <div className="text-center mb-4">
                    <div className="section-label">What I Do</div>
                </div>
                <h2 className="text-center mb-5">My <span className="highlight">Services</span></h2>
                <div className="row justify-content-center">
                    {/* Service 1 */}
                    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-card glass p-4">
                            <div className="service-icon">
                                <i className="bi bi-code-slash"></i>
                            </div>
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-description">
                                I offer high-quality web development services, creating responsive and interactive websites tailored to clients' needs.
                            </p>
                            <a href="#" className="btn btn-secondary" onClick={handleReadMore}>Read More</a>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card glass p-4">
                            <div className="service-icon">
                                <i className="bi bi-pencil-fill"></i>
                            </div>
                            <h3 className="service-title">Graphic Design</h3>
                            <p className="service-description">
                                With a creative touch, I provide graphic design services to enhance the visual appeal of websites and digital content.
                            </p>
                            <a href="#" className="btn btn-secondary" onClick={handleReadMore}>Read More</a>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card glass p-4">
                            <div className="service-icon">
                                <i className="bi bi-bar-chart-line-fill"></i>
                            </div>
                            <h3 className="service-title">Digital Marketing</h3>
                            <p className="service-description">
                                I offer digital marketing solutions to help businesses increase their online presence and reach a wider audience.
                            </p>
                            <a href="#" className="btn btn-secondary" onClick={handleReadMore}>Read More</a>
                        </div>
                    </div>

                    {/* Service 4 - Security */}
                    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-card glass p-4">
                            <div className="service-icon">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3 className="service-title">Cyber Security</h3>
                            <p className="service-description">
                                Ensuring digital safety with vulnerability assessments, penetration testing, and secure coding practices for robust applications.
                            </p>
                            <a href="#" className="btn btn-secondary" onClick={handleReadMore}>Read More</a>
                        </div>
                    </div>

                    {/* Service 5 - UI/UX Design */}
                    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-card glass p-4">
                            <div className="service-icon">
                                <i className="fa-solid fa-layer-group"></i>
                            </div>
                            <h3 className="service-title">UI/UX Design</h3>
                            <p className="service-description">
                                Crafting intuitive and visually appealing user interfaces with a focus on seamless user experience and modern aesthetics.
                            </p>
                            <a href="#" className="btn btn-secondary" onClick={handleReadMore}>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
