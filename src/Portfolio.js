import './App.css';
import getstrong from './getstrong.png'

function Portfolio() {
    return (<>
        <div className='home'>
            <h1>PORTFOLIO</h1>
            <h3>Notable Projects
            </h3>
        </div>

        <div className='projects-list'>
            <div className='project'>
                <h2>GetStrong</h2>
                <img className='thumbnail' src={getstrong} height={300} width={450}></img>
                <p>Having trouble keeping track of your workouts?<br></br>
                    GetStrong has you covered! This React application
                    simplifies logging your training sessions and even
                    has a built in weight calculator!
                </p>
                <a href='https://github.com/slandonlewis/getStrong'>
                    <button>VIEW ON GITHUB</button>
                </a>
            </div>

            <div className='project'>
                <h2>GetStrong</h2>
                <img className='thumbnail' src={getstrong} height={300} width={450}></img>
                <p>Having trouble keeping track of your workouts?<br></br>
                    GetStrong has you covered! This React application
                    simplifies logging your training sessions and even
                    has a built in weight calculator!
                </p>
                <a href='https://github.com/slandonlewis/getStrong'>
                    <button>VIEW ON GITHUB</button>
                </a>
            </div>
        </div>
    </>
    );
}

export default Portfolio;
