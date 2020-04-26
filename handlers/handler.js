//display books
debugger;
var handler = {
  addBook: function (event) {
    event.preventDefault(); //prevent actual submit
    // get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    //validate
    if (title === "" || author === "" || isbn === "") {
      UI.showAlert("Please, fill the all fields", "danger");
    } else {
      //instantiate book
      const book = new Book(title, author, isbn);

      // UI add book
      UI.addBookToList(book);
      //success message
      UI.showAlert("Book Added", "success");

      //Clear
      UI.clearFields();
    }
  },
  //delete
  deleteBook: function (event) {
    UI.deleteBook(event.target);
    //message
    UI.showAlert("Book Removed", "success");
  },
};
//display books
window.onload = UI.displayBooks();
// add books
document.querySelector("#book-form").addEventListener("submit", (e) => {
  handler.addBook(e);
});
//remove book
document.querySelector("#book-list").addEventListener("click", (e) => {
  handler.deleteBook(e);
});
