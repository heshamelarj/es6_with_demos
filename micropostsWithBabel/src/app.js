import { post } from './posts'
import { ui } from './ui'
post.getPosts()
.then(data => {
//call ui display posts method
ui.displayPosts(data);
})
document.querySelector('button').addEventListener('click',function(){
  //check for inputs validity 
  if(ui.checkInputs()){
    
    ui.showAlert("Post Has been posted succefully","green green-text text-lighten-5")
    // console.log(ui.getData());
    
    post.submitPost(ui.getData());
    post.getPosts().then(data => {
      ui.displayPosts(data);
    })
    
  }else{
    //show empty inputs alert
    ui.showAlert("Please Fill the inputs !","materialize-red orange-text text-lighten-5")
    
  }
  // post.submitPost();
})



