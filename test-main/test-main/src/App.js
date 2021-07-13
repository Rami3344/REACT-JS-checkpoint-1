import crazyGif from './laugh.gif';
import './App.css';
import Cordons from './components/Cordons';
function App() {
  return (
    <div className="App">
      <h1>HELLO AND WELCOME TO THE MOST PERFECT SITEWEB EVER( don't belive me LOL)</h1>
      <h2>Login to be a perfect person :D</h2>
      <Cordons/>
      <img src={crazyGif}></img>
    </div>
  );
}

export default App;
