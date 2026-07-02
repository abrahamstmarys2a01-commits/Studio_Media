import React from 'react';

const About = () => {
    return (
        <section id="about" className="section dark-section">
            <div className="about-container">
                <div className="about-content">
                    <h2>Our Story</h2>
                    <p>Studio Media Wave was born out of a passion for high-quality audio and visual storytelling. We realized creators needed a space where they could simply walk in, hit record, and walk out with professional-grade content without worrying about technical setup.</p>
                    
                    <div className="mission-vision">
                        <div className="mv-box">
                            <h3>Mission</h3>
                            <p>To democratize professional content creation by providing accessible, top-tier studio spaces.</p>
                        </div>
                        <div className="mv-box">
                            <h3>Vision</h3>
                            <p>To be the premier creative hub for podcasters, educators, and brands worldwide.</p>
                        </div>
                    </div>

                    <h3>Our Journey (Timeline)</h3>
                    <ul className="timeline">
                        <li>
                            <span className="date">2021</span>
                            <p>Founded the first small studio space.</p>
                        </li>
                        <li>
                            <span className="date">2023</span>
                            <p>Expanded to multi-camera video podcasts.</p>
                        </li>
                        <li>
                            <span className="date">2024</span>
                            <p>Opened Studio B with LED walls and launched post-production services.</p>
                        </li>
                    </ul>
                </div>
                <div className="about-team">
                    <h3>Meet the Team</h3>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&auto=format&fit=crop" alt="Team" />
                            <h4>Alex Mercer</h4>
                            <span>Lead Audio Engineer</span>
                        </div>
                        <div className="team-member">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop" alt="Team" />
                            <h4>Maria Garcia</h4>
                            <span>Creative Director</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
