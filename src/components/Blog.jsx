import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/BlogData';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            {/* Header */}
            <header className="cert-header">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <Link to="/" className="back-btn">
                        <i className="fa-solid fa-arrow-left"></i> Back to Home
                    </Link>
                    <h2 className="text-white m-0">Security Writeups</h2>
                    <div className="header-spacer d-none d-md-block" style={{ width: '100px' }}></div>
                </div>
            </header>

            <div className="container py-5">
                <div className="row">
                    {blogData.map((post) => (
                        <div key={post.id} className="col-md-6 col-lg-4 mb-4">
                            <div className="cert-modern-card fade-in-up" style={{ height: '100%' }}>
                                <div className="card-image-wrapper">
                                    <img src={post.image} alt={post.title} loading="lazy" style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                                    <div className="card-overlay-gradient"></div>
                                    <div className="card-year-badge">{post.category}</div>
                                </div>

                                <div className="card-content d-flex flex-column" style={{ padding: '1.5rem' }}>
                                    <div style={{ color: '#00ffffd1', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                                        <i className="fa-regular fa-calendar" style={{ marginRight: '5px' }}></i> {post.date}
                                    </div>
                                    <h4 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{post.title}</h4>
                                    <p style={{ color: '#ccc', fontSize: '0.9rem', flexGrow: 1 }}>{post.excerpt}</p>

                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="verify-btn mt-3"
                                        style={{ textDecoration: 'none', textAlign: 'center' }}
                                    >
                                        Read Article <i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
