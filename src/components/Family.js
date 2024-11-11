import './Family.scss';
import FamilyPhoto from '../images/photo-family.jpg';

const Family = () => {
    return <div className='my-family'>
        <h1>Meet my family</h1>
            <div className='family'>
                <img src={FamilyPhoto} alt='family' className='family-photo'/>
            </div>
            <div className='family-description'>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.</p>
            </div>
        </div>
}

export default Family;