import React, { useState } from 'react';
import Task_1 from '../../../assets/images/AndroidApps/TaskManager/Task1.png';
import Task_2 from '../../../assets/images/AndroidApps/TaskManager/Task2.png';
import Task_3 from '../../../assets/images/AndroidApps/TaskManager/Task3.png';
import Task_4 from '../../../assets/images/AndroidApps/TaskManager/Task4.png';

const AndroidApp5 = () => {
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
                <h1>Task Manager</h1>
                <p>This Task Manager app allows users to quickly create and delete tasks to stay organized throughout the day. 
                    With a minimal and user-friendly interface, it's designed for fast, hassle-free task tracking and management.
                </p>
                <p>
                   The app was developed using Kotlin, Android Studio, and Jetpack Compose, focusing on a modern, responsive design and smooth user experience.
                </p>
                <ul>
                    <li>Engine: Android Studio</li>
                    <li>Plattform: Android</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/AndroidTaskManager.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Task_1} className={expanded1 ? 'expanded' : 'normal'} alt="Code 1" onClick={() => toggleExpand(1)} />
                    <img src={Task_2} className={expanded2 ? 'expanded' : 'normal'} alt="Code 2" onClick={() => toggleExpand(2)} />
                    <img src={Task_3} className={expanded3 ? 'expanded' : 'normal'} alt="Pokemon battle Salandit and politoed" onClick={() => toggleExpand(3)} />
                    <img src={Task_4} className={expanded4 ? 'expanded' : 'normal'} alt="Battle win politoed" onClick={() => toggleExpand(4)} />
                </div>
            </div>
        </div>
    );
};

export default AndroidApp5;