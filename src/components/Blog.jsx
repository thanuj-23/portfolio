import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/BlogData';
import './Blog.css';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page" style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '50px' }}>
            {/* Header */}
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <Link to="/" className="back-btn" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <i className="fa-solid fa-arrow-left"></i> Back to Home
                    </Link>
                </div>

                <div className="text-center mb-5 fade-in-up">
                    <h2 className="blog-title">Cybersecurity Research & <br /> CTF Writeups</h2>
                    <p className="blog-subtitle">
                        Exploring the depths of information security, one flag at a time.
                    </p>
                </div>

                <div className="row">
                    {blogData.map((post, index) => (
                        <div key={post.id} className="col-md-6 col-lg-4 mb-4">
                            <div className={`blog-card fade-in-up delay-${index + 1}`}>
                                <div className="blog-image-wrapper">
                                    <img src={post.image} alt={post.title} className="blog-card-image" loading="lazy" />
                                    <div className="blog-category-badge">
                                        <i className="fa-solid fa-tag"></i> {post.category}
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
                                        <span><i className="fa-regular fa-user"></i> {post.author}</span>
                                    </div>

                                    <h4 className="blog-card-title">{post.title}</h4>
                                    <p className="blog-excerpt">{post.excerpt}</p>

                                    <Link to={`/blog/${post.id}`} className="read-more-btn">
                                        Read Article <i className="fa-solid fa-arrow-right"></i>
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
