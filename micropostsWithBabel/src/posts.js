/**
 * I'm Using npm json-server to save posts to a local json file called db.json 
 */

 import { http } from './fetch';
 class Post{
   constructor()
   {
     this.id;
     this.title;
     this.body;
   }
   getPosts(){
    const posts = http.get('http://localhost:3000/posts/');
    
    return posts;
    
   }
   submitPost(data){
     const post = http.post('http://localhost:3000/posts',data);
      return post
     
   }
 }

 export const post = new Post();