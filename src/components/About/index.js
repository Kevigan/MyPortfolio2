import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import MyPic from '../../assets/images/MyPic.jpg';
import AustraliaIcon from '../../assets/images/australiaIcon.png'
import GamingIcon from '../../assets/images/gamingIcon.png'
import NewZealandIcon from '../../assets/images/newZealandIcon.png'
import ProgrammingIcon from '../../assets/images/programmingIcon.png'
import GymIcon from '../../assets/images/gymIcon.png'
import BerlinIcon from '../../assets/images/berlinIcon.png'
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>I'm a 36-year-old living in Berlin. Before moving here, I worked as an electrician. At 27, I decided to travel,
                        spending six months in New Zealand. A year after returning to Germany, I embarked on another six-month adventure in Australia. </p>
                    <p>Upon returning, I relocated to Berlin and chose to pivot my career by diving into programming.
                        My passion for it led me to enroll at the Mediadesign Hochschule (MD.H) in Berlin, where I completed my Bachelor's degree in Game Design in April 2024.</p>
                    <p>In my free time, I enjoy programming, gaming, and learning new things, such as different programming languages. I also like going to the gym to stay fit.</p>
                </div>

                <div>
                    <img className='self-portrait' src={MyPic} alt='me' />
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <img className='cube-image' src={AustraliaIcon} alt='cube' />
                        </div>
                        <div className='face2'>
                            <img className='cube-image' src={GamingIcon} alt='cube' />
                        </div>
                        <div className='face3'>
                            <img className='cube-image' src={ProgrammingIcon} alt='cube' />
                        </div>
                        <div className='face4'>
                            <img className='cube-image' src={NewZealandIcon} alt='cube' />
                        </div>
                        <div className='face5'>
                            <img className='cube-image' src={GymIcon} alt='cube' />
                        </div>
                        <div className='face6'>
                            <img className='cube-image' src={BerlinIcon} alt='cube' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;