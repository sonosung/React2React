import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'hello!' //������ �Ķ���Ͱ� �ٲ�, return �ɶ� ���� ������ �ݿ����� ����.
  let [sub, b] = useState('subtitle'); //state �� return ���� ��������� �ڵ����� �ݿ��ȴ�.
  let [snd, b] = useState('secondtitle');
  //���� ������ �� �ڷ���� state�� �����ϸ� ������ ��찡 �ִ�.
  let [a,b] = [1,2] //�迭 �ڷ����´� �̷� ������ ����.

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
