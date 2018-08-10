

const  book = new Book();

// book.listBooksCallback(function(books){
//   books = JSON.parse(books);
//   const ui = new UI();
//   books.forEach(function(book,index){
//     const  boook = new Book(book.title,book.author,book.publisher,book.year);
//   //here the id of every book is auto generated
//   ui.listBook(boook);
// });
// });
book.listBooksPromise()
.then(function(data){
  data = JSON.parse(data);
  const ui = new UI();
  data.forEach(function(book){
    const  boook = new Book(book.title,book.author,book.publisher,book.year);
  //here the id of every book is auto generated
  ui.listBook(boook);
})
})
.catch(function(err){
  let div = document.createElement('div');
  
  div.innerHTML = `<p>something when wrong : ${(err == 404) ? "file not found & code erro :"+err:"data loaded"}</p>`;
  document.querySelector('.row ').appendChild(div);
  div.classList.add('error');
  
});
