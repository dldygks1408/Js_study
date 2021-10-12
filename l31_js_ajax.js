
//request : 통신용어로 특정페이지(URL)를 요청(GET)하는 행위
//response : 요청한 페이지를 받아오는 행위

//XMLHttpRequest : 자바스크립트에서 특정페이지를 비동기적으로 요청할때 사용하는 객체
//XMLHttpRequest.responseText : 요청한 페이지의 본문


loadRoot.onclick = function(){
  const req = new XMLHttpRequest(),
        url = 'load_body.html',
        method = 'GET';
        
  req.onreadystatechange=function(){
    if(req.readyState === this.DONE && req.status === 200){
      printRoot.innerHTML = req.response;
      console.log(req.response);
    }else if(req.status === 404){
      printRoot.innerHTML = `<h2>${req.status} err</h2>`
    }
  }
        
  req.open(method, url);
  req.send();
  
}
