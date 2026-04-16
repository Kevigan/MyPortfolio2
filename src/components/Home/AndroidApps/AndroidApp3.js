import React, { useState } from 'react';
import Workout_1 from '../../../assets/images/AndroidApps/WorkoutPlanner/Workout1.png';
import Workout_2 from '../../../assets/images/AndroidApps/WorkoutPlanner/Workout2.png';
import Workout_3 from '../../../assets/images/AndroidApps/WorkoutPlanner/Workout3.png';
import Workout_4 from '../../../assets/images/AndroidApps//WorkoutPlanner/Workout4.png';

const AndroidApp3 = () => {
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
                <h1>Workout Planner</h1>
                <p> This Workout Planner app helps users build and organize their fitness routines.
                     You can create custom workout plans—either timed or manual—and easily edit or delete them as your goals evolve.
                </p>
                <p>
                   The app was developed using Kotlin, Android Studio, and Jetpack Compose, focusing on a modern, responsive design and smooth user experience.
                </p>
                <ul>
                    <li>Engine: Android Studio</li>
                    <li>Plattform: Android</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/WorkoutPlannerApp.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Workout_1} className={expanded1 ? 'expanded' : 'normal'} alt="Code 1" onClick={() => toggleExpand(1)} />
                    <img src={Workout_2} className={expanded2 ? 'expanded' : 'normal'} alt="Code 2" onClick={() => toggleExpand(2)} />
                    <img src={Workout_3} className={expanded3 ? 'expanded' : 'normal'} alt="Pokemon battle Salandit and politoed" onClick={() => toggleExpand(3)} />
                    <img src={Workout_4} className={expanded4 ? 'expanded' : 'normal'} alt="Battle win politoed" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QsxUcTauCwM"
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

export default AndroidApp3;