import './App.css';
import getstrong from './getstrong.png'

function Portfolio() {
    return (<>
        <div className='home'>
            <h1>PORTFOLIO</h1>
            <h3>Here are some projects I've done
            </h3>
        </div>

        <div className='projects-list'>
            <div className='project'>
                <h3>GetStrong</h3>
                <img src={getstrong} height={250}></img>
                <p>Having trouble keeping track of your workouts?
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
