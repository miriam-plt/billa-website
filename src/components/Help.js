import './Help.scss';
import HelpPhoto from '../images/photo-help.jpg'

const Help = () => {
    return <div className='help'>
        <h1>Why we need help</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.</p>
            <a href="https://www.gofundme.com/f/aiutateci-ad-evacuare-questa-famiglia-da-gaza" target="_blank" rel="noreferrer">
                <button>Make a donation</button>
            </a>
            <div className='help-img'>
                    <img src={HelpPhoto} alt='help' className='help-photo'/>
            </div>
        </div>
}

export default Help;