import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          wellcome <code>to </code>my wrold!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/sono_sung/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Instagram/sonosung
        </a>
      </header>
    </div>
  );
}

export default App;
