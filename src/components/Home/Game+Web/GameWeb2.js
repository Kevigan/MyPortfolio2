import React, { useState } from 'react';
import Login_1 from '../../../assets/images/Login_1.jpg';
import Login_2 from '../../../assets/images/Login_2.jpg';
import Login_3 from '../../../assets/images/Login_3.jpg';
import Login_4 from '../../../assets/images/Login_4.jpg';

const GameWeb2 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);
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
                <h1>Project Login</h1>
                <p>I created a player login for the game.
                </p>
                <p>
                    I used Unity and C# for the client side.
                </p>
                <p>For the server side i used javascript executed in Node.js.
                    The web server is built using the Express framework.
                    I used the PostgreSQL database for storing the data with the pg-library.
                    Additionally i used PgAdmin.</p>
                <p>For making the password more secure, i am hashing it using bcrypt.</p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Plattform: PC</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/Pokemon-Login.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Login_1} className={expanded1 ? 'expanded' : 'normal'} alt="Login panel" onClick={() => toggleExpand(1)} />
                    <img src={Login_2} className={expanded2 ? 'expanded' : 'normal'} alt="Succesful loged in" onClick={() => toggleExpand(2)} />
                    <img src={Login_3} className={expanded3 ? 'expanded' : 'normal'} alt="Create player panel" onClick={() => toggleExpand(3)} />
                    <img src={Login_4} className={expanded4 ? 'expanded' : 'normal'} alt="PG Admin tables" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/hhCpir2SN2k"
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

export default GameWeb2;