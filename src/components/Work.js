import './Work.css';
import MoralCodes from '../images/design-moral-codes.jpg';
import SLess from '../images/design-sless.jpg';
import BillaFrames from '../images/design-billa-frames.jpg';

const Work = () => {
    return <div className='component my-work'>
            <div className='work-text'>
                <h1 className='section-title'>Learn about my work</h1>
                <p>Even from the heart of suffering, my passion for design has never stopped. 
                I have collaborated with artists and designers from all over the world to continue 
                spreading my voice. I am grateful to have met so many creative people willing to use 
                their work to support me. I would especially like to thank Faye Bradley of 
                <a href="https://www.etsy.com/shop/themoralcodesshop/" target="_blank" rel="noreferrer" className='a-link'>
                    The Moral Codes
                </a> 
                and 
                <a href="https://www.s-less.com/" target="_blank" rel="noreferrer" className='a-link'>
                    Samantha De Santos
                </a> 
                for creating stickers to raise money for me, and 
                <a href="https://www.miriampoletti.com/" target="_blank" rel="noreferrer" className='a-link'>
                    Miriam Poletti
                </a> 
                for organising fundraising workshops and programming this website.
                My project Billa Frames is in collaboration with designer 
                <a href="https://www.instagram.com/abdulrahmanhm99/" target="_blank" rel="noreferrer" className='a-link'>
                    Abdulrahman Almasri
                </a> 
                you can find our designs on our instagram page 
                <a href="https://www.instagram.com/billa.frames/" target="_blank" rel="noreferrer" className='a-link'>
                    @billa.frames
                </a> 
                and buy them via private message. Buying my work is a great way to support me during 
                this difficult time. 
                Click on the images to be redirected to the various projects I am currently involved in.</p>
            </div>
            <div className='work-photo-container'>
                <a href="https://www.instagram.com/billa.frames/" target="_blank" rel="noreferrer">
                    <img src={BillaFrames} alt='Billa Frames poster' className='work-photo'/>
                </a>
                <a href="https://www.etsy.com/de-en/listing/1716555615/butterfly-for-billa" target="_blank" rel="noreferrer">
                    <img src={MoralCodes} alt='the Moral Codes sticker' className='work-photo'/>
                </a>
                <a href="https://www.s-less.com/freegraphs/p/franz-kafka-metamorphosis-sticker-1-phj6w" target="_blank" rel="noreferrer">
                    <img src={SLess} alt='S-Less sticker' className='work-photo'/> 
                </a>
                 
            </div>
        </div>
}

export default Work;