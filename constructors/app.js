//constructor
function Person(name){
  this.name = name;
}
const hicham = new Person('hicham');
console.log(hicham);
//default constructors
const getSum1 = function(x,y){
  return x+y;
}
const getSum2 = new Function('x','y','return x+y');

console.log(getSum2(2,3));
