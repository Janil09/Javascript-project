// Mock data for the library

let books = [];

// Function to add a book to the library and the table
function addBook() {
  // Collecting the input values
  const title = document.getElementById('title').value;
  const author = document.getElementById('Author').value;
  const publisher = document.getElementById('publisher').value;
  const isbn = document.getElementById('isbn').value;
  const copies = document.getElementById('copies').value;

  // Validating the inputs
  if (title && author && publisher && isbn && copies) {
    const newBook = {
      title,
      author,
      publisher,
      isbn,
      copies: parseInt(copies),
    };

    // Adding the book to the library
    books.push(newBook);

    const table = document.getElementById('table');
    const newRow = table.insertRow(-1);
    
    // Adding table cells for the book information
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const publisherCell = newRow.insertCell(2);
    const isbnCell = newRow.insertCell(3);
    const copiesCell = newRow.insertCell(4);

    // Adding the book data to the table cells
    titleCell.textContent = title;
    authorCell.textContent = author;
    publisherCell.textContent = publisher;
    isbnCell.textContent = isbn;
    copiesCell.textContent = copies;

    // Clearing the input fields
    document.getElementById('title').value = '';
    document.getElementById('Author').value = '';
    document.getElementById('publisher').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('copies').value = '';
  }
}

// Function to remove the last added book from the library and the table
function removeBook() {
  if (books.length > 0) {
    // Removing the last book from the library
    books.pop();

//     // Accessing the last table row
    const table = document.getElementById('table');
    const lastRow = table.rows[table.rows.length - 1];
    
//     // Removing the last table row
    table.deleteRow(table.rows.length - 1);
  }
}



var  name = prompt("Enter The Password")
if (name == "1234"){
    txt = "Welcome to library system"
} else{
    txt = "Incorrect Password"
}
alert(txt)



function searchBooks() {
  // Getting the search input value
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  // Looping through the books in the library
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    const publisher = book.publisher.toLowerCase();
    const isbn = book.isbn.toLowerCase();

    // Checking if the search term matches any of the book's properties
    if (title.includes(searchTerm) || author.includes(searchTerm) || publisher.includes(searchTerm) || isbn.includes(searchTerm)) {
      // Displaying the book in the table
      const table = document.getElementById('table');
      const row = table.rows[i + 1];
      row.style.display = '';
    } else {
      // Hiding the book in the table
      const table = document.getElementById('table');
      const row = table.rows[i + 1];
      row.style.display = 'none';
    }
  }
}


