const posts = [
  {title:"Post one",body:"this is post number one"},
  {title:"Post two",body:"this is post number two"},
  {title:"Post three",body:"this is post number three"}
];

//create post
 function createPost(post,callback){
   setTimeout(function(){
     posts.push(post);
     callback();
   },2000)
 }

 //getPosts
 function getPosts(){
   setTimeout(function(){
     let output = "";
     posts.forEach(function(post){

       output += `<li>${post.title}</li>
       <div>${post.body}</div>
       `;
     });
     document.body.innerHTML = output;
   },1000)
 };




 createPost({title:"post four",body:"this is post number four"},getPosts);
