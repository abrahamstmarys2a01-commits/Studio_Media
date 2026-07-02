import React from 'react';

const Equipment = () => {
    return (
        <section id="equipment" className="section dark-section">
            <div className="section-header">
                <h2>Pro Equipment</h2>
                <p>We use industry-standard gear to ensure pristine quality.</p>
            </div>
            
            <div className="equipment-grid">
                <div className="equip-card">
                    <div className="icon-box"><i className="fa-solid fa-microphone"></i></div>
                    <h4>Rode PodMic</h4>
                    <p>Broadcast-grade dynamic microphones.</p>
                </div>
                <div className="equip-card">
                    <div className="icon-box"><i className="fa-solid fa-camera"></i></div>
                    <h4>Sony A7IV</h4>
                    <p>Crisp 4K video recording with perfect autofocus.</p>
                </div>
                <div className="equip-card">
                    <div className="icon-box"><i className="fa-solid fa-lightbulb"></i></div>
                    <h4>RGB Lights</h4>
                    <p>Customizable lighting to match your brand vibe.</p>
                </div>
                <div className="equip-card">
                    <div className="icon-box"><i className="fa-solid fa-headphones"></i></div>
                    <h4>Pro Headphones</h4>
                    <p>Zero-latency audio monitoring.</p>
                </div>
                <div className="equip-card">
                    <div className="icon-box"><i className="fa-solid fa-sliders"></i></div>
                    <h4>RodeCaster Pro</h4>
                    <p>Integrated podcast production console.</p>
                </div>
                <div className="equip-card">
                    <div className="icon-box"><i className="fa-solid fa-tv"></i></div>
                    <h4>LED Display</h4>
                    <p>Custom backdrops and branding integration.</p>
                </div>
            </div>
        </section>
    );
};

export default Equipment;
