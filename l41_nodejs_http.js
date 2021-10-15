
// require('http') import와 동일한 역활로 nodejs가 기본으로 가지고 있는 api를 import 한다.
// 서버 언어는 http 객체를 배우는 것을 의미
// jsp를 배운다는 것은 java 기반의 http 객체를 배운다. 
// http를 이루는 가장 중요한 객체는 request, respones이다. 
// 서버언어에서 가장 중요한것은 사용자의 요청(request)에 따라 서버가 응답(response)을 다르게 하는 것이다. 
// 응답을 다르게 하기 위해 db에 내용을 요청에 따라 바꾸는 것이 백엔드가 하는 일이다. 
const http = require('http');
const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1>nodejs http hello</h1>');
})

server.listen(6001, '127.0.0.1',()=>{
  console.log('server 실행');
})

// 서버 종료하는 방법은 터미널에서 ctrl + c


