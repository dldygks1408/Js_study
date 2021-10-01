/*eslint-disable */
import React, {Component} from "react";

//function Clock(){} 함수는 react 함수로 자바스크립트 함수가 아니다.
//Clock.__proto__ = React.prototype; 이런 형태의 함수로 추축된다.

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {dateText : new Date().toLocaleTimeString()};
    //setState({ dateText : ~~~ }); //component가 출력되고 난 후에 setState로 변경
    // window.setInterval( ()=>this.setDateText(), 1000);
    //constructor 컴퍼넌트를 사용하는 다른 컴퍼넌트 수 만큼 실행된다. 
    //(index.js, header.js) 2번 실행된다. 
  }
  //componentDidMount는 브라우저 화면에 컴퍼넌트가 출력 된 후 실행된다.
  //Called immediately after a component is mounted.
  //Setting state here will trigger re-rendering.
  //구성 요소가 마운트된 직후에 호출됩니다.
  //여기에서 상태를 설정하면 다시 렌더링이 트리거됩니다.
  componentDidMount(){
    //setInterval 이 실행되고 변수가 실행중인 setInterval을 참조한다.
    this.dateInterval = window.setInterval( ()=>this.setDateText(), 1000);
  }

  //컴포넌트가 삭제될때
  componentWillUnmount(){
    clearInterval(this.dateInterval);
    console.log('Clock 삭제 완료');
  }
  setDateText(){
    console.log('똑딱');
    this.setState( {dateText : new Date().toLocaleTimeString()} );
  }
  //상속받은 React.render()를 재정의 
  render(){   
    return (
      <div id="digitalClock">
        <div> {this.state.dateText} </div>
        <div> {this.props.name} </div>
      </div>
    );
  }
}

export default Clock;