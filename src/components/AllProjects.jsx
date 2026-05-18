import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';

const AllProjects = () => {
    // Initial load animation 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-projects-page" style={{ backgroundColor: '#0d1117', minHeight: '100vh', paddingBottom: '50px' }}>
            {/* Header */}
            <header className="cert-header" style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '30px' }}>
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <Link to="/" className="back-btn" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-arrow-left"></i> Back to Home
                    </Link>
                    <h2 className="text-white m-0">All Projects</h2>
                    <div className="header-spacer d-none d-md-block" style={{ width: '100px' }}></div>
                </div>
            </header>

            <Portfolio showAll={true} />
        </div>
    );
};

export default AllProjects;
