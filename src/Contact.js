import './App.css';
import github from './github.png'
import gmail from './gmail.png'
import linkedin from './linkedin.png'
import imessage from './imessage.png'

// copies phone number or gmail
function copyContactInfo(info) {
    navigator.clipboard.writeText(info)
}

function ContactInfo() {
    return (<>
        <footer>
            <h3>Let's Get In Touch!</h3>
            <p>Clicking LinkedIn or GitHub will redirect you to my profile pages. Clicking Gmail or iMessage will copy my email address or phone number to your clipboard.</p>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/seth-lewis-27a007245/" target="blank">
                    <img className="icon" src={linkedin} height={65} width={65}></img>
                </a>
                <a href="https://github.com/slandonlewis" target="blank">
                    <img className="icon" src={github} height={65} width={65}></img>
                </a>
                <img src={gmail} className="icon" onClick={() => { copyContactInfo("slandonlewis@gmail.com") }} height={65} width={65}></img>
                <img src={imessage} className="icon" onClick={() => { copyContactInfo("615-489-0523") }} height={65} width={65}></img>
            </div>
        </footer>
    </>
    );
}

export default ContactInfo;
