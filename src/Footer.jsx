import Instagram_Icon from './assets/Instagram Icon.png';
import Github_Icon from './assets/GitHub Icon.svg';
import Twitter_Icon from './assets/Twitter Icon.svg';
import Facebook_Icon from './assets/Facebook Icon.svg';
import './style.css';

export function Footer(){
    return (
        <div className='social-btns'>
            <img src={Twitter_Icon}></img>
            <img src={Facebook_Icon}></img>
            <img src={Instagram_Icon}></img>
            <img src={Github_Icon}></img>
        </div>
    );
}