import React, { useState } from 'react';

import DIA_1 from '../../../assets/images/DialogueSystem_1.png';
import DIA_2 from '../../../assets/images/DialogueSystem_2.png';

const DialogueSystem = () => {
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
                <h1>Dialogue System</h1>
                <p>
                    This is a node-based dialogue system for Unity that allows developers to create dialogue flows visually using a graph editor.
                </p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/DialogueSystem" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>

            <div className='game-image-container'>
                <div className='image-grid'>
                    <img
                        src={DIA_1}
                        className={expanded1 ? 'expanded' : 'normal'}
                        alt="Dialogue Graph Editor"
                        onClick={() => toggleExpand(1)}
                    />
                    <img
                        src={DIA_2}
                        className={expanded2 ? 'expanded' : 'normal'}
                        alt="Dialogue Node Setup"
                        onClick={() => toggleExpand(2)}
                    />
                </div>

                <div className="video-container">
                    <iframe
                        className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wFTqcPDAoMw"
                        title="Dialogue System Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default DialogueSystem;