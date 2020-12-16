// eslint-disable-next-line strict
function findAuthorById(authors, id) {
  return authors.find((byId) => byId.id === id);
};


function findBookById(books, id) {
   return books.find((byId) => byId.id === id);
};

function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = books.filter((bookB) => !bookB.borrows[0].returned)
  const booksReturned = books.filter((bookA) => bookA.borrows[0].returned)
  return [booksBorrowed, booksReturned]
}

function getBorrowersForBook(book, accounts) {
  let arr = [];
  for (let keyB in book.borrows) {
    const bookBorrowObject = accounts.find(account => account.id === book.borrows[keyB].id);
    bookBorrowObject.returned = book.borrows[keyB].returned
    arr.push(bookBorrowObject)
  } 
  return arr.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
