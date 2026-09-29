import isoPost from '../blogs/why-startups-need-iso-27701.md?raw';
import ctfPost from '../blogs/how-to-start-playing-ctfs.md?raw';
import sqliPost from '../blogs/understanding-sql-injection.md?raw';

const blogData = [
    {
        id: "start-up",
        title: "Why a Startup Should Care About ISO/IEC 27701",
        author: "Thanuj",
        date: "Jan 15, 2026",
        category: "Data Privacy",
        keywords: ["ISO 27701", "ISO 27001", "Data Privacy", "Startups", "GDPR", "PDPA", "Cybersecurity", "Compliance"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        excerpt: "Understanding data roles (Controller vs. Processor) under ISO/IEC 27701 and why privacy management is a strategic growth engine for early-stage startups.",
        content: isoPost
    },
    {
        id: "getting-started-with-ctfs",
        title: "How to Start Playing CTFs (Capture The Flag)",
        author: "Thanuj",
        date: "Jan 03, 2026",
        category: "Guide",
        keywords: ["CTF", "Capture The Flag", "Cybersecurity", "Hacking for Beginners", "TryHackMe", "HackTheBox"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        excerpt: "Capture The Flag (CTF) competitions are the best way to learn practical cybersecurity skills. Here is a roadmap to get started.",
        content: ctfPost
    },
    {
        id: "basic-sql-injection",
        title: "Understanding SQL Injection (SQLi) for Beginners",
        author: "Thanuj",
        date: "Dec 28, 2025",
        category: "Web Security",
        keywords: ["SQL Injection", "SQLi", "Web Security", "OWASP Top 10", "Database Security", "Ethical Hacking"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        excerpt: "SQL Injection is one of the oldest and most dangerous web vulnerabilities. Learn how it works and how to prevent it.",
        content: sqliPost
    }
];

export default blogData;
