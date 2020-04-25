//display books
debugger;
var handler = {
  addBook: function (event) {
    event.preventDefault(); //prevent actual submit
    // get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    //instantiate book
    const book = new Book(title, author, isbn); 

    // UI add book
    UI.addBookToList(book);
    //Clear
    UI.clearFields();
  },
};
//display books
window.onload = UI.displayBooks();
// add books
document.querySelector("#book-form").addEventListener("submit", (e) => {
  handler.addBook(e);
});
