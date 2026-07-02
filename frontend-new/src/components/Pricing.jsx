import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="section">
            <div className="section-header">
                <h2>Pricing Plans</h2>
                <p>Transparent pricing for creators at any stage.</p>
            </div>
            
            <div className="pricing-grid">
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <div className="price">₹999<span>/hr</span></div>
                    <ul className="features">
                        <li><i className="fa-solid fa-check text-green"></i> 2 Cameras</li>
                        <li><i className="fa-solid fa-check text-green"></i> 2 Microphones</li>
                        <li><i className="fa-solid fa-check text-green"></i> Standard Lighting</li>
                        <li><i className="fa-solid fa-check text-green"></i> Water provided</li>
                        <li className="disabled"><i className="fa-solid fa-xmark"></i> Editing / Engineer</li>
                    </ul>
                    <a href="#booking" className="btn btn-outline w-100">Choose Starter</a>
                </div>

                <div className="pricing-card popular">
                    <div className="popular-badge">Most Popular</div>
                    <h3>Professional</h3>
                    <div className="price">₹1999<span>/hr</span></div>
                    <ul className="features">
                        <li><i className="fa-solid fa-check text-green"></i> 4 Cameras</li>
                        <li><i className="fa-solid fa-check text-green"></i> 4 Microphones</li>
                        <li><i className="fa-solid fa-check text-green"></i> Advanced Lighting & LED</li>
                        <li><i className="fa-solid fa-check text-green"></i> Dedicated Engineer</li>
                        <li><i className="fa-solid fa-check text-green"></i> Basic Video Editing (Reels)</li>
                    </ul>
                    <a href="#booking" className="btn btn-primary w-100">Choose Pro</a>
                </div>

                <div className="pricing-card">
                    <h3>Premium</h3>
                    <div className="price">₹4999<span>/day</span></div>
                    <ul className="features">
                        <li><i className="fa-solid fa-check text-green"></i> Full Day Access (8 hrs)</li>
                        <li><i className="fa-solid fa-check text-green"></i> Unlimited Recording</li>
                        <li><i className="fa-solid fa-check text-green"></i> Professional Editor</li>
                        <li><i className="fa-solid fa-check text-green"></i> BTS Photographer</li>
                        <li><i className="fa-solid fa-check text-green"></i> Snacks & Beverages</li>
                    </ul>
                    <a href="#booking" className="btn btn-outline w-100">Choose Premium</a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
