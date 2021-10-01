import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// <script src='./App'></script> 비슷한 구조
import Header from './component/Header';
import Calculator from './component/Calculator';
import reportWebVitals from './reportWebVitals';
//App, Header react Component 라고 부른다. 
//Component는 element로 구성된 도구( Ex) 일정memo )
//ReactDom.render()는 component를 출력하는 함수다.
//htmlDom (X) 이 아니라 ReactDom으로 html 유사 Element다.
ReactDOM.render(
  <React.StrictMode>
    <Header title='React Study' 
            nav_li={ 
                    [
                      {text : 'Component',
                      url : '/Component.html'},
                      {text : 'Props',
                      url : '/Props.html'},
                      {text : 'State',
                      url : '/State.html'},
                      {text : '계산기',
                      url : '#calculator'}
                    ]
                    } />
    <App />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
