import React from 'react';
import CountUp from 'react-countup';

const Experience = () => {
    return (
        <section id="experience" className="experience-section" data-aos="fade-up">
            <div className="container">
                <div className="text-center mb-4">
                    <div className="section-label">Experience</div>
                </div>
                <h2 className="text-center mb-5">My <span className="highlight">Work Experience</span></h2>
                <div className="row text-center">
                    {/* Stat 1 */}
                    <div className="col-md-4 exp-item">
                        <div className="exp-icon">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>
                        <h3 className="exp-number">
                            <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />+
                        </h3>
                        <span className="exp-label">Projects Completed</span>
                    </div>

                    {/* Stat 2 */}
                    <div className="col-md-4 exp-item">
                        <div className="exp-icon">
                            <i className="fa-regular fa-face-smile"></i>
                        </div>
                        <h3 className="exp-number">
                            <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce />+
                        </h3>
                        <span className="exp-label">Satisfied Clients</span>
                    </div>

                    {/* Stat 3 */}
                    <div className="col-md-4 exp-item no-border">
                        <div className="exp-icon">
                            <i className="fa-regular fa-calendar-check"></i>
                        </div>
                        <h3 className="exp-number">
                            <CountUp end={5} duration={3} enableScrollSpy scrollSpyOnce />+
                        </h3>
                        <span className="exp-label">Years of Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
