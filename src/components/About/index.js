import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons';
import Edge_3 from '../../assets/images/Edge_3.png';
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
                <p>Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo.
                    Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua.
                    Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur.
                    Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus,
                    dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. </p>
                <p>Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo.
                    Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua.
                    Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur.</p>
                <p>Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo.
                    Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua.
                    Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur.</p>
            </div>

                        
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img className='cube-image' src={Edge_3}/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;