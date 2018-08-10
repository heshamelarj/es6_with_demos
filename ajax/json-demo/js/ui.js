class UI{
  constructor()
  {

  }
  /**
   * @description create element when needed
   * @param {NodeElement} inElement
   * @returns {Element}
   *
   */
  createElement(inElement){
    const element = document.createElement(inElement);
    return element;
  }
  /**
   * @description add book to tbody of table
   * @param {Book} inBook
   *
   */
  listBook(inBook){

   const tr =  this.createElement('tr');

   tr.setAttribute('book-id',inBook.id)
   tr.innerHTML = `
   <td>${inBook.id}</td>
   <td>${inBook.title}</td>
   <td>${inBook.author}</td>
   <td>${inBook.publisher}</td>
   <td>${inBook.year}</td>
   <td><a href="#" class="edit-book"><i class="fa green-text text-accent-2 fa-edit fa-2x"></i></a>
   <a href="#" class="delete-book"><i class="fa red-text text-accent-2 fa-close fa-2x"></i></a>
   </td>
   `;
   const tbody = document.querySelector('tbody');
   tbody.appendChild(tr);
  }
  
}
