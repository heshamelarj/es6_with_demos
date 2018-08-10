// 0- use an IDs generator
function* idGenerator(){
  let id = 1;
  while(true){
    yield id++;
  }
}
// 1- get books using fetch API
fetch('../data/books.json')
.then(resp => {
  return resp.json();
})
.then(data => {
  //do what we gotta do to laod books to the table with ids of books as ids for TRs 
  //and for ids we'll use a genrator
  const idg = idGenerator();
  data.forEach(book => {
    let tr = document.createElement('tr');
    const currentID = idg.next();
    tr.id = `book_${currentID.value}`; 
    tr.classList.add('book');
    console.log('hello');
    
    tr.innerHTML = 
    `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.publisher}</td>
    <td>${book.year}</td>
    `;

    document.querySelector('tbody').appendChild(tr);
  });
})

document.querySelector('table').addEventListener('click',bookClicked);

//bookClicked 

function bookClicked(e){
  let target = e.target;
  // console.log(target);
  
  if(target.parentElement.classList.contains('book')){

    
    let tds = (target.parentElement.innerText).split("	"); //split the innerText of tr by double space
    let [title,author,publisher,year] = tds; //destructuring the tds text into for variables
    
    //now target bookDisplay div 
    const bookDisplay = document.getElementById('displayBook');
    console.log(bookDisplay.querySelector('strong:nth-of-type(1)'));
    
    bookDisplay.querySelector('div:nth-of-type(1) > span').innerText = title != "" ? title : "NON";
    bookDisplay.querySelector('div:nth-of-type(2) > span').innerText = author != "" ? author : "NON";
    bookDisplay.querySelector('div:nth-of-type(3) > span').innerText = publisher != "" ? publisher : "NON";
    bookDisplay.querySelector('div:nth-of-type(4) > span').innerText = year != "" ? year : "NON";
    console.log(title);
    console.log(author);
    console.log(publisher);
    console.log(year);
    tds = null;

     title = author = publisher = year = null;
 
  }
}