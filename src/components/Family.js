import './Family.css';
import FamilyPhoto from '../images/photo-family.jpg';

const Family = () => {
    return <div className='component my-family'>
        <div>
                <img src={FamilyPhoto} alt='family' className='family-photo'/>
        </div>
        <div className='family-text'>
        <h1 className='section-title'>Meet my family</h1>
            <div className='family-description'>
                <p>I have a large family, which has always given me love and support. 
                I have seven sisters and brothers: my brother Mustafa is 17 years old, 
                my sister Ruqayya is 15 years old, my sister Arwa is 12 years old, 
                my sister Sara is 10 years old, my brother Ahmed is 7 years old, 
                my sister Habeeba is 3 and a half years old, and my sister Fatima 
                is one and a half years old. My siblings and I live with my parents 
                and my dear grandmother. They are my life and I cannot live without 
                them even for a second. 
                </p>
            </div>
        </div>
    </div>
}

export default Family;