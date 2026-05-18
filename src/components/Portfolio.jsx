import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import projectsData from '../data/ProjectsData';

const Portfolio = ({ showAll = false }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Web', 'UI', 'Graphic', 'Marketing', 'Cyber'];

    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
                    {displayedProjects.map((project) => (
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

                {!showAll && (
                    <div className="text-center mt-5">
                        <Link to="/projects" className="btn btn-primary see-all-btn">
                            See All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
