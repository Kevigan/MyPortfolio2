import React, { useState } from 'react';

import HEX_1 from '../../../assets/images/HexLevelEditor_1.png';
import HEX_2 from '../../../assets/images/HexLevelEditor_2.png';

const HexLevelEditor = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);

    const toggleExpand = (index) => {
        switch (index) {
            case 1:
                setExpandedImage1(!expanded1);
                break;
            case 2:
                setExpandedImage2(!expanded2);
                break;
            default:
                break;
        }
    };

    return (
        <div className="game-content">
            <div className='description'>
                <h1>Hex Level Editor</h1>
                <p>
                    A custom Unity editor tool for building modular hex-based levels using stacked segments with fully data-driven tile layouts and outer lane systems.
                    It features an interactive grid editor with painting tools and a visual path-drawing system, allowing designers to define movement patterns directly on tiles.
                    Levels can be safely created, edited, and saved via a clean editor/runtime separation pipeline for scalable content creation.
                </p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/HexLevelEditor" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>

            <div className='game-image-container'>
                <div className='image-grid'>
                    <img
                        src={HEX_1}
                        className={expanded1 ? 'expanded' : 'normal'}
                        alt="Hex Level Editor Overview"
                        onClick={() => toggleExpand(1)}
                    />
                    <img
                        src={HEX_2}
                        className={expanded2 ? 'expanded' : 'normal'}
                        alt="Hex Grid Editing"
                        onClick={() => toggleExpand(2)}
                    />
                </div>

                <div className="video-container">
                    <iframe
                        className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/niM9b2glxho"
                        title="Hex Level Editor"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default HexLevelEditor;