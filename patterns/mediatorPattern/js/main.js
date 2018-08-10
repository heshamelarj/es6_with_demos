//MEDIATOR PATTERN 
//CHATROOM EXAMPLE 
/*UI */
function UI(){
  this.container ;
  this.labell ;
  this.texterea ;
  this.button ;
  this.containerInner;
  this.select;
  this.option;
}
UI.prototype = {
  initUI : function(){
    this.container = document.createElement('div');
    this.containerInner = document.createElement('div');
    this.labell = document.createElement('label');
    this.texterea = document.createElement('textarea');
    this.button = document.createElement('button');
    this.select = document.createElement('select');
     
    this.button.innerText = "SEND";
    this.container.classList.add('user-container');
   
  },
  buildUser : function(inMsg,inFrom,inUsers,inTo){
    this.initUI();
    // console.log(this.labell);
    this.labell.innerText = inFrom.name;
    this.texterea.innerText = inMsg ;
    this.texterea.id = inFrom.name;
    this.containerInner.appendChild(this.labell);
    this.containerInner.appendChild(this.texterea);
    //select of users
    this.option = document.createElement('option'); 
    this.option.innerText = "Send To ALL";
    this.option.setAttribute('value',"all");
    this.select.appendChild(this.option);
    for(key in inUsers){
      if(inUsers[key] !== inFrom){
     
        this.option = document.createElement('option'); 
        this.option.innerText = inUsers[key].name;
        this.option.setAttribute('value',key);
        this.select.appendChild(this.option);
      }
    }
    this.containerInner.appendChild(this.select);
    this.button.classList.add('user');
    this.containerInner.appendChild(this.button);
    this.container.appendChild(this.containerInner)
    let firstDiv = document.querySelector('.twelve.columns');
    firstDiv.appendChild(this.container);
    
  },
  recieveMSg : function(inMsg,inFrom,inTo){
    let usersScreens = document.querySelectorAll('textarea');
    usersScreens.forEach(function(txtarea){
      if(txtarea.id != inFrom.name && txtarea.id == inTo.name){
        txtarea.innerText = inMsg+" \n from :"+inFrom.name;
      }
    });
  }
}
const ui = new UI();
/*USER*/
function User(inName){
  this.name = inName;
  this.chatroom = null;
}
User.prototype = {
  send : function(msg,from,to){ 
    this.chatroom.send(msg,from,to);
  },
  recieve : function(msg,from){
    ui.recieveMSg(msg,from,this);
  },
}
/*CHATROOM*/
function Chatroom(){
  this.users = {};
}
Chatroom.prototype = {
  register : function(inUser){
    inUser.chatroom =this;
    this.users[inUser.name] = inUser;
  },
  send :function(msg,from,to) {
    //send to one user
    if(this.users[to]){
      this.users[to].recieve(msg,from)
    }else{
      for(key in this.users){
        if(this.users[key] !== from){
          this.users[key].recieve(msg,from);
        }
      }
    }
    //brodcast msg to all users except the sender
  },
  listUsers : function(){
    for( key in this.users){
      ui.buildUser("",this.users[key],this.users)
    }
  }
}
//run text in console 
const hicham = new User('hicham');
const ahmad = new User('ahmad');
const jack = new User('jack');
const john = new User('John')
const lilBaby = new User('LILB')
const keven = new User('Kevin')

const Chatroom1 = new Chatroom();
Chatroom1.register(hicham);
Chatroom1.register(ahmad);
Chatroom1.register(jack);
Chatroom1.register(john);
Chatroom1.register(lilBaby);
Chatroom1.register(keven);
Chatroom1.listUsers();
// ahmad.send('Hello EVery One',ahmad);
//event 
document.querySelector('.twelve.columns').addEventListener('click',function(e){
  if(e.target.classList.contains('user')){
    let parent = e.target.parentElement;
    let msgToSend = parent.querySelector('textarea');
    let sendTo = parent.querySelector('select').value;
    if(sendTo == "all"){
      
      switch (msgToSend.id) 
      {
        case  "hicham" :
        {
         hicham.send(msgToSend.value,hicham);
        }
        break;
        case  "ahmad" :
        {
         ahmad.send(msgToSend.value,ahmad);
        }
        break;
        case  "jack" :
        {
         jack.send(msgToSend.value,jack);
        }
        break;
        case  "john" :
        {
         john.send(msgToSend.value,john);
        }
        break;
        case  "LILB" :
        {
         lilBaby.send(msgToSend.value,lilBaby);
        }
        break;
        case  "Kevin" :
        {
         keven.send(msgToSend.value,keven);
        }
        break;
      }
    }else
    {
      switch (msgToSend.id) 
       {
         case  "hicham" :
         {
          hicham.send(msgToSend.value,hicham,sendTo);
         }
         break;
         case  "ahmad" :
         {
          ahmad.send(msgToSend.value,ahmad,sendTo);
         }
         break;
         case  "jack" :
         {
          jack.send(msgToSend.value,jack,sendTo);
         }
         break;
         case  "john" :
         {
          john.send(msgToSend.value,john,sendTo);
         }
         break;
         case  "LILB" :
         {
          lilBaby.send(msgToSend.value,lilBaby,sendTo);
         }
         break;
         case  "Kevin" :
         {
          keven.send(msgToSend.value,keven,sendTo);
         }
         break;
       }
    }
  }
})