import React from 'react';

const About = () => {
    return (
        <section id="about" className="hero-container" style={{ display: 'block', padding: '6rem 10%' }}>
            <div className="about-container-column">
                <div data-aos="fade-up">
                    <div className="section-label">Who am I</div>
                    <h1>Who is <span className="highlight-text">Thanuj Thilakarathne?</span></h1>
                    <p className="about-bio">
                        I am currently an undergraduate at SLIIT, specializing in Cyber Security.
                        My journey is defined by a passion for continuous learning and skill development
                        within the security landscape. Beyond my core focus, I possess a versatile skill
                        set that includes UI/UX Design, Graphic Design, Web Development, and Digital Marketing.
                        I am dedicated to moving forward in the industry by constantly seeking new
                        knowledge and refining my expertise to solve complex digital challenges.
                    </p>
                </div>



                {/* Education Section (Full Width Card) */}
                <div className="education-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="edu-icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className="edu-content">
                        <span className="edu-label">EDUCATION</span>
                        <h4>Undergraduate student at SLIIT</h4>
                    </div>
                </div>

                {/* Contact & Button Row */}
                <div className="about-contact-row" data-aos="fade-up" data-aos-delay="300">
                    <div className="contact-info-group">
                        <div className="about-contact-item">
                            <label>LOCATION</label>
                            <span>Sri Lanka</span>
                        </div>
                        <div className="about-contact-item">
                            <label>EMAIL</label>
                            <span>hello@itsthanuj.com</span>
                        </div>
                    </div>

                    <div className="cv-btn-wrapper">
                        <a href="/cv.pdf" download="Thanuj Thilakarathne CV.pdf" className="btn btn-primary">
                            Download CV <i className="fa-solid fa-download" style={{ marginLeft: '8px' }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
