import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import blogData from '../data/BlogData';
import './Blog.css';

import NewsletterModal from './NewsletterModal';

const BlogPost = () => {
    // ... existing hook ...
    const { id } = useParams();
    const post = blogData.find(p => p.id === id);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (post) {
            // Update Page Title
            document.title = `${post.title} - Thanuj's Security Blog`;

            // Update Meta Description
            let metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', post.excerpt);
            } else {
                metaDescription = document.createElement('meta');
                metaDescription.name = "description";
                metaDescription.content = post.excerpt;
                document.head.appendChild(metaDescription);
            }

            // Update Meta Keywords
            if (post.keywords) {
                let metaKeywords = document.querySelector('meta[name="keywords"]');
                if (metaKeywords) {
                    metaKeywords.setAttribute('content', post.keywords.join(', '));
                } else {
                    metaKeywords = document.createElement('meta');
                    metaKeywords.name = "keywords";
                    metaKeywords.content = post.keywords.join(', ');
                    document.head.appendChild(metaKeywords);
                }
            }
        }
    }, [id, post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // ... existing renderContent ...
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-white mt-4 mb-2">{line.replace('### ', '')}</h3>;
            } else if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={index} className="text-white"><strong>{line.replace(/\*\*/g, '')}</strong></p>;
            } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
                return <li key={index} className="text-white ml-4">{line.substring(3)}</li>;
            } else if (line.startsWith('- ')) {
                return <li key={index} className="text-white ml-4">{line.substring(2)}</li>;
            } else if (line.trim() === '') {
                return <br key={index} />;
            } else {
                return <p key={index} style={{ color: '#ccc', lineHeight: '1.6' }}>{line}</p>;
            }
        });
    };

    return (
        <div className="blog-page" style={{ paddingTop: '0px', minHeight: '100vh' }}>
            <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Header */}
            <header className="cert-header mb-3">
                <div className="container d-flex justify-content-between align-items-center" style={{ paddingTop: '10px', paddingBottom: '1.5rem' }}>
                    <div className="d-flex align-items-center">
                        <Link to="/blog" className="back-btn mr-3" style={{ marginRight: '15px' }}>
                            <i className="fa-solid fa-arrow-left"></i> Back to Blog
                        </Link>
                        <button className="btn btn-sm btn-outline-info" onClick={() => setIsModalOpen(true)} style={{ borderRadius: '20px', fontSize: '0.8rem' }}>
                            <i className="fa-solid fa-bell mr-1"></i> Follow
                        </button>
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
