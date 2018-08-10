//{2,} : matches two or more alphabets
//\s : matches a space
//\w : matches a word alphanumric caracter or underscore
//\w+ = matches w word alphanuric or more 
const fullname = /^[aA-zZ]{2,}\s((\w+)\s)?((\w+)|(\w+\-\w+)|(\w+\.\w+))$/;
const fname = /^[aA-zZ]{2,}$/;
const mname = /^((\w+)\s)?$/;
const lname = /^((\w+)|(\w+\-\w+)|(\w+\.\w+))$/;
const cin = /^[aA-zZ]{2}[0-9]{5}$/; //start with two letters and end with 6 number
// ?: optional characters 
//.: matches any one caracter                                                                                 
//*: matches any carachter 0 or more times 
//[00\+] : matches 00 or + ( theoracly )
//(00|\+) : matches 00 or + (praticly )
const phone = /^(00|\+)2125(\-[0-9][0-9]){4}$/;
const mobile = /^(00|\+)2126(\-[0-9][0-9]){4}$/;
const email = /^([aA-zZ]){5,20}[\_\.]?([aA-zZ]){4,15}([0-9]{1,6})?[\@](gmail|hotmail|outlook)\.(com|org|net)$/;



const fullnameInput = document.getElementById('fullname');
const fnameInput = document.getElementById('fname');
const mnameInput = document.getElementById('mname');
const lnameInput = document.getElementById('lname');
const cinInput = document.getElementById('cin');
const phoneInput = document.getElementById('phone');
const mobileInput = document.getElementById('mobile');
const emailInput = document.getElementById('email');

console.log(phone);


document.querySelector('button').addEventListener('click',e => {
  if(cin.test(cinInput.value)) alert('valid cin');
  else alert('not valid cin');
  if(phone.test(phoneInput.value)) alert('valid phone');
  else alert('not valid phone');
   if(mobile.test(mobileInput.value)) alert('valid mobile');
  else alert('not valid mobile');
  if(email.test(emailInput.value)) alert('valid email');
  else alert('not valid email');
  if(fullname.test(fullnameInput.value)) alert('valid fullname');
  else alert('not valid fullname');
  if(fname.test(fnameInput.value)) alert('valid fname');
  else alert('not valid fname');
  if(mname.test(mnameInput.value)) alert('valid mname');
  else alert('not valid mname');
  if(lname.test(lnameInput.value)) alert('valid lname');
  else alert('not valid lname');
  
})