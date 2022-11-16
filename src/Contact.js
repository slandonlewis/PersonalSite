import './App.css';
import github from './github.png'
import gmail from './gmail.png'
import linkedin from './linkedin.png'
import imessage from './imessage.png'

function copyContactInfo(info) {
    navigator.clipboard.writeText(info)
}

function ContactInfo() {
    return (<>
        <footer>
            <h2>Let's Get In Touch!</h2>
            <p>Clicking LinkedIn or GitHub will redirect you to my profile pages. Clicking Gmail or iMessage will copy my email address or phone number to your clipboard.</p>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/seth-lewis-27a007245/" target="blank">
                    <img className="icon" src={linkedin} height={150} width={150}></img>
                </a>
                <a href="https://github.com/slandonlewis" target="blank">
                    <img className="icon" src={github} height={150} width={150}></img>
                </a>
                <img src={gmail} onClick={() => { copyContactInfo("slandonlewis@gmail.com") }} height={150} width={150}></img>
                <img src={imessage} onClick={() => { copyContactInfo("615-489-0523") }} height={150} width={150}></img>
            </div>
        </footer>
    </>
    );
}

export default ContactInfo;
