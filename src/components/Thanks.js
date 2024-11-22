import './Thanks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import ThanksPhoto from '../images/photo-thanks.jpg';

const Thanks = () => {
    return <div className='component thank-you'>
            
            <div className='thanks-img'>
                <img src={ThanksPhoto} alt='thank you' className='thanks-photo'/>
            </div>

            <div className='thanks-text'>
                <h1 className='section-title-2'>Thank you!</h1>
                <p>Any form of donation or purchase of my work is of great help to me. Even a dollar can 
                help me and give me a little hope. Your support is extremely important and helps me to 
                keep faith in a better future and humanity. Thank you for listening to my story.
                </p>
                <div className='follow-container'>
                    <p className='follow-text'>Don't forget to follow me for updates</p>
                    <div className='social-media-icons-2'>
                        <a href="https://www.instagram.com/eizaabilla/" target="_blank" rel="noreferrer" className='social-media-icon-2'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.tiktok.com/@_isaabilla_?_t=8qmMlKPznl3&_r=1" target="_blank" rel="noreferrer" className='social-media-icon-2'>
                        <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="https://www.x.com/eizaabilla/" target="_blank" rel="noreferrer" className='social-media-icon-2'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </div>
            </div>
        </div>
        </div>
}

export default Thanks;