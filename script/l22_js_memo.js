//데이터베이스 서버와 통신해서 9월 10일 할 일 목록을 받았다.
// const d_2021_09 =
//   {
//     10:{610 : 세수, 730 : 밥, 800: 운전},
//     11:{610 : 세수, 730 : 밥, 800: 운전}
//   }
const d_09_10=['aaa','bbb','ccc','ddd','eee'];
//index 값을 바꾸고 다시 출력해라
//스케줄 추가 버튼을 누르면 데이터베이스 서버에 insert를 하고 다시 insert 된 리스트를 출력 받는다.
//기존 list에 값을 추가한것을 대신한다.
//리스트에 삭제 버튼을 누르면 데이터베이스 서버에 delete를 하고 다시 insert된 리스트를 받는다.

schedulePrint();

const scheduleInputVal = document.querySelectorAll('.insert_schedule label input');
document.querySelector('.insert_schedule button').addEventListener('click', ()=>{
  d_09_10.splice(scheduleInputVal[0].value-1,1,scheduleInputVal[1].value);
  schedulePrint();
  console.log(scheduleInputVal[0].value-1);
})

function schedulePrint(){
  let scheduleListHtml = "";

  d_09_10.forEach((item, i) => {
    scheduleListHtml += `<li>${i+1} : ${item}</li>`
  });

  const ulSchedule = document.querySelector('#memo ul.schedule');
  ulSchedule.innerHTML=scheduleListHtml;
}
