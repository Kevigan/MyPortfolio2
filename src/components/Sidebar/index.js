import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import K_logo from '../../assets/images/K_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={K_logo} alt='logo' />
            <p className='my-name'>Gilligan</p>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='navLogo'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skill-link" to="/skills">
                <FontAwesomeIcon icon={faChartSimple} color="#4d4d4e" className='navLogo' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" className='navLogo' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className='navLogo' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/kev-gil-690a93225/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
           
        </ul>
    </div>
);

export default Sidebar;