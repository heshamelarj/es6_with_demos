//create the table elements

const tbody = document.querySelector('tbody');
const tr = document.createElement('tr');


drawTable = function(xhrResponse){
  //structure the table
  //manage data
  let i = 0;
  setTimeout(function() {
    if(xhrResponse != null && xhrResponse != undefined){
      let lines = xhrResponse.split(';');
      let trs = [];
      for( i = 0 ;i < lines.length ;i++){
      
        trs.push(lines[i].split(','));
      }
    
      //parse data to tds
      for(let i = 0 ;i < trs.length ;i++){
        const tr = document.createElement('tr');
        let tds = [];
        for(let j = 0; j< trs[i].length;j++){
      
          let td = document.createElement('td');
          //check if we hav a publicher in table
          td.innerText = trs[i][j];
          tds.push(td)
      
        }
        if(tds.length == 3){
        tr.innerHTML = 
        `
        <td>${tds[0].innerText}</td>
        <td>${tds[1].innerText}</td>
        <td>${' '}</td>
        <td>${tds[2].innerText}</td>
        
        `
        }else if(tds.length == 2){
        tr.innerHTML = 
        `
        <td>${tds[0].innerText}</td>
        <td>${tds[1].innerText}</td>
        <td>${' '}</td>
        <td>${' '}</td>
        `
        }else if(tds.length == 4){
        tr.innerHTML = 
        `
        <td>${tds[0].innerText}</td>
        <td>${tds[1].innerText}</td>
        <td>${tds[2].innerText}</td>
        <td>${tds[3].innerText}</td>
        `
       }
  
       tds = null; 
       tr.classList.add('animate-data-loading');
       
       setTimeout(function(){
       tbody.appendChild(tr);
        if(trs[i] == trs[i].length-1){
          document.getElementById('loadData').innerText = 'DATA LOADED'
        }
       },(300 * i));
      }
    }else{
      document.getElementById('loadData').setAttribute('disabled','true');
    
      
    }
    
  },(600))
    
}
 function loadData (){
  const xhr =  new XMLHttpRequest();
  //opening xhr
  xhr.open('GET','../data/books.txt',true);
  //load data
  xhr.onprogress = function(){
 
    document.getElementById('loadData').innerText = 'DATA IS LOADING ...';
   
 
    
  }
  let checkStatus = true;
    xhr.onload = function () { 
      if(this.status == 200){
        console.log('all is ok');
        //everything is ok
        drawTable(this.responseText); 
        
      }
  
 
 
    
  
  
    
    }
    xhr.send(); 
    return checkStatus;
 }
//add event listener for button
document.getElementById('loadData').addEventListener('click',function (e) {
  e.preventDefault();
   
 let data = loadData();
 if(data == true){
   drawTable(null);
 }
  
})
