//iterators 

//function that gives us a book every time its called

function booksIterator(inBooks){
  let nextIndex = 0;
  return {
    next : function(){
      return nextInhjuzjzxdex < inBooks.length ?
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
//call the iterator

const book = booksIterator(books);

document.querySelector('button').addEventListener('click',loadBook);
function loadBook(e){
  //get book 
 let tr = document.createElement('tr');
 let curentBook = book.next();
 if(!curentBook.done){
  tr.innerHTML = `
  <td>${curentBook.value.title}</td>
  <td>${curentBook.value.author}</td>
  <td>${curentBook.value.year}</td>
  `;
  document.querySelector('tbody').appendChild(tr);
 }else{
   e.target.style.display = "none";
 }
 

  
}
