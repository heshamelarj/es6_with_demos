//create a symbol
const sym_1 = Symbol();
//symbol with idetifier
const sym_2 = Symbol('sym_2');

console.log(sym_1 == sym_2); // two symbols not the same

// add a symbol to an object

const person = {name:"Hicham EL-ARGEOUNI"};

person[sym_1] = "email";

console.log(person);

//can't loop through symbols

const symbol_1 = symbol_2 = symbol_3 = symbol_4 = Symbol();

const objectOfSymbols =  {};
objectOfSymbols[symbol_1] = "symbol_1";
objectOfSymbols[symbol_2] = "symbol_2";
objectOfSymbols[symbol_3] = "symbol_3";
objectOfSymbols[symbol_2] = "symbol_4";
objectOfSymbols.symbol_5 = "thsi is a attr_5 not a symbol"
objectOfSymbols.symbol_6 = "thsi is a attr_6 not a symbol"
objectOfSymbols.symbol_7 = "thsi is a attr_7 not a symbol"
objectOfSymbols.symbol_8 = "thsi is a attr_8 not a symbol"

for(let i in objectOfSymbols){
  console.log(i);
  
  console.log(`${i} : ${objectOfSymbols[i]}`);
  
}

//JSON.stringify won't give you anything when used with a JSON object that has a symbol

const jsonObj = 
{
  name : "John Doe",
  email : "jdoe@gmail.com",
  [Symbol('symb1')] : "prop3"
}

console.log(JSON.stringify(jsonObj,null,4)); // {name : "John Doe" , email : "jdoe@gmail.com"}
//as you can see in the output there is no symbole logged

