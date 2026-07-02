import React from 'react';

import heroBg from '../assets/hero_bg.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Elevate Your Voice. <br /><span className="highlight">Premium Podcast Studio.</span></h1>
                <p>Professional video, audio, and audiobook recording in a state-of-the-art environment. Create content that sounds and looks incredible.</p>
                <div className="hero-buttons">
                    <a href="#studios" className="btn btn-primary">Explore Studios</a>
                    <a href="#gallery" className="btn btn-secondary">View Gallery</a>
                </div>
                
                <div className="studio-highlights">
                    <div className="highlight-item">
                        <i className="fa-solid fa-microphone-lines"></i>
                        <span>Pro Audio</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-video"></i>
                        <span>4K Video</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                        <span>Acoustic Treated</span>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroBg} alt="Premium Podcast Studio" />
            </div>
        </section>
    );
};

export default Hero;
