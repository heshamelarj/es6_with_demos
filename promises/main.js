const posts = [];
createPost = function(post){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      posts.push(post);
      //just trying th reject func
      const success = false;
      if(success){
        resolve();
      }else{
        reject("there been some error");
      }
      
      
    },2000)
  })

}

getPosts = function(){
  setTimeout(function(){
    let output;
    posts.forEach(function(post){
      if(output != undefined){
         output +=
       `
      <li>${post.id}</li>
      <li><string>${post.title}</string></li>
      <li>${post.body}</li>
      <br>
      `
      }else{
        output =
        `
       <li>${post.id}</li>
       <li><string>${post.title}</string></li>
       <li>${post.body}</li>
       <br>
       `
      }
     
    })
    if(output != undefined){
      document.body.innerHTML = output;
    }
   
    console.log(output);
    
  },1000)
}



//main

const postss = [
  {
    id:"01",
    title:"POST ONE",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum deleniti accusantium nesciunt ullam."
  },
  {
    id:"02",
    title:"POST TWO",
    body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nobis delectus assumenda doloremque sapiente eveniet aspernatur quidem aliquam ex corporis, quisquam esse ipsam blanditiis tempora! Amet quas voluptatem repellendus minima quaerat, iusto magni soluta? Dolores aliquam repellendus dignissimos adipisci illum enim! Temporibus delectus quidem quibusdam, non officiis laudantium, voluptatum hic animi vitae, distinctio nesciunt obcaecati deleniti. Necessitatibus amet, non voluptate et itaque nam dicta nobis at tempore optio vel! Voluptatibus, mollitia cumque deserunt, ab sint aperiam pariatur magni fugit sit facilis alias. Veritatis obcaecati earum odit iste nulla ex pariatur quis architecto numquam, quaerat hic eos vero minus? Dolor, soluta!"
  },
  {
    id:"03",
    title:"POST THREE",
    body:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad veniam quas numquam officia. Delectus, facilis cupiditate ut beatae ullam qui cum inventore laborum perferendis magni corporis in veniam molestiae atque dolor consequuntur quod? Mollitia vitae vero doloribus architecto praesentium. Rerum, tempore voluptates? Ducimus cumque laudantium optio praesentium voluptatum deserunt eaque vitae cum accusantium quas atque ab, quos quaerat aspernatur. Quo ipsa quod odio perspiciatis reprehenderit nihil, necessitatibus tempore tempora ratione vero voluptates, amet quae ipsum ut fugit vitae error repellendus nisi maiores inventore delectus rem repellat! Commodi ab, necessitatibus accusantium, quae perspiciatis repellat ea voluptas molestias nesciunt aliquid eveniet quasi dolore eaque eos corporis debitis laudantium repudiandae nam at."
  }
];

createPost(postss[0])
.then(getPosts)
.catch(function(err){
  console.log(err);
  
});
 
// createPost(postss[1]).then(getPosts);
// createPost(postss[2]).then(getPosts);

