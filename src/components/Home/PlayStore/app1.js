import React, { useState } from 'react';
import onlyOne_1 from '../../../assets/images/onlyOne_1.png';
import onlyOne_2 from '../../../assets/images/onlyOne_2.png';
import onlyOne_3 from '../../../assets/images/onlyOne_3.png';

const App1 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);

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
            default:
                break;
        }
    };

    return (
        <div className="game-content">
            <div className='description'>
                <h1>OnlyOne</h1>

                <p>
                    This Chat App allows users to sign in using email or Google
                    authentication and connect with friends through one-on-one or
                    group conversations. It features a responsive interface for
                    real-time messaging and seamless communication.
                </p>

                <p>
                    The app was developed using Kotlin, Android Studio, and
                    Jetpack Compose, focusing on a modern, responsive design
                    and smooth user experience.
                </p>

                <ul>
                    <li>Engine: Android Studio</li>
                    <li>Platform: Android</li>
                    <li>Firebase: Authentication, Realtime Database</li>
                    <li>
                        Play Store Link:{' '}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.onlyone.app&utm_source=emea_Med"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link
                        </a>
                    </li>
                </ul>
            </div>

            <div className='game-image-container'>
                <div className='image-grid three-images'>
                    <img
                        src={onlyOne_1}
                        className={expanded1 ? 'expanded' : 'normal'}
                        alt="OnlyOne screenshot 1"
                        onClick={() => toggleExpand(1)}
                    />
                    <img
                        src={onlyOne_2}
                        className={expanded2 ? 'expanded' : 'normal'}
                        alt="OnlyOne screenshot 2"
                        onClick={() => toggleExpand(2)}
                    />
                    <img
                        src={onlyOne_3}
                        className={expanded3 ? 'expanded' : 'normal'}
                        alt="OnlyOne screenshot 3"
                        onClick={() => toggleExpand(3)}
                    />
                </div>
            </div>
        </div>
    );
};

export default App1;