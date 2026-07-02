import React from 'react';

import studioA from '../assets/studio_a.png';
import studioB from '../assets/studio_b.png';

const Studios = () => {
    return (
        <section id="studios" className="section">
            <div className="section-header">
                <h2>Our Studios</h2>
                <p>Designed for creators, professionals, and everyone in between.</p>
            </div>
            
            <div className="studio-grid">
                {/* Studio A */}
                <div className="studio-card">
                    <div className="studio-image">
                        <img src={studioA} alt="Studio A" />
                        <div className="studio-hover-content">
                            <h4>Video Preview & Equipment</h4>
                            <ul className="equip-list">
                                <li><i className="fa-solid fa-microphone"></i> 2x Rode Mics</li>
                                <li><i className="fa-solid fa-camera"></i> 1x 4K Camera</li>
                                <li><i className="fa-solid fa-lightbulb"></i> Key Lighting</li>
                            </ul>
                            <button className="btn btn-sm btn-outline">Watch Preview <i className="fa-solid fa-play"></i></button>
                        </div>
                    </div>
                    <div className="studio-info">
                        <h3>Studio A</h3>
                        <p className="setup-badge">2 Person Setup</p>
                        <div className="price-row">
                            <span className="price">₹999 <span className="unit">/ Hour</span></span>
                            <a href="#booking" className="btn btn-primary btn-sm">Book Now</a>
                        </div>
                    </div>
                </div>

                {/* Studio B */}
                <div className="studio-card">
                    <div className="studio-image">
                        <img src={studioB} alt="Studio B" />
                        <div className="studio-hover-content">
                            <h4>Video Preview & Equipment</h4>
                            <ul className="equip-list">
                                <li><i className="fa-solid fa-microphone"></i> 4x Shure SM7B</li>
                                <li><i className="fa-solid fa-camera"></i> 3x Sony Cameras</li>
                                <li><i className="fa-solid fa-tv"></i> LED Wall Backdrop</li>
                            </ul>
                            <button className="btn btn-sm btn-outline">Watch Preview <i className="fa-solid fa-play"></i></button>
                        </div>
                    </div>
                    <div className="studio-info">
                        <h3>Studio B</h3>
                        <p className="setup-badge">4 Person Setup</p>
                        <div className="price-row">
                            <span className="price">₹1499 <span className="unit">/ Hour</span></span>
                            <a href="#booking" className="btn btn-primary btn-sm">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studios;
