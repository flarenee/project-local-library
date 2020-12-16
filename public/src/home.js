// eslint-disable-next-line strict
function totalBooksCount(books) {
  return books.length;
 }
 
 function totalAccountsCount(accounts) {
   return accounts.length;
 }
 
 function booksBorrowedCount(books) {
   let total = 0;
   for (let book in books) {
     const borrowedCount = 
       books[book].borrows.filter(borrow => borrow.returned === false).length;
     total += borrowedCount;
   };
   return total;
 };
 
 function getMostCommonGenres(books) {
   const booksGenre = [];
   for (let key in books) { booksGenre.push(books[key].genre) };
   const uniqueGenre = [...new Set(booksGenre)];
   const bookGenreTotals = [];
   for (let key in uniqueGenre) {
     const genreCount = books.filter(book => book.genre === uniqueGenre[key]).length;
     bookGenreTotals.push({'name': uniqueGenre[key], 'count': genreCount});
   };
   bookGenreTotals.sort(function(item1, item2) {
     return item2.count - item1.count;
   });
   return bookGenreTotals.slice(0, 5);
 };
 
 function getMostPopularBooks(books) {
   const popularBookTotals = [];
   for (let key in books) {
     popularBookTotals.push({name: books[key].title, count: books[key].borrows.length});
     }
   popularBookTotals.sort(function(item1, item2) {
     return item2.count - item1.count;
   });
   return popularBookTotals.slice(0, 5);
 };
 
 function getMostPopularAuthors(books, authors) {
     const popularAuthorsTotals = [];
 
   for (let key in authors) {
     const popularAuthor = authors[key].id
     const authorsName = authors[key]
     const bookCount = books.filter(book => popularAuthor === book.authorId).reduce((acc, book) => acc + book.borrows.length, 0);
       popularAuthorsTotals.push({name: `${authorsName.name.first} ${authorsName.name.last}` , count: bookCount});
     }
   popularAuthorsTotals.sort(function(item1, item2) {
     return item2.count - item1.count;
   });
   return popularAuthorsTotals.slice(0, 5);
 };
 
module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
