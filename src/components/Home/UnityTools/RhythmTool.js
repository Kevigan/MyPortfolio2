import React, { useState } from 'react';

import RHY_1 from '../../../assets/images/RhythmEditor_1.png';
import RHY_2 from '../../../assets/images/RhythmEditor_12.png';

const RhythmTool = () => {
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
                <h1>Rhythm Editor</h1>
                <p>
                    A custom Unity rhythm editor for creating and managing music-based gameplay events.
                    The tool allows you to create and edit multiple channels, define timing data,
                    and use real-time keyboard input while a song is playing to place events directly on the timeline.
                    This enables fast, intuitive authoring of rhythm-based mechanics and precise synchronization with audio.
                </p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/RhythmEditor" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>

            <div className='game-image-container'>
                <div className='image-grid'>
                    <img
                        src={RHY_1}
                        className={expanded1 ? 'expanded' : 'normal'}
                        alt="Rhythm Editor Timeline"
                        onClick={() => toggleExpand(1)}
                    />
                    <img
                        src={RHY_2}
                        className={expanded2 ? 'expanded' : 'normal'}
                        alt="Channel and Event Editing UI"
                        onClick={() => toggleExpand(2)}
                    />
                </div>

                <div className="video-container">
                    <iframe
                        className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kaadEtB3uSY"
                        title="Rhythm Editor Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default RhythmTool;