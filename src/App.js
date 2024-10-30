import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'hello!' //변수에 파라미터가 바뀌어도, return 될때 변경 내용이 반영되지 않음.
  let [sub, b] = useState('subtitle'); //state 는 return 값에 변경사항이 자동으로 반영된다.
  let [snd, b] = useState('secondtitle');
  //자주 변경이 될 자료들은 state로 정의하면 유용한 경우가 있다.
  let [a,b] = [1,2] //배열 자료형태는 이런 식으로 만듦.

  return (
    <div className="App">
      <div className="top-bar">
       <h4 style={{color : 'white'}}>
        { post } 
        </h4>
      </div>
      
    </div>
  );
}

export default App;
