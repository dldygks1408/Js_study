// 데이터베이스에서 받아온 데이터베이스
//시간은 => 분, 07:10 => 60*7 + 10 = 430
// const d_09 =
//   {
//     13:{
//       430:"기상",
//       450:"학원",
//       1080:"퇴근",
//       1170:"집 도착",
//       1320:"취침"
//     },
//     14:{
//       430:"기상",
//       450:"학원",
//       1080:"퇴근",
//       1170:"집 도착",
//       1320:"취침"
//     }
//   }
const d_0913 =
  {
    430:"기상",
    450:"학원",
    1080:"퇴근",
    1170:"집 도착",
    1320:"취침"
  }
// 430 in d_0913  in은 key가 오브젝트에 있는지 검사 true
printSchedule();

function printSchedule(){
  let li_html="";
  for(key in d_0913){
    li_html += `<li>`;
    li_html += `<b class='timeLeft'>`;
    li_html += `${ (Number.parseInt(key/60)+"").padStart(2,0)} : `;
    li_html += `${(Number.parseInt(key%60)+"").padStart(2,0)} `;
    li_html += `</b>`;
    li_html += `<span>`;
    li_html += `${d_0913[key]}`;
    li_html += `</span>`;
    li_html += `<button class='delete' value=${key} onclick='deleteScheldule(event)'>`;
    li_html += `🗑`;
    li_html += `</button>`;
    li_html += `</li>`;
    console.log(key);
  }
  document.querySelector('#memo ul.schedule').innerHTML = li_html;
}

document.forms.insertSchedule.regist.onclick = function(event){
  let registForm = event.target.form;
  let textVal = registForm.registText.value;
  let timeVal = registForm.registTime.value.split(':');
  let regist_time = Number(timeVal[0]*60) + Number(timeVal[1]);
  d_0913 [regist_time] = textVal;
  printSchedule();
}

//브라우저에 개체가 로드 될때 한번 재정의 한다.
function deleteScheldule(event){
  delete d_0913[Number(event.target.value)];
  printSchedule();
}



console.log(new Date().getDate());

printCalendar(new Date().getMonth()+1,new Date().getFullYear(),new Date().getDate());
//function(para,para="default") 꼭 마지막 파라미터에 기본값을 주세요

//new Date().getYear() = 2000-1900: 100, 2021-1900: 121
function printCalendar(paraMonth,paraYear=(new Date().getYear()+1900),paraDate){
  let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지다.
  //9월 마지막 일 구하기
  let lastDay=new Date(paraYear,dateMonth+1,0).getDate();
  //9월의 시작하는 요일 구하기
  let firstDay=new Date(paraYear,dateMonth,1).getDay();
  //전달의 마지막날 구하기
  let lastMonth=new Date(paraYear,dateMonth,0).getDate();
  console.log(paraDate);

  document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
  document.getElementById("nextMonth").innerText=`${paraYear+Math.floor(paraMonth/12)}. ${paraMonth%12+1}`;
  document.getElementById("nextMonth").value=`${paraYear+Math.floor(paraMonth/12)}-${paraMonth%12+1}`; //
  document.getElementById("preMonth").innerText=`${paraYear-(paraMonth==1 ? 1:0)}. ${paraMonth==1 ? 12:paraMonth-1}`;
  document.getElementById("preMonth").value=`${paraYear-(paraMonth==1 ? 1:0)}-${paraMonth==1 ? 12:paraMonth-1}`;
  document.querySelector('.memo_Title').innerText = `${paraMonth} 월 ${paraDate} 일`;
}
//button인 달 바꾸기만 onclick이벤트 재정의

document.querySelectorAll(".changeMonth[type=button]").forEach((item) => {
    item.addEventListener("click",(event)=>{
      console.log(event.target.value);
      let yearMonthArr=event.target.value.split("-")
      printCalendar(Number(yearMonthArr[1]),Number(yearMonthArr[0]));
    });
});
