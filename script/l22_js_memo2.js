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
    scheduleList += `<button class='delete' value = '${JSON.stringify(del_val)}' onclick=delete_Schedule(event)> ๐ </button>`;
    scheduleList += `</li>`;
  });

  const ulschedule = document.querySelector("#memo ul.schedule");
  ulschedule.innerHTML = scheduleList;
}

const scheduleForm = document.forms["insertSchedule"];
const regist = document.forms["insertSchedule"]["regist"];
//๋ธ๋ ๊ฐ์ฒด๋ฅผ ์ฐธ์กฐํ๋ ๋ณ์๋ ์์๋ก ์ฐธ์กฐ
//๋ธ๋ ๊ฐ์ฒด์ ์์ฑ ๊ฐ์ let ๋ณ์๋ก ์ฐธ์กฐ
regist.addEventListener("click", () => {
  //inputNode.value type string
  let insert_index = Number(scheduleForm["index"].value); //๋ฌธ์์ด
  let insert_text = scheduleForm["text"].value;
  d_09_10.splice(insert_index,0,insert_text);
  schedulePrint();
});


function delete_Schedule(e){
  let deleteIndexObject = JSON.parse(e.target.value);
  d_09_10.splice(deleteIndexObject,1);
  schedulePrint();
}
