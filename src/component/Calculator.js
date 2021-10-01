/*eslint-disable */
import React,{component} from "react";
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {process : '', result : 0, nums:[], operator:[],currentNum : ""}; //초기값 설정
  } 
  cal_num_handler(e){
    let process_value = this.state.process + "" + e.target.value;
    let current_value = this.state.currentNum + "" + e.target.value;
    this.setState( { process : process_value } );
    this.setState( { currentNum : current_value } );
    console.log(this.state);
  }
  cal_oper_handler(e){
    let process_val = this.state.process;
    let current_value = this.state.currentNum;
    let operlator_value = e.target.value;
    let numsArr = this.state.nums.push(Number(current_value));
    let operatorsArr = this.state.operator.push(operlator_value);
    this.setState({
      process : process_val + operlator_value,
      currentNum : "",
    })
  }
  resultTest(e){
    let process_val = this.state.process;
    let result_val = process_val;
    this.setState( { currentNum : result_val } )
  }
  test_this(){
    console.log('this.test_this : ',this);
  }
  test_this2(){
    console.log('this.test_this.bind(this) : ', this);
  }
  render(){
    return(
      <div id='calculator'>
        <p><textarea name="cal_process" value= {this.state.process} cols="20" rows="1"></textarea></p>
        <p><textarea name="cal_result" value={this.state.currentNum} cols="20" rows="1"></textarea></p>
        <div id='tableContainer'>
          <table>
            <tr>
              <td><button>%</button></td>
              <td><button>CE</button></td>
              <td><button>C</button></td>
              <td><button>←</button></td>
              <td rowSpan='5'><button onClick= { (e)=>{this.resultTest(e)} } style= { {height : 130} }>=</button></td>
            </tr>
            <tr>
              <td><button onClick = { this.cal_num_handler.bind(this) } value= '7'>7</button></td>
              <td><button onClick = { this.cal_num_handler.bind(this) } value= '8'>8</button></td>
              <td><button onClick = { this.cal_num_handler.bind(this) } value= '9'>9</button></td>
              <td><button  value= '/' >/</button></td>
            </tr>
            <tr>
              <td><button onClick = { ()=>{console.log('()=>{} : ', this);} }>4</button></td>
              <td><button onClick = { function(){console.log('fn(){} : ',this);} }>5</button></td>
              <td><button onClick = { this.test_this } >6</button></td>
              <td><button  onClick = { this.test_this2.bind(this) } >*</button></td>
            </tr>
            <tr>
              <td><button>1</button></td>
              <td><button>2</button></td>
              <td><button>3</button></td>
              <td><button>-</button></td>
            </tr>
            <tr>
              <td><button>~</button></td>
              <td><button>0</button></td>
              <td><button>.</button></td>
              <td><button onClick = { (e)=>{ this.cal_oper_handler(e) } } value = '+' >+</button></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Calculator;