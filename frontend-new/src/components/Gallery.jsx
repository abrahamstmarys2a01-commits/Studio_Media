import React, { useState } from 'react';

import gallery1 from '../assets/gallery_1.png';
import studioA from '../assets/studio_a.png';
import heroBg from '../assets/hero_bg.png';
import studioB from '../assets/studio_b.png';

const images = [
    { src: gallery1, categories: ['podcast'] },
    { src: studioA, categories: ['interview', 'youtube'] },
    { src: heroBg, categories: ['podcast', 'reels'] },
    { src: studioB, categories: ['youtube'] },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=600&auto=format&fit=crop', categories: ['interview'] },
    { src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop', categories: ['reels'] }
];

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [modalImg, setModalImg] = useState(null);

    const filteredImages = images.filter(img => filter === 'all' || img.categories.includes(filter));

    return (
        <section id="gallery" className="section">
            <div className="section-header">
                <h2>Gallery</h2>
                <p>Take a look at the magic happening inside our studios.</p>
            </div>

            <div className="gallery-filters">
                {['all', 'podcast', 'interview', 'youtube', 'reels'].map(f => (
                    <button 
                        key={f}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            <div className="masonry-grid">
                {filteredImages.map((img, idx) => (
                    <div key={idx} className={`masonry-item ${img.categories.join(' ')}`}>
                        <img src={img.src} alt="Gallery" onClick={() => setModalImg(img.src.replace('w=600', 'w=1200'))} />
                    </div>
                ))}
            </div>

            {/* Fullscreen Modal */}
            <div id="gallery-modal" className="modal" style={{ display: modalImg ? 'flex' : 'none' }} onClick={(e) => {
                if (e.target.className === 'modal') setModalImg(null);
            }}>
                <span className="close-modal" onClick={() => setModalImg(null)}>&times;</span>
                {modalImg && <img className="modal-content" id="full-image" src={modalImg} alt="Fullscreen" />}
            </div>
        </section>
    );
};

export default Gallery;
