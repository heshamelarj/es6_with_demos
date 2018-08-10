/* ARRAW FUNCTION */
function hello(msg){
  console.log(msg);
}
//arraw function 
helloArr = msg => console.log(msg);

hello('this a normal fonction call');
helloArr('an arrow function call');


//return function 
const names = ["HICHAM","MOHAMMED","AYMAN"];
//return length of names

function nameLength(names){
  return names.map(function(name){
    return name.length;
  })
}

console.log(nameLength(names));


//the same with arrow functions 

nameLengthArr = names => (names.map(name => name.length));

console.log(nameLengthArr(names));


