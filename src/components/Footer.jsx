import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container text-center">
                <p className="footer-text">
                    © {currentYear} — thanuj.com | Powered by <span className="season-graphix">Season Graphix</span> | All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
