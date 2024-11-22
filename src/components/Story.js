import './Story.css';
import Video from '../images/video-habiba.mp4';

const Story = () => {
    return <div className='component my-story'>
        <div className='my-story-text'>
            <h1 className='section-title'>This is my story</h1>
            <p> 
                My name is Billa, I am 19 years old, and I am a designer, photographer and a 
                girl full of dreams from Gaza. I especially love drawing and playing with my little 
                sisters, Fatima and Habiba.
                I also love studying. I had a high average in high school and had just started my 
                university studies at the Faculty of Multimedia Technology when my daily life was 
                swept away along with my house, university and the laptop I used to create my designs.
                Despite the unspeakable difficulties, I have continued tirelessly to document what I 
                am experiencing in Gaza, continuing to publish content created exclusively with my 
                smartphone.
                Although my dream remains to be able to start studying again, learn many languages, 
                get a degree and become a freelance designer, my commitment today is to survive and 
                help my family.
            </p>
        </div>
        <div className='my-story-video'>
        <video src={Video} loop autoPlay muted />
        </div>   
        </div>
}

export default Story;