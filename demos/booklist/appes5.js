//book constructor
function Book(inBookTitle, inAuthor, inYear){
  this.bookTitle = inBookTitle;
  this.author = inAuthor;
  this.year = inYear;
}

//ui constructor

function UI(){

}
//when doc loads

UI.prototype.refrechList = function()
{
  let titles = JSON.parse(localStorage.getItem('titles')),
      authors = JSON.parse(localStorage.getItem('authors')),
      years = JSON.parse(localStorage.getItem('years'));


  //check if there is prev values


    if(titles != null && authors != null && years != null)
     {

       for(let i=0;i<titles.length;i++)
       {
         const tr = document.createElement('tr');
         tr.id = `tr_${i}`;
         tr.innerHTML =
           `
             <td>${titles[i]}</td>
             <td>${authors[i]}</td>
             <td>${years[i]} <a href="#" class="delete" id="${i}" >&times;</a></td>

           `;
           tr.classList.add('fade-in');
           tr.classList.remove('fade-out');
           document.querySelector('tbody').appendChild(tr);

       }
     }else {
       const tr = document.createElement('tr');
       document.querySelector('tbody').innerHTML ='';
       document.querySelector('tbody').appendChild(tr);
     }
}

const ui = new UI();
ui.refrechList();


//ui prototypes
UI.prototype.addBookToList = function(inBook){

  //create tr element
  const p = document.createElement('p');
  //refrech BookList

  //success
  if(inBook != null ){
    document.getElementById('addMsg').innerHTML = '';



    let titles = JSON.parse(localStorage.getItem('titles')),
        authors = JSON.parse(localStorage.getItem('authors')),
        years = JSON.parse(localStorage.getItem('years'));
    //check if there is prev values




        const tr = document.createElement('tr');
        console.log(titles.length-1);
        tr.id = `tr_${titles.length-1}`;

        tr.innerHTML =
          `
          <td>${titles[titles.length-1]}</td>
          <td>${authors[authors.length-1]}</td>
          <td>${years[years.length-1]} <a href="#" class="delete" id="${years.length-1}" >&times;</a></td>

          `;

        document.querySelector('tbody').appendChild(tr);

        //Add animaton
        setInterval(function(){
          const trFadein = document.querySelector('tbody > tr:last-of-type');
          trFadein.classList.add('fade-in');
          trFadein.classList.remove('fade-out');
        },1000);





    //success msg
    document.getElementById('addMsg').classList.remove('hide-msg');
    document.getElementById('addMsg').classList.add('add-msg');
    p.innerText = 'Book added succesfuly';

    document.getElementById('addMsg').appendChild(p) ;
    p.classList.add('success');
    p.classList.remove('error');
    setTimeout(function(){
      document.getElementById('addMsg').classList.add('hide-msg');

    },3000);

    //error
  }else{
    //error msg
    document.getElementById('addMsg').classList.remove('hide-msg');
    document.getElementById('addMsg').classList.add('add-msg');
    document.getElementById('addMsg').innerHTML = '';
    p.innerText = 'please do not leave the fields emty';

    document.getElementById('addMsg').appendChild(p) ;
    p.classList.remove('success');
    p.classList.add('error');

    setTimeout(function(){

      document.getElementById('addMsg').classList.add('hide-msg');

    },3000);
  }

}

//delete prototype
UI.prototype.removeBookFromList = function(inBookIndex)
{
  if(inBookIndex != null)
  {
    let titles = [], authors =[] , years = [];
    //get all titles authors and years to delete the selected index
    titles = JSON.parse(localStorage.getItem('titles'));
    authors = JSON.parse(localStorage.getItem('authors'));
    years = JSON.parse(localStorage.getItem('years'));
    //delete msg
    const p = document.createElement('p');
    document.getElementById('addMsg').classList.remove('hide-msg');
    document.getElementById('addMsg').classList.add('add-msg');
    document.getElementById('addMsg').innerHTML = '';
    p.innerHTML =
    `
    <p>
      Do you want to delete this  Book <span class="book-to-delete"> <strong>${titles[inBookIndex]}</strong> ,
      <strong> ${authors[inBookIndex]} </strong> ,<strong> ${years[inBookIndex]} <strong></span>  ?

      <input type="button" id="delete" class="validate-delete-book" value="Delete"/>
      <input type="button" id="cancel" class="cancel-delete-book" value="Cancel"/>
    </p>

    `;
    document.getElementById('addMsg').appendChild(p) ;
    p.classList.add('success');
    const deleteBtn = document.getElementById('delete');
    const cancelBtn = document.getElementById('cancel');
    deleteBtn.onclick = function(){
      //delete book by index

      titles.splice(inBookIndex,1);
      authors.splice(inBookIndex,1);
      years.splice(inBookIndex,1);
      // clear the localStorage
      localStorage.clear();
      const targetTr = document.getElementById(`tr_${inBookIndex}`);

      if(targetTr != null)
      {

        targetTr.classList.add('fade-out');
        targetTr.classList.remove('fade-in');

      }


      //storage the new arrays
      localStorage.setItem('titles',JSON.stringify(titles));
      localStorage.setItem('authors',JSON.stringify(authors));
      localStorage.setItem('years',JSON.stringify(years));


      //remove Msg

      const p = document.createElement('p');
      document.getElementById('addMsg').classList.remove('hide-msg');
      document.getElementById('addMsg').classList.add('add-msg');
      document.getElementById('addMsg').innerHTML = '';

      setInterval(function(){
        document.location.reload(false);
      },2000);

    }
    cancelBtn.onclick = function(){
      const p = document.createElement('p');
      document.getElementById('addMsg').classList.remove('hide-msg');
      document.getElementById('addMsg').classList.add('add-msg');
      document.getElementById('addMsg').innerHTML = '';

    }



  }


}



//event listeners
//form event listeners
document.getElementById('addBookForm').addEventListener('submit',function(e){

  const title = document.getElementById('booktitle').value,
        author = document.getElementById('author').value,
        year = document.getElementById('year').value;


  //initiate book object
  //check if the inputs has values
  let book ;
  if(title != '' && author != '' && year != ''){
   book = new Book(title, author, year);
   //save book to local storage
   //create json array
   let titles,authors,years;
   if(localStorage.getItem('titles') === null && localStorage.getItem('authors') === null && localStorage.getItem('years') === null)
    {
      titles = [];
      authors = [];
      years = [];
    }else{
      titles = JSON.parse(localStorage.getItem('titles'));
      authors = JSON.parse(localStorage.getItem('authors'));
      years = JSON.parse(localStorage.getItem('years'));
    }
   titles.push(book.title);
   authors.push(book.author);
   years.push(book.year);

   console.log(titles,authors,years);

   localStorage.setItem('titles',JSON.stringify(titles));
   localStorage.setItem('authors',JSON.stringify(authors));
   localStorage.setItem('years',JSON.stringify(years));
 }
  //initilate ui object
  const ui = new UI();
  ui.addBookToList(book);
  //clear inputs
  document.getElementById('booktitle').value = '',
  document.getElementById('author').value = '',
  document.getElementById('year').value = '';
  e.preventDefault();
})
//delete event listener
document.querySelector('tbody').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('delete')){
    //delete from  UI
    //get the number of  book that we want to delete
    const target = e.target;
    const bookIndex = target.id;
    const ui = new UI();
    ui.removeBookFromList(bookIndex);

  }
})
