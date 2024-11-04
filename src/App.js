// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'hello!' //변수에 파라미터가 바뀌어도, return 될때 변경 내용이 반영되지 않음.
  let [sub, b] = useState('subtitle'); //state 는 return 값에 변경사항이 자동으로 반영된다.
  let [snd, c] = useState('secondtitle');
  //자주 변경이 될 자료들은 state로 정의하면 유용한 경우가 있다.
  let [a,d] = [1,2] //배열 자료형태는 이런 식으로 만듦.

  let [title, changeTitle] = useState(['first title', 'second title', 'third title']);
  
  let[좋아요, 좋아요증가] = useState(0);

  // let[제목변경, 변경내용] = useState('changed title')

  function titleChange(){
    console.log('changed title');
  }

  return (
    <div className="App">
       <h4 style={{color : 'white'}}>
        { post } 
        </h4>

        <div className="list">
          <h4>{ title[0] }<span onClick={ ()=> 좋아요증가(좋아요+1) }> 좋아요👍</span> {좋아요} </h4>
          <p>11월 05일</p>
        </div>

        <div className="list">
          <span onClick={ titleChange }> 제목 변경 </span> {titleChange}
          <p>11월 05일</p>
        </div>

        <div className="list">
          <h4>{ title[2] }</h4>
          <p>11월 05일</p>
        </div>
      
    </div>
  );
}

export default App;
