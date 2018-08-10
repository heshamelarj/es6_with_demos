//using fetch and async await
 getBooks = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getBooks('books.json')
.then(books => {
  let output = `<li>${books[0].title}</li>`;
  books.forEach((book,i) => {
    if(i>=1){
      output += `
    <li>${book.title}</li>
    `
    }
    
  });
  document.body.innerHTML = output;
})