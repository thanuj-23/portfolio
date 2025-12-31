import React from 'react';

const reviews = [
    {
        id: 1,
        name: "Matthew G.",
        country: "United States",
        flag: "fa-flag-usa",
        image: "/images/client-fiverr-2.png",
        stars: 5,
        rating: "5.0",
        text: "Extremely satisfied with the final result! Thanuj delivered exactly what was promised, with great attention to detail and excellent communication throughout the process.",
        date: "Published 4 months ago",
        type: "image"
    },
    {
        id: 2,
        name: "sonialamb",
        country: "United Kingdom",
        flag: "fa-flag",
        avatarLetter: "S",
        avatarColor: "#f5c0c0",
        avatarTextColor: "#5f2a2a",
        stars: 4,
        rating: "4.0",
        text: "Nice simple branded backgrounds that I can use on zoom calls with different logo formats, really pleased with end images.",
        date: "Published 5 months ago",
        type: "initial"
    },
    {
        id: 3,
        name: "stevepikor",
        country: "United States",
        flag: "fa-flag-usa",
        image: "/images/client-steve.png",
        stars: 5,
        rating: "5.0",
        text: "Awesome service! Thank you.",
        date: "Published 6 months ago",
        type: "image"
    },
    {
        id: 4,
        name: "michael_g1",
        country: "United States",
        flag: "fa-flag-usa",
        avatarLetter: "M",
        avatarColor: "#d4f5dd",
        avatarTextColor: "#2d7a46",
        stars: 5,
        rating: "5.0",
        text: "Dilshan created beautiful Zoom backgrounds that perfectly aligned with our brand. He was incredibly responsive to feedback and quickly implemented our suggestions. A pleasure to work with—highly recommended!",
        date: "Published 7 months ago",
        type: "initial"
    },
    {
        id: 5,
        name: "mikekonig",
        country: "United States",
        flag: "fa-flag-usa",
        image: "/images/client-mike.png",
        stars: 5,
        rating: "5.0",
        text: "Great job. Will use again.",
        date: "Published 2 years ago",
        type: "image"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section py-5" data-aos="fade-up">
            <div className="container-fluid">
                <div className="text-center mb-4">
                    <div className="section-label">Testimonials</div>
                </div>
                <h2 className="text-center mb-5">Client <span className="highlight">Feedback</span></h2>

                <div className="testimonials-slider">
                    <div className="testimonials-track">
                        {/* Duplicate the reviews 3 times to create a seamless loop */}
                        {[...reviews, ...reviews, ...reviews].map((review, index) => (
                            <div className="testimonial-slide" key={`${review.id}-${index}`}>
                                <div className="testimonial-card h-100">
                                    <div className="fiverr-review-header">
                                        {review.type === 'image' ? (
                                            <div className="reviewer-img">
                                                <img src={review.image} alt={review.name} />
                                            </div>
                                        ) : (
                                            <div className="reviewer-img initial-avatar" style={{ background: review.avatarColor, color: review.avatarTextColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', border: 'none' }}>
                                                {review.avatarLetter}
                                            </div>
                                        )}
                                        <div className="reviewer-info">
                                            <h4>{review.name}</h4>
                                            <div className="reviewer-meta">
                                                <span className="country"><i className={`fa-solid ${review.flag}`}></i> {review.country}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-body">
                                        <div className="stars mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`fa-${i < review.stars ? 'solid' : 'regular'} fa-star`}></i>
                                            ))}
                                            <span className="rating-num">{review.rating}</span>
                                        </div>
                                        <p className="testimonial-text">
                                            "{review.text}"
                                        </p>
                                        <span className="review-date">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
