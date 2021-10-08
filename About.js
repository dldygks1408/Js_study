import React, {useState, useEffect} from 'react';

function About(props){
  const date = new Date();
  const [test, setTest] = useState(<span>뿅</span>);
  const [count, setCount] = useState(0);
  const [clock, setClock] = useState(date);


  useEffect(()=>{
    let timer = setTimeout(()=>{
      setTest('');
      console.log('About 렌더');
    },3000);

    return function unmountTest(){
      console.log('사라질때 이벤트');
    }
  },[test]);

  function countBtn(){
    console.log('click 이벤트');
    setCount(count+1);
  }

  window.setInterval(()=>{

  },1000);

  return(
    <>
      {test}
      <br />
      <button onClick={ (e)=>{ countBtn(e) } }>
        클릭 
      </button>{count}
      <div>
        {clock.toLocaleTimeString()}
      </div>
      <br />
      <ul>
        <li>render가 되면 일단 모든 이벤트가 실행</li>
        <li>state 값이 하나라도 바뀌면 모든 이벤트가 실행</li>
        <li>방지하는 방법!!!!</li>
        <li></li>
      </ul>
    </>
  )
}

export default About;
