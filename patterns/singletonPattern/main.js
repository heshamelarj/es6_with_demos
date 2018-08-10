const Singleton = (() =>{
  let instance;
  function createInstance(){
    const object = new Object();
    return object;
  }
  return {
    getInstance : function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})()

const obj = Singleton.getInstance();

const objj = Singleton.getInstance();

console.log(obj);
console.log(objj);

console.log(obj == objj);
console.log(obj === objj);


