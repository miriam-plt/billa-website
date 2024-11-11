import './DonationButton.scss';
import Logo from '../images/button-donation.png';

const Button = () => {
    return <div className='donation-button'>
            <a href="https://www.gofundme.com/f/aiutateci-ad-evacuare-questa-famiglia-da-gaza" target="_blank" rel="noreferrer"> <img src={Logo} alt='Donation Button' className='donation-button-logo'></img> </a>
    </div>
}

export default Button;