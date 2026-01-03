import React, { useState } from 'react';
import NewsletterModal from './NewsletterModal';
import './Blog.css';

const FloatingSubscribeBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                className="floating-subscribe-btn"
                onClick={() => setIsModalOpen(true)}
                title="Subscribe for updates"
                aria-label="Subscribe to newsletter"
            >
                <i className="fa-solid fa-bell"></i>
            </button>

            <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FloatingSubscribeBtn;
