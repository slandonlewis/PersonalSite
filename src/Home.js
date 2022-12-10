import './App.css';
import ad from './ad.png'
import spotify from './spotify.png'

function Home() {
  return (<>
    <div className='home'>
      <h1>WELCOME!</h1>
      <h3>Welcome to my personal website! I am a
        fullstack software developer from Elmwood,
        TN.
      </h3>
    </div>

    <div className='spotify'>
      <img src={ad} height={325}></img>
      <a href='https://open.spotify.com/show/4HlYtLKw0KD8IEpWJQty9R' target='blank'>
        <button>
          <img src={spotify} height={120}></img>
        </button>
      </a>
    </div>
  </>
  );
}

export default Home;
