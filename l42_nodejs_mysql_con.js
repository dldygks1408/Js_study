// mysql server에 접속하는 방법
// mysql server를 시작해야 한다. net start mysql
// mysql 에 접속 할 수 있는 lib를 다운받아야한다. npm i mysql (ver5까지 지원 / ver 5 이상의 문법을 사용 할 수 없다.)
// require("mysql")로 다운받아 lib를 사용해야 한다.
// npm mysql로 사용법을 보세요.

const mysql = require("mysql");
const http = require('http');

let product_list = null;

//접속 준비
const con = mysql.createConnection({
  host : '127.0.0.1',
  port : 3306,
  user : 'root',
  password : '1234',
  database : 'david_db',
  charset : 'utf8'
});

con.connect((err)=>{
  if(err){
    console.log(err);
    throw err;
  }
  con.query("SELECT * from `tests`", (err,result,fields)=>{
    if(err){
      throw err;
    }
    product_list = result;
    console.log(result);
    con.end((err)=>{}); //end() mysql server와 connection 유지하고 있는 것을 끊는다.
  })
})


const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  let product_list_e = '';
  product_list.forEach(element => {
    for(key in element){
      product_list_e+= key + ":" + element[key] + "<br>";
    }
    product_list_e += "<br>";
  });

  let div_e = `<div>
                  <h2>출력</h2>
                  <div>${product_list_e}</div>
              </div>`
  res.end('<h1>nodejs http hello</h1>'+ div_e);
})

server.listen(6001, '127.0.0.1',()=>{
  console.log('server 실행');
})