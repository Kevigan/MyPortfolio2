import React, { useState } from 'react';
import Trivia_1 from '../../../assets/images/AndroidApps/TriviaGameApp/Trivia1.png';
import Trivia_2 from '../../../assets/images/AndroidApps/TriviaGameApp/Trivia2.png';
import Trivia_3 from '../../../assets/images/AndroidApps/TriviaGameApp/Trivia3.png';
import Trivia_4 from '../../../assets/images/AndroidApps/TriviaGameApp/Trivia4.png';

const AndroidApp4 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);

    const toggleExpand = (index) => {
        switch (index) {
            case 1:
                setExpandedImage1(!expanded1);
                break;
            case 2:
                setExpandedImage2(!expanded2);
                break;
            case 3:
                setExpandedImage3(!expanded3);
                break;
            case 4:
                setExpandedImage4(!expanded4);
                break;
            default:
                break;
        }
    };
    return (
        <div className="game-content">
    <div className='description'>
        <h1>Trivia Game</h1>
        <p>
            This Trivia Game app challenges users with multiple-choice questions across various categories. Questions and answers are dynamically fetched from a public API, providing fresh and engaging content each time you play.
        </p>
        <p>
            Built using Kotlin, Android Studio, and Jetpack Compose, the app features smooth transitions, real-time scoring, and a clean UI for a fun and educational experience.
        </p>
        <ul>
            <li>Engine: Android Studio</li>
            <li>Plattform: Android</li>
            <li>Github-Link: <a href="https://github.com/Kevigan/TriviaGameApp.git" target="_blank" rel="noopener noreferrer">Link</a></li>
        </ul>
    </div>
    <div className='game-image-container'>
        <div className='image-grid'>
            <img src={Trivia_1} className={expanded1 ? 'expanded' : 'normal'} alt="Trivia game question screen" onClick={() => toggleExpand(1)} />
            <img src={Trivia_2} className={expanded2 ? 'expanded' : 'normal'} alt="Answer selection screen" onClick={() => toggleExpand(2)} />
            <img src={Trivia_3} className={expanded3 ? 'expanded' : 'normal'} alt="Score summary screen" onClick={() => toggleExpand(3)} />
            <img src={Trivia_4} className={expanded4 ? 'expanded' : 'normal'} alt="Category selection" onClick={() => toggleExpand(4)} />
        </div>
        <div className="video-container">
            <iframe className='video-frame'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mvlQjHVigXI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    </div>
</div>

    );
};

export default AndroidApp4;