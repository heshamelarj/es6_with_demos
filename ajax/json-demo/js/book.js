
//book class
class Book{
  constructor(inTitle,inAuthor,inPublisher,inYear){
    this.title = inTitle;
    this.author = inAuthor;
    this.publisher = inPublisher;
    this.year = inYear;
    this._id = Book.counter;
  }
  get id(){
    return this._id;
  }
  static get counter(){
    Book._counter = (Book._counter || 0) +1;
    return Book._counter;
  }
  //methods


  /**
   * @description search book by id
   * @param {number} inBookId
   * @returns {Book} object
   */
  searchBook(inBookId){

  }


  /**
   * @description: return an array of books objects using callback
   * @returns: list {Book}
   */
  listBooksCallback(callback){
    /**
    *TODO:add id to book object recieved from json file
    **/
    const xhr = new XMLHttpRequest();
    xhr.open("GET","../data/books.json",true);

    xhr.onload = function(){


        if(this.status == 200){

          // console.log(this.responseText);
         callback(this.responseText);




        }
    };

    xhr.send();



    }
    /**
   * @description: return an array of books objects using promise
   * @returns: list {Book}
   */
  listBooksPromise(){
    /**
    *TODO:add id to book object recieved from json file
    **/
   return new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","../data/books.json",true);

    xhr.onload = function(){
      if(this.status == 200){
         resolve(this.responseText);
        }else{
          reject(this.status);
        }
    };
    xhr.send();
   })
  }
}





