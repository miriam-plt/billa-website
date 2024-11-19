import './Family.css';
import FamilyPhoto from '../images/photo-family.jpg';

const Family = () => {
    return <div className='my-family'>
        <div>
                <img src={FamilyPhoto} alt='family' className='family-photo'/>
        </div>
        <div className='family-text'>
        <h1 className='section-title'>Meet my family</h1>
            <div className='family-description'>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua..</p>
            </div>
        </div>
    </div>
}

export default Family;