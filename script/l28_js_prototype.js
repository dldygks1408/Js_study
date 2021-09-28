/*
function Car(){
  this.name = "qm3";
  this.move = ()=>{
    console.log('GoGo~');
  }
}
Car.prototype.move2 = ()=>{
  console.log('move2 Go~');
};
console.group('Car')
console.log(Car);
console.log(Car.prototype);
console.log(Car.move);
console.groupEnd();
//함수에 선언된 멤버를 사용하려면 함수를 객체로 생성해야한다.
//new 연산자를 선언하면 Car 함수를 복사해서 새로운 prototype을 생성한다.
const car = new Car();
console.group('new Car()')
car.move();
car.move2(); //move2도 들어가 있다.
console.log('car.name : ',car.name);
console.log('car :',car); // 새롭게 생성된 객체의 프로토타입
console.log('car.__proto__ : ',car.__proto__); // 설계도가 되는 부모의 Car.prototype
console.groupEnd();

console.group('Object.create(Car)');
const createCar = Object.create(Car);
console.log("createCar : ",createCar);
//console.log("createCar.move : ",createCar.move()); not a function 오류

console.log('createCar.prototype : ', createCar.prototype);
console.log('createCar.prototype.move2 : ', createCar.prototype.move2());
console.log('createCar.__proto__ : ', createCar.__proto__);
console.groupEnd();

console.group('Object.create(new Car())');
const car2 = Object.create(new Car());
//car2 독자적인 프로토타입이 있다.
//car2 부모로 new Car() __proto__가 참조한다.
console.log('car2.name : ',car2.name);
car2.move();
car2.move2();
console.log('car2 : ',car2);
console.log('car2.__proto__ : ',car2.__proto__); //new Car()
console.log('car2.__proto__.__proto__ : ',car2.__proto__.__proto__); //Car.prototype
console.log('car2.__proto__.__proto__.__proto__ : ',car2.__proto__.__proto__.__proto__); //Object.prototype
console.groupEnd();

const car3 = Object.assign(new Car());
console.log('car3 : ',car3);
console.log('car3.__proto__',car3.__proto__);
*/
const nameTest = {
  name : 'yoyo',
}
function Person(name){
  this.name = name;
  this.heyName = function(){
    return this.name + ' 씨';
  }
};
Person.prototype.age = 30;
console.log(new Person().heyName());
console.log(new Person().heyName.apply(nameTest));
console.log('Person.__proto__ : ', Person.__proto__);
console.log('Person.prototype : ' , Person.prototype);

const yohan = new Person('yohan');

console.log('yohan : ', yohan);
console.log('yohan.name : ', yohan.name);
console.log('yohan.heyName() : ', yohan.heyName());
console.log('yohan.age : ', yohan.age);
console.log('yohan.__proto__ : ', yohan.__proto__);

let fn = yohan.heyName;
let fnBind = fn.bind(nameTest);
console.log('fn() : ', fn());
console.log('fn.call(nameTest) : ', fn.call(nameTest));
console.log('fn.apply(nameTest) : ', fn.apply(nameTest));
console.log('fnBind() : ', fnBind());


const heyThis = yohan;
heyThis.age = 40;
console.log('heyThis.name : ', heyThis.name);
console.log('heyThis.age : ', heyThis.age);
console.log('heyThis.heyName() : ', heyThis.heyName());












//
