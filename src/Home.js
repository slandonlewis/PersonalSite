import logo from './logo.svg';
import './App.css';
import seth from './seth.JPG'
import CollapsibleExample from './Navbar.js'

function App() {
  return (<>
    <CollapsibleExample />
    <h1>SETH LEWIS</h1>
    <img src={seth} alt="headshot" height={200} width={150}></img>
    <p>Welcome to my personal website! I am a
      fullstack software developer from Elmwood,
      TN!
    </p>
  </>
  );
}

export default App;
