import React, { useState } from 'react';
import PlayerStats1 from '../../../assets/images/playerStats_1.jpg';
import PlayerStats2 from '../../../assets/images/playerStats_2.jpg';
import PlayerStats3 from '../../../assets/images/playerStats_3.jpg';
import PlayerStats4 from '../../../assets/images/playerStats_4.jpg';

const GameWeb3 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);

    const toggleExpand = (index) => {
        switch (index) {
            case 1:
                setExpandedImage1(!expanded1);
                console.log(index);
                break;
            case 2:
                setExpandedImage2(!expanded2);
                console.log(index);
                break;
            case 3:
                setExpandedImage3(!expanded3);
                console.log(index);
                break;
            case 4:
                setExpandedImage4(!expanded4);
                console.log(index);
                break;

        }
    };
    return (
        <div className="game-content">
            <div className='description'>
                <h1>PlayerStats + Achievements</h1>
                <p>Continuing on the Login, I created player stats and a achievement system in combination with a database.
                </p>
                <p>
                    I also made a webpage, where you can view the player stats and sort them.
                </p>
                <p>For the server side i used javascript executed in Node.js.
                The web server is built using the Express framework.
                I used the PostgreSQL database for storing the data with the pg-library.
                Additionally i used PgAdmin.</p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Plattform: PC</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/Pokemon-Login.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={PlayerStats1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={PlayerStats2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={PlayerStats3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={PlayerStats4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AHFJalICVLY"
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

export default GameWeb3;