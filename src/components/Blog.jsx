import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/BlogData';
import './Blog.css';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page" style={{ paddingTop: '30px', minHeight: '100vh', paddingBottom: '50px' }}>
            {/* Header */}
            <div className="container d-flex justify-content-between align-items-center mb-4">
                <Link to="/" className="back-btn" style={{ fontSize: '1rem', color: 'var(--text-color)' }}>
                    <i className="fa-solid fa-arrow-left"></i> Back to Home
                </Link>
                <h2 className="blog-title m-0" style={{ fontSize: '2rem' }}>Security Writeups</h2>
                <div className="d-none d-md-block" style={{ width: '130px' }}></div>
            </div>

            <div className="container">
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
