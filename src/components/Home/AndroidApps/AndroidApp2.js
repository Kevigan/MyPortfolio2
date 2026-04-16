import React, { useState } from 'react';
import Chat_1 from '../../../assets/images/AndroidApps/ChatApp/Chat1.png';
import Chat_2 from '../../../assets/images/AndroidApps/ChatApp/Chat2.png';
import Chat_3 from '../../../assets/images/AndroidApps/ChatApp/Chat3.png';
import Chat_4 from '../../../assets/images/AndroidApps/ChatApp/Chat4.png';

const AndroidApp2 = () => {
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
                <h1>Chat App</h1>
                <p>This Chat App allows users to sign in using email or Google authentication and connect with friends through one-on-one or group conversations.
                    It features a responsive interface for real-time messaging and seamless communication.
                </p>
                <p>
                   The app was developed using Kotlin, Android Studio, and Jetpack Compose, focusing on a modern, responsive design and smooth user experience.
                </p>
                <ul>
                    <li>Engine: Android Studio</li>
                    <li>Plattform: Android</li>
                    <li>Firebase: Authentication, Realtime Database</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/ChatApp_One.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Chat_1} className={expanded1 ? 'expanded' : 'normal'} alt="Code 1" onClick={() => toggleExpand(1)} />
                    <img src={Chat_2} className={expanded2 ? 'expanded' : 'normal'} alt="Code 2" onClick={() => toggleExpand(2)} />
                    <img src={Chat_3} className={expanded3 ? 'expanded' : 'normal'} alt="Pokemon battle Salandit and politoed" onClick={() => toggleExpand(3)} />
                    <img src={Chat_4} className={expanded4 ? 'expanded' : 'normal'} alt="Battle win politoed" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jS9vEwaNni8"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        mozallowfullscreen
                        oallowfullscreen
                        msallowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default AndroidApp2;