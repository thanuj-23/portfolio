import React from 'react';

const skillsData = [
    {
        category: "Cyber Security",
        icon: "fa-solid fa-shield-halved",
        items: [
            { name: "Ethical Hacking", level: "30%" },
            { name: "Network Security", level: "40%" },
            { name: "Vulnerability Assessment", level: "45%" },
            { name: "Penetration Testing", level: "42%" },
            { name: "Security Auditing", level: "30%" }
        ]
    },
    {
        category: "Frontend Development",
        icon: "fa-brands fa-react",
        items: [
            { name: "React.js", level: "50%" },
            { name: "JavaScript (ES6+)", level: "88%" },
            { name: "HTML5 & CSS3", level: "95%" },
            { name: "Bootstrap / Tailwind", level: "40%" },
            { name: "Responsive Design", level: "95%" }
        ]
    },
    {
        category: "Backend & Database",
        icon: "fa-solid fa-server",
        items: [
            { name: "Node.js", level: "45%" },
            { name: "Python", level: "80%" },
            { name: "SQL", level: "80%" },
            { name: "API Development", level: "40%" }
        ]
    },
    {
        category: "Tools & Platforms",
        icon: "fa-solid fa-screwdriver-wrench",
        items: [
            { name: "Git & GitHub", level: "90%" },
            { name: "Linux / Kali", level: "85%" },
            { name: "Docker", level: "50%" },
            { name: "Burp Suite", level: "70%" },
            { name: "VS Code", level: "95%" }
        ]
    },
    {
        category: "Design & Creative",
        icon: "fa-solid fa-pen-nib",
        items: [
            { name: "Adobe Photoshop", level: "90%" },
            { name: "Adobe Illustrator", level: "70%" },
            { name: "Adobe Lightroom", level: "70%" },
            { name: "Figma", level: "85%" },
            { name: "Canva", level: "95%" },
            { name: "AI Tools", level: "90%" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section py-5" data-aos="fade-up">
            <div className="container-fluid px-5">
                <div className="text-center mb-5">
                    <span className="section-label">EXPERTISE</span>
                    <h2 className="section-title mt-2">Technical <span className="highlight">Skills</span></h2>
                    <p className="section-description">
                        A comprehensive toolkit of technologies and methodologies I leverage to build secure and scalable solutions.
                    </p>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5 justify-content-center">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="col" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="skill-category-card h-100">
                                <div className="skill-header">
                                    <div className="skill-icon-box">
                                        <i className={skillGroup.icon}></i>
                                    </div>
                                    <h3 className="skill-cat-title">{skillGroup.category}</h3>
                                </div>

                                <div className="skill-list">
                                    {skillGroup.items.map((item, idx) => (
                                        <div key={idx} className="skill-item">
                                            <div className="skill-info">
                                                <span className="skill-name">{item.name}</span>
                                                <span className="skill-percentage">{item.level}</span>
                                            </div>
                                            <div className="skill-progress-bg">
                                                <div
                                                    className="skill-progress-fill"
                                                    style={{ width: item.level }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
