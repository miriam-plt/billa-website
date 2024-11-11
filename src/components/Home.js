import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return <div className='header'>
        <header>
            <h1>My name is Billa</h1>
            <p>I'm a designer from Gaza</p>
        </header>
        <div className='social-media-icons'>
            <a href="https://www.instagram.com/eizaabilla/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@_isaabilla_?_t=8qmMlKPznl3&_r=1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.x.com/eizaabilla/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
            </a>
        </div>

    </div>
}

export default Home;