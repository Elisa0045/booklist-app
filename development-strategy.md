# BookList App: development strategy

Building this site one step at a time.

## 0. Setup

* `index.html`: basic HTML layout and references to external files.
* `bootstap.min.css`: CSS stylesheet themes https://bootswatch.com/
* `font-awesome.css`: CSS stylesheet font-awesome icons.
* `fonts`: folder with all font-awesome icon font files.

## 1. Data & Log

* `data/book.js` & `log.js`

# 2. User Story: `display books` 

* The user can see the table with all the books added.
* I wrote in `ui.js`, for display the list of the books.
* I add a function in the `handler.js` for displaying the list in the screen. 

# 3. User Story: `add books` 
* The user can add a new book into the list. 
* I wrote the code in `ui.js`, for add a new book in the list.
* I add a function in the `handler.js` for adding the new books.

# 4. User Story: `remove book` 
* The user can delete the books from the list. 
* I wrote the code in `ui.js`, for remove books in the list.
* I add a function in the `handler.js` for delete the  books in the list just 'clicking' in the delete button.

# 4. User Story: `validate` 
* The user can do not continue if any field is empty, that displays an alert message "Please, fill the all fields" to continue.  
* I wrote the code in `ui.js`, for the validate and vanish the alerts every thee seconds. 
* I add a function in the `handler.js` for display the message for fill the fields, delete book and add book.