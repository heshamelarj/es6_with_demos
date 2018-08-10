//maps 
const person = new Map();
//keys
const name = (name) => name,
      age = "the age of the person",
      gender = "gender of person male/female";

//set values
person.set(name,"Hicham");
person.set(age,"26");
person.set(gender,"Male");

//iterate maps  get key and value

for(let [key,value] of person){
  console.log(`${key} : ${value}`);
  
}
console.log('\n');

//iterate maps  get values

for(let val of person.values()){
  console.log(`${val}`);
  
}
console.log('\n');
//iterate maps  get keys

for(let key of person.keys()){
  console.log(`${key}`);
  
}
console.log('\n');

//convert maps to arrays 

const array = Array.from(person);
console.log(array);
console.log('\n');
//get values to array 
const arrayVals = Array.from(person.values());
console.log(arrayVals);
console.log('\n');
//get keys to array 
const arrayKeys = Array.from(person.keys());
console.log(arrayKeys);
console.log('\n');