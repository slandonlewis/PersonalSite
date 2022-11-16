import './App.css';
import seth from './seth.JPG'

function App() {
  return (<>
    <div className='home'>
      <h1>WELCOME!</h1>
      <img src={seth} alt="headshot" height={450} width={300}></img>
      <h3>Welcome to my personal website! I am a
        fullstack software developer from Elmwood,
        TN.
      </h3>
    </div>
  </>
  );
}

export default App;
