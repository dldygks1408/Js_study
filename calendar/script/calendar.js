//DB에서 설계된 table을 받아온 리스트
const d_09=
  {
    13:{
      430:"기상",
      450:"에이콘아카데미 출근",
      1080: "퇴근",
      1170: "집 도착",
      1328: "취침"
    },
    14:{
      430:"기상2",
      450:"에이콘아카데미 출근2",
      1080: "퇴근2",
      1170: "집 도착2",
      1320: "취침2"
    }
}

const tdList= document.querySelectorAll("#calendarTable td");

//new Date().getMonth() 현재 달의 -1을 반환한다.(0~11)
printCalendar(new Date().getMonth()+1);


function printCalendar(paraMonth,paraYear=(new Date().getYear()+1900)){
let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지다.
//9월 마지막 일 구하기
let lastDay=new Date(paraYear,dateMonth+1,0).getDate();
//9월의 시작하는 요일 구하기
let firstDay=new Date(paraYear,dateMonth,1).getDay();
//전달의 마지막날 구하기
let lastMonth=new Date(paraYear,dateMonth,0).getDate();
//////////////////////////////////////////////////////////////////////


function ButtonValue(month,year){
  this.month=month;
  this.year=year;
  this.text=`${this.year}년도 ${this.month}월`;
  this.value=`${this.year}-${this.month}`;
}
const nextB=(paraMonth+1==13)
              ?new ButtonValue(1,paraYear+1)
              :new ButtonValue(paraMonth+1,paraYear);

const preB=(paraMonth-1==0)
              ?new ButtonValue(12,paraYear-1)
              :new ButtonValue(paraMonth-1,paraYear);

document.getElementById("nextMonth").innerText=nextB.text;
document.getElementById("nextMonth").value=nextB.value;

document.getElementById("preMonth").innerText=preB.text;
document.getElementById("preMonth").value=preB.value;

document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
//document.getElementById("toDate").innerText=new Date(paraYear,dateMonth);

function scheduleList(e){
  const ect = e.currentTarget;
  let liText = "";
  let selDay = ect.querySelector('.day');
  document.querySelector('.container .title').innerHTML = `${paraYear}년 ${paraMonth}월 ${selDay.innerText}일 `;


  let li_Text = "";
  for (var i = 0; i < ect.querySelectorAll('.schedule li').length; i++) {
    li_Text += `<li>`;
    li_Text += ect.querySelectorAll('.schedule li')[i].innerText;
    li_Text += ` <button class='deleteBtn' value='' onclick='deleteJsonBtn(event)'>`;
    li_Text += `🗑`;
    li_Text += `</button>`;
    li_Text += `</li>`;
    }
    document.querySelector('#memo .schedule').innerHTML = li_Text;

    document.querySelector('button[id=scbtn]').addEventListener('click', (e)=>{
      let time_val = document.forms.insertSchedule.querySelector('input[type=time]').value.split(":");;
      let text_val = document.forms.insertSchedule.querySelector('input[type=text]').value;
      let regist_time = Number(time_val[0]*60) + Number(time_val[1]);
      console.log(regist_time);
      d_09[selDay.innerText] = {regist_time:text_val};
      printScheldule();
    });
}



for(let i=firstDay,d=1; i<lastDay+firstDay; i++){
//──────────해당 일 클릭 이벤트 정의(일정 리스트 수정 등록)─────────────────────────
  tdList[i].addEventListener('click', scheduleList);

//──────────────────────────────해당 월 출력─────────────────────────────────────
  tdList[i].querySelector(".day").innerText=d;
  tdList[i].classList.add("active"); //활성화된 td 스타일 추가
  tdList[i].classList.remove("disabled"); //비활성화된 td 스타일 삭제
//────────────────────────────해당 월 일정 출력──────────────────────────────────
printScheldule();

function printScheldule(){
  let li_html = "";
  if(d_09[d]){ //undefined false
    for(key in d_09[d]){
      li_html += `<li>`;
      li_html += `<b class='time'>`;
      li_html += `${(Number.parseInt(key/60)+"").padStart(2,0)}`;
      li_html += `:${(key%60+"").padStart(2,0)}`;
      li_html += ` ${d_09[d][key]}`;
      li_html += `</li>`;
    }
  }

  tdList[i].querySelector('.schedule').innerHTML = li_html;
  d++;
}
}

//비활성화된 전달의 출력
for(let i=firstDay-1; i>=0; i--){
  tdList[i].querySelector(".day").innerText=lastMonth--;
  tdList[i].classList.add("disabled");//비활성화된 td 스타일 추가
  tdList[i].classList.remove("active");//활성화된 td 스타일 삭제

}
//비활성화된 다음달 출력
let nextMonth=firstDay+lastDay
for(let i=nextMonth,num=1; i<=tdList.length-1; i++){
  tdList[i].querySelector(".day").innerText=num++;
  tdList[i].classList.add("disabled");//비활성화된 td 스타일 추가
  tdList[i].classList.remove("active");//활성화된 td 스타일 삭제

}
}
function deleteJsonBtn(event){
  console.log(event.target.value);
}
// console.log(d_09[13][430]);
//button인 달 바꾸기만 onclick이벤트 재정의
document.querySelectorAll(".changeMonth[type=button]").forEach((item) => {
//  item.onclick=function(){}
  item.addEventListener("click",(event)=>{
    let yearMonthArr=event.target.value.split("-");//"2021-8"->[2021,8]
    printCalendar(Number(yearMonthArr[1]),Number(yearMonthArr[0]));
  });
});
