

//Prototypes

function Person(inFirstName,inLastName,inAge) {
  this.FirstName = inFirstName;
  this.LastName = inLastName;
  this.Age = inAge;
}
//Prototype methods
Person.prototype.intro = function(){
  return `hello my name is  ${this.FirstName} ${this.LastName} ,and i'm  : ${this.Age} years old`;
}

const john = new  Person('John','Smith',30);

console.log(john);
console.log(john.intro());

/*PROTOTYPAL INHERETENCE*/

function Customer(inFirstName,inLastName,inCompany,inPhone,inMembership,inAge){
  Person.call(this,inFirstName,inLastName,inAge);
  this.company = inCompany;
  this.Membership = inMembership;
  this.Phone = inPhone;
}
//inherit the prototype
Customer.prototype = Object.create(Person.prototype);
//make the prototype belongs to the cusomer
Customer.prototype.constructor = Customer;

custo1 = new Customer('john','Doe','Micrsoft','+212-26-26-37-12',1,27);
console.log(custo1);


//Override Prototype
Customer.prototype.intro = function(){
  return `hello my name is  ${this.FirstName} ${this.LastName} ,and i'm  : ${this.Age} years old and i'm a employee of the company :${this.company}`;
}
console.log(custo1.intro());
/*ALTERNATIVE WAY TO CREATE OBJECTS */

const carPrototypes = {
  speedUp:function(inCurrentSpeed){
    return ++inCurrentSpeed;
  },
  speedDown:function(inCurrentSpeed){
    return --inCurrentSpeed;
  }
};

//object dot create
//method #1
const bmw = Object.create(carPrototypes);
bmw.brand = 'BMW';
bmw.topSpeed = 300;
bmw.gears = 6;
bmw.color = 'green';

console.log(bmw);
console.log(bmw.speedUp(210));
console.log(bmw.speedDown(209));
//method #2

const ford = Object.create(carPrototypes,{
  brand: {value: 'FORD'},
  topSpeed: {value: 250},
  gears: {value: 5},
  color: {value: 'whitegray'}
});

console.log(ford);
console.log(ford.speedUp(200));
console.log(ford.speedDown(190));
