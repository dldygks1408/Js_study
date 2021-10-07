/* eslint-disable */
import styles from './CSS/Calculator.module.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Calculator(){

  const [result, setResult] = useState('');
  const [process, setProcess] = useState('');
  function cal_num_handler(e){
    let process_num = process + e.target.innerText;
    let current_num = result + e.target.innerText;
    setResult(current_num);
    setProcess(process_num);   
  }
  function cal_oper_handler(e){
    let process_num = process + e.target.value;
    let current_num = result + e.target.value;
    console.log(process_num);
    console.log(current_num);
    setProcess(process_num);
    setResult('');
  }
  function num_remove(){
    setResult(result.slice(0,-1));
    setProcess(process.slice(0,-1));
  }
  function print_result(){
    let printResult = process;
    setResult(eval(printResult));
  }

  function reset(){
    setResult('');
    setProcess('');
  }
  return(
    <>
    <div className={`${styles.cal_box} cal_box`}>
      <div className={styles.print_container}>
        <div className={styles.print_result1}> {process} </div>
        <div className={styles.print_result2}> {result} </div>
      </div>
      <button onClick = { (e)=>{ cal_oper_handler(e) } } value='%'>%</button>
      <button onClick = { (e)=>{ cal_oper_handler(e) } } value='/'>➗</button>
      <button onClick = { reset } >C</button>
      <button onClick = { ()=>{ num_remove() } } >←</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >7</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >8</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >9</button>
      <button onClick = { (e)=>{ cal_oper_handler(e) } } value='*'>✖</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >4</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >5</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >6</button>
      <button onClick = { (e)=>{ cal_oper_handler(e) } } value='-' id='ttt'>➖</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >1</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >2</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >3</button>
      <button onClick = { (e)=>{ cal_oper_handler(e) } } value='+'>➕</button>
      <button> </button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >0</button>
      <button onClick = { (e)=>{ cal_num_handler(e) } } >.</button>
      <button onClick = { print_result } >=</button>   
    </div>
    <Link to='/'>다른 프로젝트 보러가기</Link>
    </>
  )
} 

export default Calculator;