function findAccountById(accounts, id) {
  return accounts.find((byId) => byId.id === id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => 
  lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1);
};


function numberOfBorrows(account, books) {
  let total = 0;
  for (let object in books) {
    const borrowed = books[object].borrows.filter(book => book.id === account.id).length;
    total += borrowed
  };
  return total;
};


function booksInPossession(account, books, authors) {
  let rArr = [];
  for(let key in books) {
    if(books[key].borrows.some(element => element.id === account.id && !element.returned)){
      let bookObject = books[key];
      bookObject.author = authors.find(element => element.id === bookObject.authorId);
    rArr.push(bookObject);
    }
  }
return rArr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
