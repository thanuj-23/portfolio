import React from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = React.useState('home');
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Trigger when 30% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setActiveLink(id);
        setIsOpen(false); // Close menu on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav className="navbar">
                <a href="#home" className="logo" style={{ '--i': 1 }}>
                    Thanuj<span>Thilakarathne</span>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

                <ul className={isOpen ? "open" : ""}>
                    <li className="menu-label">MENU</li>
                    <li style={{ '--i': 2 }}>
                        <a
                            href="#about"
                            className={activeLink === 'about' ? 'active' : ''}
                            onClick={(e) => scrollToSection(e, 'about')}
                        >
                            <i className="fa-regular fa-user"></i> ABOUT
                        </a>
                    </li>
                    <li style={{ '--i': 2.5 }}>
                        <a href="/blog">
                            <i className="fa-solid fa-blog"></i> BLOG
                        </a>
                    </li>
                    <li className="dropdown" style={{ '--i': 3 }}>
                        <a href="#" className={['services', 'experience', 'portfolio', 'testimonials'].includes(activeLink) ? 'active' : ''} onClick={(e) => e.preventDefault()}>
                            <i className="fa-solid fa-briefcase"></i> WORK <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: 'auto' }}></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) => scrollToSection(e, 'services')}
                                >
                                    <i className="fa-solid fa-layer-group"></i> Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experience"
                                    onClick={(e) => scrollToSection(e, 'experience')}
                                >
                                    <i className="fa-solid fa-business-time"></i> Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    onClick={(e) => scrollToSection(e, 'portfolio')}
                                >
                                    <i className="fa-solid fa-cube"></i> Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    onClick={(e) => scrollToSection(e, 'testimonials')}
                                >
                                    <i className="fa-regular fa-comment-dots"></i> Testimonials
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li style={{ '--i': 4 }}>
                        <a
                            href="#certifications"
                            className={activeLink === 'certifications' ? 'active' : ''}
                            onClick={(e) => scrollToSection(e, 'certifications')}
                        >
                            <i className="fa-solid fa-certificate"></i> CERTIFICATIONS
                        </a>
                    </li>
                    <li style={{ '--i': 5 }}>
                        <a
                            href="#skills"
                            className={activeLink === 'skills' ? 'active' : ''}
                            onClick={(e) => scrollToSection(e, 'skills')}
                        >
                            <i className="fa-solid fa-code"></i> SKILLS
                        </a>
                    </li>
                    <li style={{ '--i': 6 }}>
                        <a
                            href="#contact"
                            className={activeLink === 'contact' ? 'active' : ''}
                            onClick={(e) => scrollToSection(e, 'contact')}
                        >
                            <i className="fa-regular fa-envelope"></i> CONTACT
                        </a>
                    </li>
                </ul>
                <a href="/cv.pdf" download="Thanuj_CV.pdf" className="cvbtn" style={{ '--i': 8 }}>
                    Download CV <i className="fa-solid fa-download"></i>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
