import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [msgClass, setMsgClass] = useState('hidden');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, message };

        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            const result = await res.json();
            
            if (res.ok) {
                setStatusMsg(result.message);
                setMsgClass('msg-box msg-success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error(result.message || 'Sending failed');
            }
        } catch (err) {
            console.error(err);
            setStatusMsg('Error: Could not connect to the server.');
            setMsgClass('msg-box msg-error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="section-header">
                <h2>Get in Touch</h2>
                <p>Have questions? We'd love to hear from you.</p>
            </div>
            
            <div className="contact-grid">
                <div className="contact-info">
                    <div className="info-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Location</h4>
                            <p>123 Creative Street, Studio District, City 40001</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>hello@studiomediawave.com</p>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <a href="#" className="social-btn whatsapp"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
                        <a href="#" className="social-btn instagram"><i className="fa-brands fa-instagram"></i> Instagram</a>
                    </div>

                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.242784534125!2d77.584346!3d12.919864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150009cda557%3A0xc3cf9365e6484e56!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="200" style={{border:0, borderRadius: '12px', marginTop: '20px'}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <form id="contact-form" className="contact-form glass-panel" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" id="c-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" id="c-email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea id="c-message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    {statusMsg && <div id="contact-msg" className={msgClass}>{statusMsg}</div>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
