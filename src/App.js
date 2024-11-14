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

  let[modal, setModal] = useState(false); //useState()의 괄호 안에 state는 개발자 임의대로 정해도 된다.

  // let[제목변경, 변경내용] = useState('changed title')

  // 2024.11.15 array mapping
  // [1,2,3].map(function(){
  //   console.log(1)
  //   return 'array 1,2,3에 들어감.'
  // })

  return (
    <div className="App">
       <h4>
        { post } 
        </h4>

        <button onClick={()=>{
          let newTitle = [...title] //"..."은 Spread Operator 라고 한다. "..." 연산자는 배열이나 문자열 같은 반복이 가능한 구조를 각각의 요소로 확장될 수 있게 한다. (참고 : https://www.youtube.com/watch?v=RuDdltsfaVc&ab_channel=BroCode)
          newTitle[0] = 'titleChanged';
          changeTitle(newTitle);
        }}>let's change the title!</button>
        
        <div>
        <button onClick={()=> setModal(false)} >모달 창 닫기</button>
        </div>
        
        {/* <div className="list">
          <h4>{ title[0] }<span onClick={ ()=> 좋아요증가(좋아요+1) }> 좋아요👍</span> {좋아요} </h4>
          <p>11월 05일</p>
        </div>

        <div className="list">
        <h4>{ title[1] }<span onClick={ ()=> 좋아요증가(좋아요+1) }> 좋아요👍</span> {좋아요} </h4>
          <p>11월 05일</p>
        </div>

        <div className="list">
        <h4>{ title[2] }<span onClick={ ()=> 좋아요증가(좋아요+1) }> 좋아요👍</span> {좋아요} </h4>
          <p>11월 05일</p>
        </div> */}
        

        {/* map 함수를 이용한 반복문 활용법! */}
        {/* {
          [1,2,3].map(function(){
            return <div>message</div>
          })
        }

        {
          [<div>message</div>,<div>message</div>,<div>message</div>]
        } */}

        {
          // title.map(function(a){
          //   return (
          //     <div className="list">
          //     <h4>{ a }</h4>
          //     <p>11월 05일</p>
          //     </div>
          //   )
          // })
        }
        
        {
          title.map(function(a,i){
            return (
              <div className="list">
              <h4 onClick={()=> setModal(true) }>{ title[i] }</h4>
              <button onClick={()=> setModal(false)} >모달 창 닫기</button>
              <p>11월 05일</p>
              </div>
            )
          })
        }

        {/* 
        javascript의 중괄호 내에선 if문을 사용할 수 없으므로, 삼항연산자(ternary operator)로 대체한다. 
        동적인 UI 만드는 step!
        1. html, css 로 미리 디자인을 완성한다.
        2.UI의 현재 상태를 state로 저장한다.
        3.state에 따라 UI가 어떻게 보일지 작성한다.
        */}

        {
          // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
          modal === true ? <Modal/> : null
        }

    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
