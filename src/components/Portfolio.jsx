import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "Eazy Ride",
            category: "UI",
            description: "Car rental web platform with vehicle listings, booking system, and user-friendly dashboard.",
            image: "/images/project-eazyride.png",
            link: "#"
        },
        {
            id: 2,
            title: "Speed Travels",
            category: "Web",
            description: "Fully code-based vehicle rental platform allowing customers to easily rent vehicles for their journey.",
            image: "/images/project-speedtravels.png",
            link: "#"
        },
        {
            id: 3,
            title: "Capture The Flag 2025",
            category: "Cyber",
            description: "A custom Cybersecurity CTF room hosted on TryHackMe designed to test penetration testing skills.",
            image: "/images/project-ctf2025-cover.png",
            detailImage: "/images/project-ctf2025-detail.png",
            link: "https://tryhackme.com/jr/capturetheflag2025"
        },
        {
            id: 4,
            title: "AnyTask API Key Leak",
            category: "Cyber",
            description: "Uncovered a critical information disclosure vulnerability on the AnyTask platform. Identified a hardcoded AWS AppSync API key in frontend bundles, enabling unauthenticated access and GraphQL introspection.",
            tools: ["Burp Suite", "CURL", "Nmap", "strings", "grep"],
            image: "/images/project-anytask-cover.png",
            detailImage: "/images/project-anytask-detail.png",
            link: "#"
        },
        {
            id: 5,
            title: "Social Media Graphics",
            category: "Graphic",
            description: "Creative visual content designed for social media campaigns, including travel, healthcare, and finance industries.",
            image: "/images/graphic-1.png",
            gallery: [
                "/images/graphic-1.png",
                "/images/graphic-2.png",
                "/images/graphic-3.png",
                "/images/graphic-4.png",
                "/images/graphic-5.png"
            ],
            link: "https://www.facebook.com/universepixelparadise"
        },
        {
            id: 6,
            title: "Digital Marketing Campaign",
            category: "Marketing",
            description: "Strategic social media marketing campaigns focused on driving sales and engagement. Managed multiple Facebook pages and executed high-conversion ad strategies, generating over 400+ customer conversations and measurable business growth.",
            image: "/images/project-marketing-proof.png",
            detailImage: "/images/project-marketing-proof.png",
            link: "#"
        },
        {
            id: 7,
            title: "A Cybersecurity Risk Assessment for The UVA VEC",
            category: "Cyber",
            description: "We are pleased to share the completion of a comprehensive cybersecurity risk assessment conducted for The UVA VEC PVT LTD. Our objective was to evaluate the security posture of the organization’s SaaS ecosystem-including their recruitment, lead generation, and marketing platforms-which utilize modern frameworks like Next.js, React, and Firebase.<br/><br/>Utilizing industry-standard frameworks such as NIST SP 800-30, ISO/IEC 27005, and the OCTAVE approach, we performed an in-depth analysis of threats and vulnerabilities. We identified several critical areas for improvement, most notably the absence of Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA), as well as significant financial risks stemming from missing API rate-limiting policies.<br/><br/>Beyond identifying technical gaps like insecure PII storage in Google Drive and external network exposures, we developed a strategic three-phase implementation roadmap. This plan prioritizes immediate high-impact controls, such as enforcing strong password policies and MFA, followed by long-term objectives like migrating to secure VPS hosting and achieving full GDPR compliance. We also conducted cybersecurity awareness training for the staff to mitigate the human risk associated with phishing and credential sharing.<br/><br/>This project was a rewarding experience in applying theoretical risk management principles to solve real-world business challenges, ensuring that The UVA VEC PVT LTD can support sustainable growth while protecting its critical data assets.<br/><br/>Team members -<br/>Yasith Liyanage | Hansanee Dharmasena | Kusal Savinda<br/><br/><span style=\"color: var(--accent-color);\">#CyberSecurity #RiskManagement #InformationSecurity #NIST #ISO27001 #SLIIT #SaaS #DataProtection #TheUVAVEC</span>",
            image: "/images/uvavec-1.jpg",
            gallery: [
                "/images/uvavec-1.jpg",
                "/images/uvavec-2.jpg",
                "/images/uvavec-3.jpg",
                "/images/uvavec-4.jpg"
            ],
            link: "#"
        }
    ];

    const filters = ['All', 'Web', 'UI', 'Graphic', 'Marketing', 'Cyber'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const handleProjectClick = (project) => {
        Swal.fire({
            title: `<h3 style="color: #fff; margin-bottom: 10px;">${project.title}</h3>`,
            html: `
                <div style="text-align: left;">
                    <p style="color: #ccc; font-size: 1rem; margin-bottom: 20px;">${project.description}</p>
                    
                    ${project.detailImage ? `
                    <div style="margin-bottom: 20px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                        <img src="${project.detailImage}" alt="${project.title} Detail" style="width: 100%; height: auto; display: block;">
                    </div>
                    ` : ''}

                    ${project.gallery ? `
                    <div style="margin-bottom: 20px;">
                        ${project.gallery.map(img => `
                            <div style="margin-bottom: 10px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                                <img src="${img}" alt="Gallery Image" style="width: 100%; height: auto; display: block;">
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    ${project.tools ? `
                    <div style="margin-bottom: 20px;">
                        <h5 style="color: #fff; font-size: 1rem; margin-bottom: 10px;">Tools Used:</h5>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${project.tools.map(tool => `
                                <span style="
                                    background: rgba(88, 166, 255, 0.1); 
                                    color: var(--accent-color); 
                                    padding: 5px 12px; 
                                    border-radius: 15px; 
                                    font-size: 0.85rem; 
                                    border: 1px solid var(--accent-color);">
                                    ${tool}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    <div style="margin-top: 15px; font-size: 0.9rem; color: var(--accent-color);">
                        <strong>Category:</strong> ${project.category}
                    </div>
                    ${project.link && project.link !== '#' ? `
                    <div style="margin-top: 20px;">
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
                           style="display: inline-block; padding: 10px 20px; background: var(--accent-color); color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                           Visit Project
                        </a>
                    </div>` : ''}
                </div>
            `,
            imageUrl: project.image,
            imageWidth: 600,
            imageHeight: 'auto',
            imageAlt: project.title,
            background: 'rgba(20, 20, 20, 0.95)',
            color: '#fff',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                popup: 'glass-popup animated fadeInDown'
            },
            backdrop: `
                rgba(0,0,0,0.8)
                left top
                no-repeat
            `
        });
    };

    return (
        <section id="portfolio" className="portfolio-section py-5" data-aos="fade-up">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <div className="section-label">Projects</div>
                    <h2 className="section-title mt-2">My Work</h2>
                </div>

                {/* Filter Tabs */}
                <div className="text-center mb-5">
                    <ul className="portfolio-filters p-0 m-0 d-inline-flex list-unstyled flex-wrap justify-content-center">
                        {filters.map((filter) => (
                            <li key={filter} className="mx-2 mb-2">
                                <button
                                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects Grid */}
                <div className="row g-4 justify-content-center">
                    {filteredProjects.map((project) => (
                        <div className="col-lg-4 col-md-6" key={project.id} data-aos="fade-up" data-aos-delay="100">
                            <div
                                className="portfolio-item"
                                onClick={() => handleProjectClick(project)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="portfolio-img-wrapper">
                                    <img src={project.image} alt={project.title} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-content">
                                            {/* Removed Plus Icon as requested */}
                                            <h4 className="portfolio-title">{project.title}</h4>
                                            <span className="portfolio-category">{project.category}</span>
                                        </div>
                                        <div className="portfolio-arrow">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
