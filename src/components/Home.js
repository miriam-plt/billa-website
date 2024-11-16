import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return <div className='header'>
        <header className='header-text'>
            <h1 className='header-text-bold'>My name is Billa</h1>
            <p className='header-text-light'>I'm a designer from Gaza</p>
            <div className='social-media-icons'>
            <a href="https://www.instagram.com/eizaabilla/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className='social-media-icon' />
            </a>
            <a href="https://www.tiktok.com/@_isaabilla_?_t=8qmMlKPznl3&_r=1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} className='social-media-icon' />
            </a>
            <a href="https://www.x.com/eizaabilla/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className='social-media-icon' />
            </a>
        </div>

        <FontAwesomeIcon icon={faArrowDownLong} className='arrow-down' />
        </header>  
    </div>
}

export default Home;