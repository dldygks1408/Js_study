function Car(){
  let name = 'qm3';
  this.carName = 'qm3';
}
console.log(Car);
console.log(Car.prototype);
console.log(new Car()); //복제
console.log(Object.create(Car));//복제
console.log('────────────────────────────────────────────────────────────────');
function Person(){
  this.name = 'Yohan';
  this.callName = function(){
    console.log('hello ' + this.name);
  }
}
Person.callName2 = function(){
  console.log('hello ' + this.name); //window name
}//this 찾을 수 없다.
//bind로 this을 묶어줘야한다.

// Person.callName();
Person.callName2();

let callName2F = Person.callName2.bind(new Person());

callName2F();
