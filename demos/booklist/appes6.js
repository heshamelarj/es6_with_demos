//class
class Book {

  constructor(inTitle,inAuthor,inYear) {
    this.title = inTitle;
    this.author = inAuthor;
    this.year = inYear;
    this._id = Book.counter;
  }
  //get id
  get id(){
    return this._id;
  }
  //get counter
  static get counter(){
    Book._counter = (Book._counter || 0) + 1;
    return Book._counter;
  }
  //methods
  addBook(inBook){
    if(inBook != null){
      //set book
      let titles,authors,years;
      if(localStorage.getItem('titles') === null && localStorage.getItem('authors') === null && localStorage.getItem('years') === null){
         titles = [];
         authors = [];
         years = [];
       }else{
         titles = JSON.parse(localStorage.getItem('titles'));
         authors = JSON.parse(localStorage.getItem('authors'));
         years = JSON.parse(localStorage.getItem('years'));
       }
      titles.push(inBook.title);
      authors.push(inBook.author);
      years.push(inBook.year);
      localStorage.setItem('titles',JSON.stringify(titles));
      localStorage.setItem('authors',JSON.stringify(authors));
      localStorage.setItem('years',JSON.stringify(years));
    }
  }
  removeBook(inBookIndex){
    if(inBookIndex != null){
      let titles = [], authors =[] , years = [];
      //get all titles authors and years to delete the selected index
      titles = JSON.parse(localStorage.getItem('titles'));
      authors = JSON.parse(localStorage.getItem('authors'));
      years = JSON.parse(localStorage.getItem('years'));
      titles.splice(inBookIndex,1);
      authors.splice(inBookIndex,1);
      years.splice(inBookIndex,1);
      // clear the localStorage
      localStorage.clear();
      //storage the new arrays
      localStorage.setItem('titles',JSON.stringify(titles));
      localStorage.setItem('authors',JSON.stringify(authors));
      localStorage.setItem('years',JSON.stringify(years));
    }
  }
}
//ui class
class Ui {
  constructor() {

  }
  createElement(inElement){
    return document.createElement(inElement);
  }
  addBooksToList(){
    //DONE
    setTimeout(function(){
      document.querySelector('tbody').innerHTML = '';
      let titles = JSON.parse(localStorage.getItem('titles')),
          authors = JSON.parse(localStorage.getItem('authors')),
          years = JSON.parse(localStorage.getItem('years'));


      //check if there is prev values


        if(titles != null && authors != null && years != null)
         {

           for(let i=0;i<titles.length;i++)
           {
             let row = ui.createElement('tr');
             row.id = `tr_${i+1}`;
             row.innerHTML =
               `
               <td>${titles[i]}</td>
               <td>${authors[i]}</td>
               <td>${years[i]} <a href="#" class="delete" id="${i+1}" >&times;</a></td>

               `;
               row.classList.add('fade-in');
               row.classList.remove('fade-out');
               document.querySelector('tbody').appendChild(row);
               row = null;
           }
         }else {
           let row = ui.createElement('tr');



           document.querySelector('tbody').innerHTML ='';
           document.querySelector('tbody').appendChild(row);
           row = null;
         }
    },1500);

  }
  highlightSelectedBook(inBookIndex){
    if(inBookIndex != null){
      let highlightedRow = document.getElementById(`tr_${inBookIndex}`);
      highlightedRow.classList.add('highlight-row');
    }
  }
  disableHighlightSelectedBook(inBookIndex){
    //get selected index
    let selectedIndex = 'tr_'+inBookIndex;
    let targetTrs = document.querySelectorAll(`tbody > tr`);
    targetTrs.forEach(function(tr){
      if(tr.id != selectedIndex){
        tr.classList.remove('highlight-row');
      }


    });
  }
  removeBookFromList(inBookIndex){
    if(inBookIndex != null)
    {
      //delete msg
      let p = ui.createElement('p');
      let row = ui.createElement('tr');
      let selectedTitle,selectedAuthor,selectedYear;
      row = document.getElementById(`tr_${inBookIndex+1}`);
      selectedTitle = row.querySelector('td:first-child').innerText;
      selectedAuthor = row.querySelector('td:nth-child(2)').innerText;
      selectedYear = row.querySelector('td:nth-child(3)').innerText;
      selectedYear = selectedYear.split(' ',1);
      document.getElementById('addMsg').classList.remove('hide-msg');
      document.getElementById('addMsg').classList.add('add-msg');
      document.getElementById('addMsg').innerHTML = '';
      p.innerHTML =
      `
      <p>
        Do you want to delete this  Book <span class="book-to-delete"> <strong>${selectedTitle}</strong> ,
        <strong> ${selectedAuthor} </strong> ,<strong> ${selectedYear.toString()} <strong></span>  ?

        <input type="button" id="delete" class="validate-delete-book" value="Delete"/>
        <input type="button" id="cancel" class="cancel-delete-book" value="Cancel"/>
      </p>

      `;
      document.getElementById('addMsg').appendChild(p) ;
      p.classList.add('delete-confirmation-msg');
      p = null;
      const deleteBtn = document.getElementById('delete');
      const cancelBtn = document.getElementById('cancel');
      deleteBtn.onclick = function(){
        const targetTr = document.getElementById(`tr_${inBookIndex + 1}`);
        targetTr.classList.remove('highlight-row');
        if(targetTr != null && targetTr != undefined)
        {
          setInterval(function(){
            targetTr.classList.add('fade-out');
            targetTr.classList.remove('fade-in');
          },1000);
          setTimeout(function(){
            targetTr.parentNode.removeChild(targetTr);
          },2000)
        }
        //remove Msg
        let p = ui.createElement('p');
        document.getElementById('addMsg').classList.remove('hide-msg');
        document.getElementById('addMsg').classList.add('add-msg');
        document.getElementById('addMsg').innerHTML = '';

        p = null;

      }
      cancelBtn.onclick = function(){
        let p = ui.createElement('p');
        document.getElementById('addMsg').classList.remove('hide-msg');
        document.getElementById('addMsg').classList.add('add-msg');
        document.getElementById('addMsg').innerHTML = '';
        p = null;
        //remove highlight from targetTr after cancel
        let highlightedRow = document.getElementById(`tr_${inBookIndex+1}`);
        highlightedRow.classList.remove('highlight-row');

      }



    }
  }
  getInputValues(inTitle,inAuthor,inYear){
    //DONE
    if(inTitle != '' && inAuthor != '' && inYear != ''){
      return new Book(inTitle,inAuthor,inYear);

    }
  }
  addRowToList(inBook){
    if(inBook != null){
      //creaet a row
      const row = ui.createElement('tr');
      row.id = `tr_${inBook._id}`;

      row.innerHTML =
        `
        <td>${inBook.title}</td>
        <td>${inBook.author}</td>
        <td>${inBook.year} <a href="#" class="delete" id="${inBook._id}" >&times;</a></td>

        `;

      document.querySelector('tbody').appendChild(row);

      //Add animaton
      setInterval(function(){
        const trFadein = document.querySelector('tbody > tr:last-of-type');
        trFadein.classList.add('fade-in');
        trFadein.classList.remove('fade-out');
      },1000);
      this.addBooksToList();
      this.successMsg();
    }else {
      this.errorMsg();
    }

  }
  successMsg(){
    //success msg
    //create paragraph
    let p = ui.createElement('p');
    document.getElementById('addMsg').classList.remove('hide-msg');
    document.getElementById('addMsg').classList.add('add-msg');
    document.getElementById('addMsg').innerHTML = '';
    p.innerText = 'Book added succesfuly';

    document.getElementById('addMsg').appendChild(p) ;
    p.classList.add('success');
    p.classList.remove('error');
    setTimeout(function(){
      document.getElementById('addMsg').classList.add('hide-msg');

    },3000);
    document.getElementById('booktitle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    p = null;
  }
  errorMsg(){
    //error msg
    let p = ui.createElement('p');
    document.getElementById('addMsg').classList.remove('hide-msg');
    document.getElementById('addMsg').classList.add('add-msg');
    document.getElementById('addMsg').innerHTML = '';
    p.innerText = 'please do not leave the fields empty';

    document.getElementById('addMsg').appendChild(p) ;
    p.classList.remove('success');
    p.classList.add('error');

    setTimeout(function(){

      document.getElementById('addMsg').classList.add('hide-msg');

    },3000);
    //clear inputs
          document.getElementById('booktitle').value = '';
          document.getElementById('author').value = '';
          document.getElementById('year').value = '';
          p = null;
  }

}
//initial objects
const ui = new Ui();
//add events listeners
//1- submit
document.getElementById('addBookForm').addEventListener('submit',function(e){
  e.preventDefault();
  const title = document.getElementById('booktitle').value,
        author = document.getElementById('author').value,
        year = document.getElementById('year').value;
  let book = ui.getInputValues(title,author,year);
  if(book != null && book != undefined){
    book.addBook(book);
  }
  ui.addRowToList(book);
  book = null;
});
//2- delete
document.querySelector('tbody').addEventListener('click',function (e) {
  e.preventDefault();
  if(e.target.classList.contains('delete')){
    let bookId = e.target.id;
    bookId -= 1;
    ui.disableHighlightSelectedBook(bookId+1);
    ui.removeBookFromList(bookId);
    let book = new Book();
    book.removeBook(bookId);
    ui.highlightSelectedBook(bookId+1);
  }
})
//load books from Localstorage
window.onload = function(){
  ui.addBooksToList();
};
