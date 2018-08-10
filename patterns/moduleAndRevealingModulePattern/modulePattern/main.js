//standard module
const UICtrl = (function(intxt){
  //thsi section is private 
  const addH1 = function(){
    const h1 = document.createElement('h1');
    h1.innerText = intxt;
    document.body.appendChild(h1);
  }
  //thsi section is public 
  return {
     callAddH1 : function(){
      addH1(intxt);
    }
  }
})("Hello Module");


UICtrl.callAddH1();