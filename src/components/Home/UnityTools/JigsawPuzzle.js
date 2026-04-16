import React, { useState } from 'react';

import JIG_1 from '../../../assets/images/Jigsaw_1.png';
import JIG_2 from '../../../assets/images/Jigsaw_2.png';

const JigsawPuzzle = () => {
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
                <h1>Jigsaw Puzzle</h1>
                <p>
                    A runtime jigsaw puzzle system for Unity.
                    It lets you generate PuzzleData from an image in the editor, then spawn and play the puzzle at runtime with dragging, snapping, grouping, progress events, and puzzle completion detection.
                </p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/JigsawPuzzle" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>

            <div className='game-image-container'>
                <div className='image-grid'>
                    <img
                        src={JIG_1}
                        className={expanded1 ? 'expanded' : 'normal'}
                        alt="Jigsaw Puzzle Editor"
                        onClick={() => toggleExpand(1)}
                    />
                    <img
                        src={JIG_2}
                        className={expanded2 ? 'expanded' : 'normal'}
                        alt="Jigsaw Puzzle Runtime"
                        onClick={() => toggleExpand(2)}
                    />
                </div>

                <div className="video-container">
                    <iframe
                        className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/4Qt54O7qmdw"
                        title="Jigsaw Puzzle Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default JigsawPuzzle;