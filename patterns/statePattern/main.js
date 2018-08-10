const pageState = function(){
  let currentState = new homeState(this);
  this.init = function(){
    this.change(new homeState);
  }
  this.change = function(state){
    currentState = state;
  }
}

const homeState =function(page){
  document.querySelector('h1').textContent = null;
  document.querySelector('.content').innerHTML =  `
  <h2>Welcome</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus quas eaque doloribus consectetur, nobis accusamus eligendi? Hic delectus excepturi adipisci assumenda vitae, possimus consequuntur commodi ex officiis temporibus repellendus distinctio quae animi soluta asperiores enim aliquid accusamus architecto fugit. Provident adipisci dolores eligendi facere maxime! Libero voluptatem similique, modi quis voluptates, repellat mollitia quas iure porro veniam impedit? Dolorum officiis corrupti at inventore, ducimus facilis autem aliquid! Quis laudantium veritatis unde, voluptatibus fugiat totam distinctio blanditiis ex tempore nobis laboriosam vero quam consequatur voluptate repellendus. Doloremque atque nisi quia officiis cum quos similique aliquam! Reprehenderit totam numquam quo nam alias vitae neque fuga libero nesciunt temporibus et, ullam quidem odit, dolores sunt velit perspiciatis ut hic laudantium! Assumenda esse suscipit minima culpa nemo quaerat, dolor eaque sapiente eos ea, quidem consequuntur libero doloribus tempora voluptates maxime obcaecati repellendus. Placeat natus doloremque corrupti sed et quam iste! Distinctio odit fugit impedit iusto voluptate optio unde. Nobis sint repellendus quod temporibus earum obcaecati. Expedita odit earum quam. Explicabo id perspiciatis quo? Fugit magni velit suscipit iure nisi repudiandae quas vitae vero quos beatae, reprehenderit odit tempore molestias! Deleniti doloremque ex praesentium asperiores soluta nostrum commodi debitis necessitatibus corrupti ipsa! Fugiat quod, repellat temporibus dolor odit at perferendis iste cum quia ea repellendus quibusdam consequuntur voluptate amet minus quas eos beatae aliquam ipsam distinctio reiciendis provident delectus? Ducimus dolorem veritatis nostrum quae sequi incidunt aspernatur facilis soluta accusantium. Veniam perspiciatis, repudiandae, eius aliquam corporis adipisci eaque minima id quasi qui praesentium aperiam rerum totam aliquid dolorum nobis maiores quidem temporibus. Eligendi repellat soluta fuga earum. Dolorem quod suscipit praesentium veritatis nostrum, inventore odio beatae optio autem amet quis vel explicabo at expedita soluta error, corrupti rerum voluptas nisi tempore est voluptate ad consectetur non. Error rerum, repellat perferendis doloribus commodi suscipit ullam.</p>
  `;
};

const aboutState =function(page){
  document.querySelector('h1').textContent = "ABOUT";
  document.querySelector('.content').innerHTML =  `
    <h2>About</h2>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium culpa provident ab, vitae in, cumque possimus aliquid numquam corrupti dignissimos impedit modi, harum repudiandae beatae quas quae voluptatem nobis odit libero deleniti pariatur! Nobis nulla consequuntur, eaque repudiandae numquam dignissimos ad suscipit. Rem amet iure suscipit quod numquam cum quo modi. Repellendus, labore saepe veniam quibusdam dolore modi ab reprehenderit laborum consequuntur eum rerum alias doloribus reiciendis quae et facilis! Tempora, vero provident dolorem quia ad voluptates cumque ullam incidunt voluptas voluptatum laborum aperiam animi. Quisquam corporis odio eaque, ad hic ullam accusantium sed reiciendis molestias repudiandae! Consequatur, quis ex!
  `;
}
const contactState =function(page){
  document.querySelector('h1').textContent = "CONTACT US";
  document.querySelector('.content').innerHTML =  `
    <h2>CONTACT</h2>
    <form action="">
     <label for="">Name</label>
     <input type="text" placeholder="name">
     <br> <br>
     <label for="">email</label>
     <input type="text" placeholder="email">
     <br><br>
     <label for="">msg</label>
     <textarea type="text" placeholder="msg"></textarea>
       <br><br>
       <button type="submit">SUBMIT</button>
       <br>
       <br>
       <br>
   </form>
  `;
};
const page = new pageState();
page.init();
document.querySelector('ul').addEventListener('click',e => {
  e.preventDefault();
  if(e.target.textContent == "home"){
    page.change(new homeState);

  }else if(e.target.textContent == "about"){
    page.change(new aboutState);
    
  }else if(e.target.textContent == "contact"){
    page.change(new contactState);
    
  }
})
