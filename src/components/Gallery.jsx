import React, { useState } from 'react';

import podcast1 from '../assets/gallery_1.png';
import podcast2 from '../assets/podcast_1_1782978594306.png';
import podcast3 from '../assets/podcast_img_3_1782978743911.png';

import interview1 from '../assets/interview_img_1_1782978754549.png';
import interview2 from '../assets/interview_img_2_1782978769133.png';
import interview3 from '../assets/interview_img_3_1782978781179.png';

import youtube1 from '../assets/studio_a.png';
import youtube2 from '../assets/studio_b.png';
import youtube3 from '../assets/youtube_img_1_1782978834609.png';

import reels1 from '../assets/hero_bg.png';
import reels2 from '../assets/custom_hero_bg.png';
import reels3 from '../assets/podcast_img_1_1782978719882.png'; 

const images = [
    // Reels (Custom Image First)
    { src: reels2, categories: ['reels'] },
    // Podcast
    { src: podcast1, categories: ['podcast'] },
    { src: podcast2, categories: ['podcast'] },
    { src: podcast3, categories: ['podcast'] },
    // Interview
    { src: interview1, categories: ['interview'] },
    { src: interview2, categories: ['interview'] },
    { src: interview3, categories: ['interview'] },
    // YouTube
    { src: youtube1, categories: ['youtube'] },
    { src: youtube2, categories: ['youtube'] },
    { src: youtube3, categories: ['youtube'] },
    // Reels
    { src: reels1, categories: ['reels'] },
    { src: reels3, categories: ['reels'] }
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
