import React, { useState } from 'react';
import Permalist_1 from '../../../assets/images/Permalist_1.jpg';
import Permalist_2 from '../../../assets/images/Permalist_2.jpg';
import Permalist_3 from '../../../assets/images/Permalist_3.jpg';
import Permalist_4 from '../../../assets/images/Permalist_4.jpg';
import Postgres_Icon2 from '../../../assets/images/PostgreSQL_Icon2.png';

const Web7 = () => {
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
                <h1>TODO list</h1>
                <ul>
                    <li>This project is a Todo List application that uses PostgreSQL as the database backend, managed with pgAdmin for database administration. It allows users to create, update, and delete tasks efficiently.</li>
                    <li style={{ listStyle: 'none', marginBottom: '50px' }}></li>
                    <li>Github link: <a href="https://github.com/Kevigan/PermalistProject.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Permalist_1} className={expanded1 ? 'expanded' : 'normal'} alt="Input for todo list" onClick={() => toggleExpand(1)} />
                    <img src={Permalist_2} className={expanded2 ? 'expanded' : 'normal'} alt="PG Admin table" onClick={() => toggleExpand(2)} />
                    <img src={Permalist_3} className={expanded3 ? 'expanded' : 'normal'} alt="Code 1" onClick={() => toggleExpand(3)} />
                    <img src={Permalist_4} className={expanded4 ? 'expanded' : 'normal'} alt="Code 2" onClick={() => toggleExpand(4)} />
                </div>
                <div class="pic-container">
                    <img src={Postgres_Icon2} alt="Game 4" />
                </div>
            </div>
        </div>
    );
};

export default Web7;