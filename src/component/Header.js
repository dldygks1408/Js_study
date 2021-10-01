/*eslint-disable */
import React, {useState} from 'react';
import Clock from './Clock';
//react는 함수가 완전한 형태이길 원한다. return을 구현해야한다.
//react는 함수도 javascript 함수와 다른 함수 구성을 쓰고 있다.

//Component Header 매개변수 props는 약속된 값이고
//props Component가 렌더링 될때 어떻게 구성 될 것인지를 결정
function Header(props){
  const [title,setTitle] = useState(props.title);
  const [titleStyle, setTitleStyle] = useState({ color : 'blue'});
  const [clockMount,setClockMount] = useState(true);
  const nav_li_arr = [];
  const li_click_handle = (e)=>{
    let target_component =e.target.href.split('#')[1];
    console.log(e);
  }
  for(let i = 0; i < props.nav_li.length; i++){
    //react는 jsx의 li element를 배열에서 출력할 때 꼭 유니크한 키를 가져야 한다.(규칙)
    nav_li_arr.push(
                    <li key={i}>
                      <a href={props.nav_li[i].url} onClick= { li_click_handle }>
                        {props.nav_li[i].text}
                      </a>
                    </li>)
  }
  function titleClick(){
    // props.title = '변경불가 read only';
    setTitle('바꿔');
    setTitleStyle( {color : 'red', border : '1px solid'} );
  }
  function delClock(){
    console.log('시계를 삭제한다.');
    setClockMount(false);

  }
  return (
    // (A && B) A true면 아직 true가 확실하지 않기 때문에 B도 검사해서 B가 있으면 출력
    // (A || B) A true면 연산이 끝나서 B가 출력되지 않는다.
    // (true || false) = true 
    <header>
      <h1 onClick= { titleClick } style= { titleStyle }> {title}</h1>
      <nav>
        <ul>
          { nav_li_arr }
        </ul>
      </nav>
      {/* new Date() => new Date().toString() */}
      {
        clockMount && <Clock text = {new Date().toLocaleTimeString()} name = 'dd' />
      }
      <button onClick= { delClock } >삭제 </button>
      </header>
  )
}

export default Header;