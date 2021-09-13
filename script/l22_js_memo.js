//데이터베이스 서버와 통신해서 9월 10일 할 일 목록을 받았다.
// const d_2021_09 =
//   {
//     10:{610 : 세수, 730 : 밥, 800: 운전},
//     11:{610 : 세수, 730 : 밥, 800: 운전}
//   }
//index 값을 바꾸고 다시 출력해라
//스케줄 추가 버튼을 누르면 데이터베이스 서버에 insert를 하고 다시 insert 된 리스트를 출력 받는다.
//기존 list에 값을 추가한것을 대신한다.
//리스트에 삭제 버튼을 누르면 데이터베이스 서버에 delete를 하고 다시 insert된 리스트를 받는다.

//데이터베이스 서버와 통신해서 9월 10일 할 일 목록을 받았다.
// const d_2021_09 =
//   {
//     10:{610 : 세수, 730 : 밥, 800: 운전},
//     11:{610 : 세수, 730 : 밥, 800: 운전}
//   }

// const d_09_10=[];

// function schedulePrint(){
//   let scheduleListHtml = "";
//
//   d_09_10.forEach((item, i) => {
//     scheduleListHtml += `<li>${i+1} : ${item}<button class="delete" type="button"> 🗑 </button></li>`
//   });
//
//   const ulSchedule = document.querySelector('#memo ul.schedule');
//   ulSchedule.innerHTML=scheduleListHtml;
// }




const d_09_10=[];

schedulePrint();
overDel();

const scheduleInputVal = document.querySelectorAll('.insert_schedule label input');

document.querySelector('.insert_schedule button').addEventListener('click', ()=>{
  d_09_10.splice(scheduleInputVal[0].value-1,0,scheduleInputVal[1].value);
  schedulePrint();
})

function schedulePrint(){
  let scheduleListHtml = "";

  d_09_10.forEach((item, i) => {
    scheduleListHtml += `<li>${i+1} : ${item}<button class="delete" type="button"> 🗑 </button></li>`
  });

  const ulSchedule = document.querySelector('#memo ul.schedule');
  ulSchedule.innerHTML=scheduleListHtml;
  overDel();
}

function overDel(){
  document.querySelectorAll('.delete').forEach( e => {
    e.addEventListener('click', (v)=>{
      v.target.parentNode.remove();
      console.log(v);
    })
  })
}


// printCalendar(new Date().getMonth()+1);
// function printCalendar(paraMonth,paraYear=(new Date().getFullYear())){
//   let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지다.
//   //9월 마지막 일 구하기
//   let lastDay=new Date(paraYear,dateMonth+1,0).getDate();
//   //9월의 시작하는 요일 구하기
//   let firstDay=new Date(paraYear,dateMonth,1).getDay();
//   //전달의 마지막날 구하기
//   let lastMonth=new Date(paraYear,dateMonth,0).getDate();
//   //출력문
//   document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
//   document.getElementById("nextMonth").innerText=`${paraYear+Math.floor(paraMonth/12)}. ${paraMonth%12+1}`;
//   document.getElementById("nextMonth").value=`${paraYear+Math.floor(paraMonth/12)}-${paraMonth%12+1}`; //
//   document.getElementById("preMonth").innerText=`${paraYear-(paraMonth==1 ? 1:0)}. ${paraMonth==1 ? 12:paraMonth-1}`;
//   document.getElementById("preMonth").value=`${paraYear-(paraMonth==1 ? 1:0)}-${paraMonth==1 ? 12:paraMonth-1}`;
// }
