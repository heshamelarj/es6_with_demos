const xhr = new easyHTTP();
xhr.get("books.json")
.then(data => {
  let output = "";
  JSON.parse(data).forEach(book => {
    output = `
    <li>${book.title}</li>
    `
    document.body.innerHTML += output
  })
  
})
.catch(err => {
  console.log(err);
  
})