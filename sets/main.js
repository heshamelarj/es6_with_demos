//SETS 
const ids = new Set();
// add values
for(let i = 0 ;i < 40;i++ ){
  ids.add(`ID_00_${i}`);
}

//SET'S size

console.log(ids.size);

// loop through sets 

ids.forEach(id => {
  console.log(id);
})
//delete a value

ids.delete('ID_00_0');

console.log(ids.size);

//check if a value exists 

console.log(ids.has('ID_00_0') ? "VALUE EXISTS " : "VALUE DOES NOT EXIST");
