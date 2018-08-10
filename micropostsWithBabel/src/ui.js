class UI {
  constructor(){
    this.postContainer ;
    this.postHeader ;
    this.postBody ;
    this.postId  ;
  }
  displayPosts(posts){
            document.querySelector('.left-posts').innerHTML = null;
        document.querySelector('.right-posts').innerHTML = null;

    let output ;
    for(let i = 0 ;i < posts.length;i++) {
      this.postContainer = document.createElement('div');
    this.postHeader = document.createElement('h5');
    this.postBody = document.createElement('div');
    this.postId  = document.createElement('input');
    this.postId.setAttribute('type',"hidden");
      if(i < (posts.length/2)){
        this.postHeader.innerText = posts[i].title;
        this.postBody.innerText = posts[i].body;
        this.postId.value = posts[i].id;
       
        this.postContainer.appendChild(this.postHeader);
        this.postContainer.appendChild(this.postBody);
        this.postContainer.appendChild(this.postId);
        document.querySelector('.left-posts').appendChild(this.postContainer);
      }else{
        this.postHeader.innerText = posts[i].title;
        this.postBody.innerText = posts[i].body;
        this.postId.value = posts[i].id;
       
        this.postContainer.appendChild(this.postHeader);
        this.postContainer.appendChild(this.postBody);
        this.postContainer.appendChild(this.postId);
        document.querySelector('.right-posts').appendChild(this.postContainer);
      }
    };
  }
  checkInputs(){
    let titleInp = document.querySelector('.post-title').value;
    let bodyInp = document.querySelector('.post-body').value;
    if(titleInp.trim().length > 0 && bodyInp.trim().length > 0){
      return true;
    }
    return false;
  }
  getData(){
    let titleInp = document.querySelector('.post-title').value;
    let bodyInp = document.querySelector('.post-body').value;
    let post = {
      title : titleInp,
      body : bodyInp
    }
    return post;

  }
  showAlert(msg,classes){
    let msgBox = document.createElement('div');
    setTimeout(function(){
       document.querySelector('#msgBox').remove();
    },3000);

    if(!document.querySelector('#msgBox')){
      msgBox.innerText = msg;
  
      let CLSS = classes.split(" ");
      console.log(CLSS);
      
      CLSS.forEach(theClass => {
        msgBox.classList.add(theClass);
        
      });
      msgBox.style.padding =".5em";
      msgBox.id= "msgBox";
      msgBox.style.height = "3em";
      msgBox.style.width = "100%";
      let marker =document.querySelector('#posts');
      marker.insertBefore(msgBox,document.querySelector('.left-posts'));

    }
    
  }
}

export const ui = new UI();