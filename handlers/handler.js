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
      // add book to store
      Store.addBook(book);
      //success message
      UI.showAlert("Book Added", "success");

      //Clear
      UI.clearFields();
      // log the user input
      log.push({
        handler: "addBook",
        book: JSON.parse(JSON.stringify(book)),
      });
    }
  },
  //delete
  deleteBook: function (event) {
    UI.deleteBook(event.target);
    //delete book from the store
    Store.removeBook(
      event.target.parentElement.previousElementSibling.textContent
    );

    //message
    UI.showAlert("Book Removed", "success");
    //log the user input
    log.push({
      handler: "deleteBook",
    });
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
