import './App.css';
import seth from './seth.JPG'

function AboutMe() {
    return (<>
        <div className='home'>
            <h1>ABOUT ME</h1>
            <img src={seth} alt="headshot" height={450} width={300}></img>
            <h3>My name is Seth Lewis. I am an entry level software developer fresh out
                of Nashville Software School. There, I learned JavaScript, React JS, C#,
                and .NET, as well as several other technologies and programming concepts.
            </h3>
        </div>
    </>
    );
}

export default AboutMe;
