
document.getElementById('fetchTxt').addEventListener('click',fetchText);
document.getElementById('fetchJson').addEventListener('click',fetchJson);

function fetchText(){
  fetch("texts.txt")
  .then(function(resp){
    return resp.text();
  })
  .then(function(data){
    //loop true data

    let array = data.split(',');
    console.log(array);
    
    array.forEach(function(arr){
      document.querySelector('.output').innerHTML += `
      <p>${arr}</p>;
      `
    })
    
   
  }).catch(function(err){
    console.log(err);
    
  })
}

function fetchJson(){
  let table = `
  <table>
  <thead>
  <tr class="no-fade">
  <td>TITLE</td>
  <td>AUTHOR</td>
  <td>PUBLISHER</td>
  <td>YEAR</td>
  </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `;
  document.querySelector('.output').innerHTML= table;
  fetch("books.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    
    data.forEach(function(book,index){
      setTimeout(function(){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.publisher}</td>
        <td>${book.year}</td>
        `;
        
  
        document.querySelector('tbody').appendChild(tr); 
        tr.classList.add('fade-in');
      },1000 * index)
   
    })
    
   
    
  }).catch(function(err){
    console.log('somethig went wrong '+err);
    
  })
}

function fetchUsers(){
  let table = `
  <table>
  <thead>
  <tr class="no-fade">
  <td>UserName</td>
  </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `;
  document.querySelector('.output').innerHTML= table;
  fetch("https://api.github.com/users")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    
    data.forEach(function(user,index){
      setTimeout(function(){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${user.login}</td>
        `;
        
  
        document.querySelector('tbody').appendChild(tr); 
        tr.classList.add('fade-in');
      },1000 * index)
   
    })
    
   
    
  }).catch(function(err){
    console.log('somethig went wrong '+err);
    
  })
}