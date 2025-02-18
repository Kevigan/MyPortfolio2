import React, { useState } from 'react';
import FT_1 from '../../../assets/images/familyTracker_1.jpg';
import FT_2 from '../../../assets/images/familyTracker_2.jpg';
import FT_3 from '../../../assets/images/familyTracker_3.jpg';
import FT_4 from '../../../assets/images/familyTracker_4.jpg';
import Postgres_Icon2 from '../../../assets/images/PostgreSQL_Icon2.png';

const Web8 = () => {
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
                <h1>Family Tracker</h1>
                <ul>
                    <li>This App is a family tracker. You can add family members and to which country they have been.</li>
                    <li style={{ listStyle: 'none', marginBottom: '50px' }}></li>
                    <li>Github link: <a href="https://github.com/Kevigan/FamilyTracker.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={FT_1} className={expanded1 ? 'expanded' : 'normal'} alt="Wolrd map" onClick={() => toggleExpand(1)} />
                    <img src={FT_2} className={expanded2 ? 'expanded' : 'normal'} alt="Wolrd map" onClick={() => toggleExpand(2)} />
                    <img src={FT_3} className={expanded3 ? 'expanded' : 'normal'} alt="Creating new member" onClick={() => toggleExpand(3)} />
                    <img src={FT_4} className={expanded4 ? 'expanded' : 'normal'} alt="PG Admin Table" onClick={() => toggleExpand(4)} />
                </div>
                <div class="pic-container">
                    <img src={Postgres_Icon2} alt="Game 4" />
                </div>
            </div>
        </div>
    );
};

export default Web8;