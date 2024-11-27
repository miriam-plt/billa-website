import './Help.css';
import HelpPhoto from '../images/photo-help.jpg'


const Help = () => {
    return <div className='component help'>
        <div className='help-text'>
            <h1 className='section-title'>Why we need help</h1>
                <p>I am doing my best to provide my family with some basic necessities, 
                which my father alone can no longer afford due to the high prices. At 
                the moment we all live together in a 4 by 5 metre tent, which is too 
                small for us, but we thank God that we found it. We have lost three 
                houses and have nothing left in northern Gaza. We have been hit 4 times 
                because of the continuous bombing and we have been displaced 9 times. 
                After our homes and lives were destroyed, I found myself having to take 
                care of the rest of my family members and my younger sisters.  
                We live in constant danger and there are children among us who witness 
                the bombing and destruction every day. Their psychological health has 
                become very poor and we are unable to treat them when they fall ill due 
                to the lack of hospitals in the area.
                <p>
                I have the goal of saving my family and building a house for them, 
                any donation is one step closer to realising my dream.
                Here is the breakdown of the funds we are trying to raise: funds for 
                survival inside Gaza (shelter, food, medicine, emergency funds, a new 
                tent in case of displacement); funds for reconstruction after the war 
                (temporary shelter, reconstruction and economic aid for restarting and 
                recovering).
                </p> 
                </p>
                <a href="https://www.gofundme.com/f/aiutateci-ad-evacuare-questa-famiglia-da-gaza" target="_blank" rel="noreferrer">
                    <button className='button'>
                        Make a donation
                        </button>
                </a>   
        </div>
            <div className='help-img'>
                    <img src={HelpPhoto} alt='help' className='help-photo'/>
            </div>
        </div>
}

export default Help;