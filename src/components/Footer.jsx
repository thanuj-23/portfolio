import React from 'react';

const Footer = () => {


    return (
        <footer className="site-footer">
            <div className="container text-center">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} — itsthanuj.com | Powered by <a href="https://facebook.com/seasongraphix" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Season Graphix</a> | All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
