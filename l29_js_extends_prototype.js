const a = new Object();
a.name = "db";

const literal_a = {name : 'db'};

function fn_a(){ this.name = 'db' };

class Class_a  {
  constructor(name){
    this.name = name;
  }
}

console.group('객체 생성 4가지 방법');
console.log('a : ', a);
console.log('literal_a : ', literal_a);
console.log('new fn_a() : ', new fn_a());
console.log('new Class_a : ', new Class_a('db'));
console.groupEnd();

class Parent{
  constructor(a){
    this.a = a;
  }
  b(){return 'bbb'};
}

class Child extends Parent{
  constructor(a){
    super(a)
  }
}

console.group('Class의 상속');
console.log('Child.prototype', Child.prototype);
console.log('Child.__proto__', Child.__proto__);
console.groupEnd();

const child = new Child('child a');
console.group('new Child()');
console.log('child', child);
console.log('child.prototype', child.prototype);
//Child.prototype 이다.
console.log('child.__proto__', child.__proto__);
//Parent.prototype이고 생성자가 정의되어 있기 때문에 자식은 부모의 생성자를 정의해야한다.
//Parent에서 정의한 함수가 있다.
console.log('child.__proto__', child.__proto__.__proto__);
console.groupEnd();
//자바스크립트가 추천하는 상속의 가장 이상적인 모습
//(__proto__ 로 자식이 부모의 프로토 타입을 링크하는 모습)

const parentObj =
  {
    parent : '부모',
    //parentCall: function(){}
    parentCall(){
      return '난 부모다';
    }
  }

const childObj =
  {
    child : '자식'
  }

childObj.__proto__ = parentObj;

parentObj.parent = '부모 값 바꾸기';
console.group('childObj.__proto__ = parentObj : 원시적 상속');
console.log(childObj);
console.log(childObj.__proto__);
console.log(childObj.__proto__.parent);
console.log(childObj.__proto__.parentCall());
console.groupEnd();

const childObj2 = Object.create(parentObj);
childObj2.child = '두번째 자식';
parentObj.parent = '부모 값 바꾸기 222';
console.log(childObj2);
console.log(childObj2.__proto__);

function Fn_parent(){
  this.a = 'aaa';
  this.b = ()=>{ return 'bbb'; }
}
Fn_parent.prototype.c = function(){ return 'ccc';}
Fn_parent.prototype.d = 'dd';
const fn_child = Object.create(Fn_parent);
console.log(fn_child);
console.log(fn_child.__proto__);
console.log(fn_child.prototype); ///Fn_parent.prototype(b함수 제외) 복사
console.log(fn_child.__proto__);

const fn_child2 = Object.assign(Fn_parent);

console.log(fn_child2);
console.log(fn_child2.prototype); //링크
//깊은 복사가 되지 않는다.(prototype은 복사한 대상과 동일한 prototype을 참조한다.)

const fn_child3 = Object.assign(new Fn_parent());
Fn_parent.prototype.d = 'abcd';
console.log(fn_child3);
console.log(fn_child3.__proto__); //결국 링크

const fn_child4 = Object.assign({},Fn_parent);
Fn_parent.prototype.d = 'dfgzx';
console.log(fn_child4);
console.log(fn_child4.prototype);
console.log(fn_child4.__proto__);
