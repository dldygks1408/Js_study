const d_09_10 = ["aaa", "bbb", "ccc", "ddd"];

schedulePrint();
function schedulePrint() {
  let scheduleList = "";
  const del_val = {index : 0};
  d_09_10.forEach((item, i) => {
    del_val.index= i;
    console.log(del_val);
    scheduleList += `<li>`;
    scheduleList += `${item}`;
    scheduleList += `<button class='delete' value = '${JSON.stringify(del_val)}' onclick=delete_Schedule(event)> 🗑 </button>`;
    scheduleList += `</li>`;
  });

  const ulschedule = document.querySelector("#memo ul.schedule");
  ulschedule.innerHTML = scheduleList;
}

const scheduleForm = document.forms["insertSchedule"];
const regist = document.forms["insertSchedule"]["regist"];
//노드 개체를 참조하는 변수는 상수로 참조
//노드 개체의 속성 값은 let 변수로 참조
regist.addEventListener("click", () => {
  //inputNode.value type string
  let insert_index = Number(scheduleForm["index"].value); //문자열
  let insert_text = scheduleForm["text"].value;
  d_09_10.splice(insert_index,0,insert_text);
  schedulePrint();
});


function delete_Schedule(e){
  let deleteIndexObject = JSON.parse(e.target.value);
  d_09_10.splice(deleteIndexObject,1);
  schedulePrint();
}




printCalendar(new Date().getMonth()+1);
//function(para,para="default") 꼭 마지막 파라미터에 기본값을 주세요

//new Date().getYear() = 2000-1900: 100, 2021-1900: 121
function printCalendar(paraMonth,paraYear=(new Date().getYear()+1900)){
  let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지다.
  //9월 마지막 일 구하기
  let lastDay=new Date(paraYear,dateMonth+1,0).getDate();
  //9월의 시작하는 요일 구하기
  let firstDay=new Date(paraYear,dateMonth,1).getDay();
  //전달의 마지막날 구하기
  let lastMonth=new Date(paraYear,dateMonth,0).getDate();

  document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
  document.getElementById("nextMonth").innerText=`${paraYear+Math.floor(paraMonth/12)}. ${paraMonth%12+1}`;
  document.getElementById("nextMonth").value=`${paraYear+Math.floor(paraMonth/12)}-${paraMonth%12+1}`; //
  document.getElementById("preMonth").innerText=`${paraYear-(paraMonth==1 ? 1:0)}. ${paraMonth==1 ? 12:paraMonth-1}`;
  document.getElementById("preMonth").value=`${paraYear-(paraMonth==1 ? 1:0)}-${paraMonth==1 ? 12:paraMonth-1}`;
}
//button인 달 바꾸기만 onclick이벤트 재정의
console.log('d');
document.querySelectorAll(".changeMonth[type=button]").forEach((item) => {
    item.addEventListener("click",(event)=>{
      console.log(event.target.value);
      let yearMonthArr=event.target.value.split("-")
      printCalendar(Number(yearMonthArr[1]),Number(yearMonthArr[0]));
    });
});
