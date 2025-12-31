import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Cybersecurity Expertise ', 'Web Developer', 'Graphic Designer', 'Digital Marketer', 'UI/UX Designer'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            {/* Home/Hero Section */}
            <section id="home" className="hero-container">
                <div className="hero-image hero-image-animation">
                    <img src="/images/thanuj.png" alt="Hero" />
                </div>
                <div className="hero-content hero-content-animation">
                    <h3 style={{ '--i': 1 }}>Hello, I'm </h3>
                    <h1 style={{ '--i': 2 }}>Thanuj Thilakarathne</h1>
                    <h2 style={{ '--i': 3 }}>And I'm a <span ref={el}></span></h2>
                    <p style={{ '--i': 4 }}>
                        Building and protecting digital brands by blending creative web design,
                        marketing strategies, and graphic arts with a strong foundation in cybersecurity.
                    </p>

                    <div className="social-icons" style={{ '--i': 5 }}>
                        <a href="https://tryhackme.com/p/th4nu9Rift"><i className="fa-solid fa-user-secret"></i></a>
                        <a href="https://www.linkedin.com/in/thanujthilakarathne/"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/thanuj-23"><i className='bx bxl-github'></i></a>
                        <a href="https://www.instagram.com/thanuj.23/"><i className="fa-brands fa-square-instagram"></i></a>
                    </div>
                    <div className="hero-btn" style={{ '--i': 6 }}>
                        <a href="https://www.linkedin.com/in/thanujthilakarathne/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Hire Me</a>
                        <a href="mailto:Hello@thanuj.com" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Hero;
