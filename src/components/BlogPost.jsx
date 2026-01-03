import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import blogData from '../data/BlogData';
import './Blog.css';

const BlogPost = () => {
    // ... existing hook ...
    const { id } = useParams();
    const post = blogData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

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
        <div className="blog-page" style={{ paddingTop: '80px', minHeight: '100vh' }}>
            {/* Header */}
            <header className="cert-header mb-5">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <Link to="/blog" className="back-btn">
                        <i className="fa-solid fa-arrow-left"></i> Back to Blog
                    </Link>
                    <div className="header-spacer d-none d-md-block" style={{ width: '100px' }}></div>
                </div>
            </header>

            <article className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="glass-card p-4 p-md-5 mb-5">
                            <h1 className="text-white mb-3 text-center">{post.title}</h1>

                            <div className="d-flex justify-content-center align-items-center mb-4 text-muted">
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
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
