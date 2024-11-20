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
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum.</p>
            </div>
        </div>
    </div>
}

export default Family;