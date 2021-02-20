import logo from './logo.svg';
// import imageExample from './react.png';
import './App.style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={imageExample} alt="react" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
