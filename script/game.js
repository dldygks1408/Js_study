const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x : 10,
  y : 50,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    // ctx.drawImage(img1, this.x, this.y);
  }
}

let img1 = new Image();
img1.scr = './img1.png';

class Cactus{
  constructor(){
    this.x = 800;
    this.y = 50;
    this.width = 20;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    // ctx.drawImage(img1, this.x, this.y)
  }
}

let timer = 0;
let cactusArr = [];
let jump = false;
let jumpTimer = 0;
let animation;

function ani(){
  animation = requestAnimationFrame(ani);
  timer++;
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if(timer % 144 === 0){
    const cactus = new Cactus();
    cactusArr.push(cactus);
  }
  cactusArr.forEach( (a, i, o)=> {
    //x좌표가 0 미만이면 어레이 제거
    if(a.x < 0){
      o.splice(i, 1);
    }
    a.x--;
    test(dino, a);
    a.draw();
  });
    if(jump == true){
      dino.y-=5;
      jumpTimer++;
    }
    if(jump == false){
      if(dino.y < 50 ){
        dino.y+=5;
      }
    }
    if(jumpTimer > 10){
      jump = false;
      jumpTimer = 0;
    }
  dino.draw();
}

ani();

//충돌 확인
function test(dino, cactus){
  let x_x = cactus.x - (dino.x + dino.width);
  let y_y = cactus.y - (dino.y + dino.height);
  if(x_x < 0 && y_y < 0){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    jump = true;
  }
})
