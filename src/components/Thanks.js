import './Thanks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import ThanksPhoto from '../images/photo-thanks.jpg';

const Thanks = () => {
    return <div className='thank-you'>
            
            <div className='thanks-img'>
                <img src={ThanksPhoto} alt='thank you' className='thanks-photo'/>
            </div>

            <div>
                <h1 className='section-title'>Thank you!</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor
                sit amet.</p>
                <p>Don't forget to follow me for updates</p>
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
        </div>
}

export default Thanks;