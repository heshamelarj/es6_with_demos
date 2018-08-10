let self;
function easyHTTP(){

  this.http = new XMLHttpRequest();
   self = this;
}

easyHTTP.prototype.get = (url) => (new Promise((resolve,reject) => {
  console.log(self);
  
  self.http.open('GET',url ,true);
  self.http.onload = () =>  {
    if(self.http.status === 200){
      resolve(self.http.responseText)
    }else{
      reject(self.http.status);
    }
  }
  self.http.send();
}))
  
  
   
    
  

  

