import Intro_Img from './assets/Intro Image.png';
import LinkedIn_Icon from './assets/linkedin.svg';
import Mail_Icon from './assets/Mail.svg';

export default function Intro(){
    return (
        <>
            <img id='photo' src={Intro_Img}></img>
            <div className="intro">
                <h1 id='name'>Laura Smith</h1>
                <h3 id='job'>Full Stack Developer</h3>
                <p>laurasmith.website</p>
                <div className="btns">
                    <button><img src={Mail_Icon}></img>Email</button>
                    <button id='linkedin-btn'><img src={LinkedIn_Icon} ></img>LinkedIn</button>
                </div>
            </div>
        </>
    );
}