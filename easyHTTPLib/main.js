const http = new easyHTTP();

/*http.get('moviess.json',function(err,movies){
  if(err){
    console.log(err);
    
  }else{
    console.log(JSON.parse(movies));
    
  }
});*/
/*
http.post('moviess.json',{title:"movies five",body:"this is movie five"},function(err,post){
  if(post)
  console.log(post);
  else
  console.log("error "+err);
  
  
});*/
http.put("moviess.json/1",{title:"movies one updated",body:"movie number one has been updated"},function(err,post){
  if(post){
    console.log(post);
    
  }else{
    console.log(err);
    
  }
})

http.delete("moviess.json/2",function(err,resp){
  if(resp){
    console.log(resp);
    
  }else{
    console.log(err);
    
  }
})
