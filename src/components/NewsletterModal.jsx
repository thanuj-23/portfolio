import React, { useState } from 'react';
import './Blog.css';
import { subscribeToNewsletter } from '../utils/emailService';

const NewsletterModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const result = await subscribeToNewsletter(email);

        if (result.success) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('error');
            setErrorMessage(typeof result.error === 'string' ? result.error : JSON.stringify(result.error));
            // Keep email so they can try again
            console.error("Subscription error");
        }
    };

    return (
        <div className="newsletter-modal-overlay" onClick={onClose}>
            <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>
                    <i className="fa-solid fa-times"></i>
                </button>

                {status === 'success' ? (
                    <div className="text-center py-4">
                        <div className="success-icon mb-3">
                            <i className="fa-regular fa-check-circle" style={{ fontSize: '3rem', color: '#4ade80' }}></i>
                        </div>
                        <h3 className="text-white mb-2">You're Subscribed!</h3>
                        <p className="text-muted mb-4">Thank you for following. You'll receive updates on new security writeups.</p>
                        <button className="btn btn-outline-light" onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-4">
                            <div className="modal-icon-wrapper mb-3">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <h3 className="text-white mb-2">Follow for Updates</h3>
                            <p className="text-muted">Get notified regarding my latest CTF writeups and security research.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {status === 'error' && (
                                <div className="alert alert-danger mb-3 p-2 text-center" style={{ fontSize: '0.9rem', background: 'rgba(220, 53, 69, 0.2)', color: '#ff6b6b', border: '1px solid rgba(220, 53, 69, 0.3)', borderRadius: '8px' }}>
                                    <i className="fa-solid fa-triangle-exclamation mr-1"></i> {errorMessage}
                                </div>
                            )}
                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    className="modal-input"
                                    placeholder="Enter your email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="subscribe-btn" disabled={status === 'submitting'}>
                                {status === 'submitting' ? (
                                    <span><i className="fa-solid fa-spinner fa-spin"></i> Subscribing...</span>
                                ) : (
                                    <span>Subscribe <i className="fa-solid fa-arrow-right ml-2"></i></span>
                                )}
                            </button>
                        </form>
                        <p className="text-center mt-3 mb-0" style={{ fontSize: '0.8rem', color: '#666' }}>
                            <i className="fa-solid fa-lock mr-1"></i> No spam. Unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsletterModal;
