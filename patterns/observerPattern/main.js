function EventObserver(){
  this.observers = [];
}

EventObserver.prototype = {
  subscribe : function(fn){
  
    
    if(this.observers.indexOf(fn) == -1)
    {
      this.observers.push(fn);
 
      document.querySelector('.text-erea > .msg-p').innerText = `You Are now Subsucribed to [ ${fn.name} ]\n`;
      document.querySelector('.text-erea > .msg-p').innerText = `number of functions you are Subscribed to are : [ ${this.observers.length} ]\n`;

    }
      
   
      
    
  },
  unsubscribe : function(fn){
    if(this.observers.indexOf(fn) !== -1){
      this.observers = this.observers.filter(function(item){
        if(item !== fn){
          return item;
        }
      })
  
      document.querySelector('.text-erea > .msg-p').innerText = `You Are now Unsubsucribed from [ ${fn.name} ]\n`;
      document.querySelector('.text-erea > .msg-p').innerText = `left number of functions you are Unsubscribed to are : [ ${this.observers.length} ]\n`;
      
    }
   
    
    
  },
  fireTwo : function(){
    this.observers.forEach(fn => {
      if(fn.name != "colorClock")
      fn.call();
    });
  }
  ,
  fireOne : function(){
    this.observers.forEach(fn => {
      if(fn.name == "colorClock")
      fn.call();
    });
  }
  
}


const click = new EventObserver();
document.getElementById('subsToColor').addEventListener('click',function(){
  click.subscribe(colorClock);

});
document.getElementById('unsubsFromColor').addEventListener('click',function(){
  click.unsubscribe(colorClock);

});


document.getElementById('subs').addEventListener('click',function(){
  click.subscribe(sayHello);

});




document.getElementById('subsToHi').addEventListener('click',function(){
  click.subscribe(sayHi);
});
document.getElementById('subsToFuck').addEventListener('click',function(){
  click.subscribe(sayCheese);
});
document.getElementById('unsubsFromHi').addEventListener('click',function(){
  click.unsubscribe(sayHi);
});
document.getElementById('unsubsFromFuck').addEventListener('click',function(){
  click.unsubscribe(sayCheese);
});
document.getElementById('unsubs').addEventListener('click',function(){
  click.unsubscribe(sayHello);
});

//fire functions

document.getElementById('fireTwo').addEventListener('click',function(){
  click.fireTwo();
})

document.getElementById('fireOne').addEventListener('click',function(){
  click.fireOne();
})

//say hello 

const sayHello = function(){
 
  document.querySelector('.text-erea > .text-erea-p').innerHTML += `<li>HELLO WORLD\n</li>`;
}

const sayHi = function(){
  
  document.querySelector('.text-erea > .text-erea-p').innerHTML += `<li>HI THERE\n</li>`;
  
}

const sayCheese = function(){

  document.querySelector('.text-erea > .text-erea-p').innerHTML += `<li>CHEEESE\n</li>`;
  
}
//color clock 
function getCurrentTimeToHex(callback){
  let time = new Date();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let ms = time.getMilliseconds();
  let msFlour = Math.floor(ms/10);
  console.log(msFlour);
  
  if(minutes < 10 || seconds < 10 || msFlour < 10){
   
    if(minutes < 10){
      minutes = `0${minutes}`;
    }
    if(seconds < 10){
      seconds = `0${seconds}`;
    }
    if(msFlour < 10){
      msFlour = `0${msFlour}`;
    }
  }
   

   
   
   
   
  
  return callback(msFlour,seconds,minutes);
  
}

  function convertToHex(inMs,inSec,inMins){
  return `#${inMs}${inSec}${inMins}`
}


//give the body a bg based on the time
function initDOM(){
  document.querySelector('.clock-color').style.height = "80vh";
  document.querySelector('.paragraph').style.textAlign = "center";
  document.querySelector('.paragraph').style.fontSize = "3em";
  document.querySelector('.paragraph').style.paddingTop= "40vh";
}
initText();
function initText(){
  document.querySelector('.text-erea').style.height = "80vh";
  document.querySelector('.text-erea > .text-erea-p').style.textAlign = "center";
  document.querySelector('.text-erea > .text-erea-p').style.fontSize = "1m";
  document.querySelector('.text-erea > .text-erea-p').style.paddingTop= "1vh";
  document.querySelector('.text-erea').style.height = "80vh";
  document.querySelector('.text-erea > .msg-p').style.textAlign = "center";
  document.querySelector('.text-erea > .msg-p').style.fontSize = "1m";
  document.querySelector('.text-erea > .msg-p').style.paddingTop= "10vh";
}

function colorClock(){
  initDOM();
  
    const interval = setInterval(function(){
      console.log('inerval');
      if(click.observers.indexOf(colorClock) != -1){
        document.querySelector('.clock-color').style.opacity = "1"
        document.querySelector('.clock-color').style.transition = "all .3s ease-in";
      document.querySelector('.paragraph').innerText = getCurrentTimeToHex(convertToHex);
      document.querySelector('.clock-color').style.backgroundColor = getCurrentTimeToHex(convertToHex);
      
      
    }else{
      
      document.querySelector('.clock-color').style.opacity = "0"
      clearInterval(interval);
    }

  
    
    },1000/100)
 
 
}





// setInterval(getCurrentTimeToHex(convertToHex),1000/10);


