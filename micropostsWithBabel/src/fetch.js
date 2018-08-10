class easyHTTP {
  constructor(){

  }
  //get 
  async get(url){
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }
  //post data to json api / file
  async post(url,data){
    const resp = await fetch(url,{
      method : "POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(data)
    });
    return resp; 
  }
}

export const http = new easyHTTP();