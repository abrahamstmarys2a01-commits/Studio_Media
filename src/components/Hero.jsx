import React from 'react';

import heroBg from '../assets/custom_hero_bg.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg-anim" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="hero-lights-overlay"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{ color: '#fff' }}>Elevate Your Voice. <br /><span className="highlight" style={{ color: '#00e5ff' }}>Premium Podcast Studio.</span></h1>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Professional video, audio, and audiobook recording in a state-of-the-art environment. Create content that sounds and looks incredible.</p>
                <div className="hero-buttons">
                    <a href="#studios" className="btn btn-primary" style={{ background: '#fff', color: '#000' }}>Explore Studios</a>
                    <a href="#gallery" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>View Gallery</a>
                </div>
                
                <div className="studio-highlights" style={{ color: '#fff' }}>
                    <div className="highlight-item">
                        <i className="fa-solid fa-microphone-lines" style={{ color: '#00e5ff' }}></i>
                        <span>Pro Audio</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-video" style={{ color: '#ff9d00' }}></i>
                        <span>4K Video</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#00e5ff' }}></i>
                        <span>Acoustic Treated</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
