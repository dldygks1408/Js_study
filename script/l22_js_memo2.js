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
