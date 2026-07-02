import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <div className="section-header">
                <h2>Client Reviews</h2>
                <p>Don't just take our word for it.</p>
            </div>

            <div className="testimonial-slider">
                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <p className="quote">"Absolutely the best podcast studio I've ever used. The equipment is top-tier and the engineer made us feel right at home."</p>
                    <div className="client">
                        <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="John" />
                        <div>
                            <strong>John Doe</strong>
                            <span>Host, TechTalks</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p className="quote">"A highly professional experience from booking to delivery. The video quality is unmatched and the lighting was perfect."</p>
                    <div className="client">
                        <img src="https://ui-avatars.com/api/?name=Sarah+Smith&background=random" alt="Sarah" />
                        <div>
                            <strong>Sarah Smith</strong>
                            <span>Business Consultant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
