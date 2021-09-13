'use strict'

const tdList = document.querySelectorAll('#calendarTable td');

console.log(new Date().getDate()); // 오늘
console.log(`요일${new Date(2021,8,1).getDay()}`); // 요일
console.log(new Date().getFullYear()); // 현 년
console.log(new Date().getMonth()+1); // 현 월
console.log(new Date(2021,9,0).getDate()); //마지막날

let toDay = new Date().getDate();
let firstDay = new Date(2021,8,1).getDay();
let lastDay = new Date(2021,9,0).getDate();

  for (let i = firstDay, d=1; i < lastDay+firstDay; i++) {
    tdList[i].querySelector('.day').innerText = d++;
  }
