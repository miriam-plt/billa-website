import './Gallery.css';
import Photo1 from '../images/photography/photo01.jpg';
import Photo2 from '../images/photography/photo02.jpg';
import Photo3 from '../images/photography/photo03.jpg';
import Photo4 from '../images/photography/photo04.jpg';
import Photo5 from '../images/photography/photo05.jpg';
import Photo6 from '../images/photography/photo06.jpg';
import Photo7 from '../images/photography/photo07.jpg';
import Photo8 from '../images/photography/photo08.jpg';
import Photo9 from '../images/photography/photo09.jpg';
import Photo10 from '../images/photography/photo10.jpg';
import Photo11 from '../images/photography/photo11.jpg';
import Photo12 from '../images/photography/photo12.jpg';
import Photo13 from '../images/photography/photo13.jpg';
import Photo14 from '../images/photography/photo14.jpg';

const Gallery = () => {
    return <div className='component gallery'>
            <div className='photo-text'>
                <h1 className='section-title'>My photos from life in Gaza</h1>
                <p>I am also passionate about photography and in my photos I try to portray my life in Gaza, 
                looking up to the sky and dreaming of freedom.</p>
            </div>

            <div className='photo-container'>
                <img src={Photo1} alt='' className='photo'/>
                <img src={Photo2} alt='' className='photo'/>
                <img src={Photo3} alt='' className='photo'/>
                <img src={Photo4} alt='' className='photo'/>
                <img src={Photo5} alt='' className='photo'/>
                <img src={Photo6} alt='' className='photo'/>
                <img src={Photo7} alt='' className='photo'/>
                <img src={Photo8} alt='' className='photo'/>
                <img src={Photo9} alt='' className='photo'/>
                <img src={Photo10} alt='' className='photo'/>
                <img src={Photo11} alt='' className='photo'/>
                <img src={Photo12} alt='' className='photo'/>
                <img src={Photo13} alt='' className='photo'/>
                <img src={Photo14} alt='' className='photo'/>
            </div>
    </div>
}

export default Gallery;
