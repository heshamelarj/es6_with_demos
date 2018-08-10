//iterators 

//function that gives us a book every time its called

function booksIterator(inBooks){
  let nextIndex = 0;
  return {
    next : function(){
      return nextIndex < inBooks.length ?
      {value : inBooks[nextIndex++] , done : false} :
      {done : true }
    }
  }
}
//create books objects array

const books = [
  {
    title : "The Fontainhead",
    author : "AYN RAND",
    year : "1943"
  },
  {
    title : "Rich Dad Poor Dad",
    author : "RObert T.Kiyosaki",
    year : "2000"
  },
  {
    title : "The 8th Habit",
    author : "Stephen Covey",
    year : "2003"
  },
  {
    title : "Awaiken The Giant Within",
    author : "Tonny Robins",
    year : "2007"
  },
  {
    title : "The Power Of Now",
    author : "Echhart Tolle",
    year : "2010"
  },
  {
    title : "Great Expectations",
    author : "Charles Dickens",
    year : "2002"
  }
  
];


//IDs generator
function* idsGenerator(inStartId){
  while(true){
    yield inStartId++;
  }
}
const booksWithIds = booksIterator(books);
const booksIdgenrator = idsGenerator(1);

document.getElementById('loadbooks').addEventListener('click',laodBooksWithIds);

//laod books with IDs using Iterator for book loading and a generator fo ID atachment
function laodBooksWithIds(e){
  let currentBook = booksWithIds.next();
  let currentID = booksIdgenrator.next();
  console.log(currentBook);
  
  if(!currentBook.done){
    let tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${currentID.value}</td>
    <td>${currentBook.value.title}</td>
    <td>${currentBook.value.author}</td>
    <td>${currentBook.value.year}</td>
    `;
    document.querySelector('tbody').appendChild(tr);
  }else{
    document.querySelector('input').setAttribute('disabled','true');
    document.querySelector('input').setAttribute('value',"Books Loaded"); 
  } 
}