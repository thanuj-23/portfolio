const projectsData = [
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
        description: "We are pleased to share the completion of a comprehensive cybersecurity risk assessment conducted for The UVA VEC PVT LTD. Our objective was to evaluate the security posture of the organization’s SaaS ecosystem-including their recruitment, lead generation, and marketing platforms-which utilize modern frameworks like Next.js, React, and Firebase.<br/><br/>Utilizing industry-standard frameworks such as NIST SP 800-30, ISO/IEC 27005, and the OCTAVE approach, we performed an in-depth analysis of threats and vulnerabilities. We identified several critical areas for improvement, most notably the absence of Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA), as well as significant financial risks stemming from missing API rate-limiting policies.<br/><br/>Beyond identifying technical gaps like insecure PII storage in Google Drive and external network exposures, we developed a strategic three-phase implementation roadmap. This plan prioritizes immediate high-impact controls, such as enforcing strong password policies and MFA, followed by long-term objectives like migrating to secure VPS hosting and achieving full GDPR compliance. We also conducted cybersecurity awareness training for the staff to mitigate the human risk associated with phishing and credential sharing.<br/><br/>This project was a rewarding experience in applying theoretical risk management principles to solve real-world business challenges, ensuring that The UVA VEC PVT LTD can support sustainable growth while protecting its critical data assets.<br/><br/>Team members -<br/><a href=\"https://www.yasithliyanage.com/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-color); text-decoration: none;\">Yasith Liyanage</a> | Hansanee Dharmasena | Kusal Savinda<br/><br/><span style=\"color: var(--accent-color);\">#CyberSecurity #RiskManagement #InformationSecurity #NIST #ISO27001 #SLIIT #SaaS #DataProtection #TheUVAVEC</span>",
        image: "/images/uvavec-1.jpg",
        gallery: [
            "/images/uvavec-1.jpg",
            "/images/uvavec-2.jpg"
        ],
        link: "#"
    }
];

export default projectsData;
