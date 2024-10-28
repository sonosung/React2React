import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'hello!'
  return (
    <div className="App">
      <div className="top-bar">
       <h4 style={{color : 'white'}}>{ post }</h4>
      </div>
      
    </div>
  );
}

export default App;
