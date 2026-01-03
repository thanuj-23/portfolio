import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import blogData from '../data/BlogData';
import './Blog.css';

import FloatingSubscribeBtn from './FloatingSubscribeBtn';

const BlogPost = () => {
    // ... existing hook ...
    const { id } = useParams();
    const post = blogData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (post) {
            // ...
        }
    }, [id, post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // ... existing renderContent ...
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => {
            // ...
        });
    };

    return (
        <div className="blog-page" style={{ paddingTop: '0px', minHeight: '100vh' }}>
            <FloatingSubscribeBtn />

            {/* Header */}
            <header className="cert-header mb-3">
                <div className="container d-flex justify-content-between align-items-center" style={{ paddingTop: '10px', paddingBottom: '1.5rem' }}>
                    <div className="d-flex align-items-center">
                        <Link to="/blog" className="back-btn mr-3">
                            <i className="fa-solid fa-arrow-left"></i> Back to Blog
                        </Link>
                    </div>
                    <div className="header-spacer d-none d-md-block" style={{ width: '100px' }}></div>
                </div>
            </header>

            <article className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="glass-card p-4 p-md-5 mb-5">
                            <h1 className="text-white mb-3 text-center">{post.title}</h1>

                            <div className="d-flex justify-content-center align-items-center mb-4" style={{ color: '#ccc' }}>
                                <span className="mr-3"><i className="fa-regular fa-user mr-1"></i> {post.author}</span>
                                <span className="mx-3">|</span>
                                <span className="mr-3"><i className="fa-regular fa-calendar mr-1"></i> {post.date}</span>
                                <span className="mx-3">|</span>
                                <span className="mr-3"><i className="fa-solid fa-tag mr-1"></i> {post.category}</span>
                            </div>



                            <img
                                src={post.image}
                                alt={post.title}
                                className="img-fluid rounded mb-4 w-100"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />

                            <div className="blog-content">
                                {renderContent(post.content)}
                            </div>

                            {/* Tags Display */}
                            {post.keywords && (
                                <div className="mt-5 pt-4 border-top border-secondary">
                                    <h5 className="text-white mb-3" style={{ fontSize: '1rem', opacity: 0.8 }}>Related Topics:</h5>
                                    <div className="d-flex flex-wrap">
                                        {post.keywords.map((keyword, index) => (
                                            <span key={index} className="badge bg-dark border border-secondary text-light me-2 mb-2 p-2" style={{ fontWeight: 'normal', opacity: 0.8 }}>
                                                #{keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
