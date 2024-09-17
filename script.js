function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;  
}

Book.prototype.display= function() {
    console.log("The title of this book is: ", this.title);
    console.log("It was written by: ", this.author);
    console.log("There are ", this.pages, " in this book!" );
}

let library = [];

Book.prototype.addBook = function() {
    library.push(this);
    console.log("You successfully added ", this.title, " to the library!")
}

function searchByTitle(title) {
    return library.filter(book => book.title.includes(title));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.includes(author));
}

function filterBooksByPages() {
    return library.filter(book => book.pages > 100);
}


Book.prototype.mapBook = function() {
    library.map( library.push(this.title), library.push(this.author));
    console.log("You successfully added ")
}

function mapBooks() {
    return library.map(book => ({
        title: "Title: " + book.title,
        author: "Author: " + book.author,
        pages: book.pages
    }));
}

let book1 = new Book ("20,000 Leagues Under the Sea", "Jules Verne", 300);
let book2 = new Book ("To kill a Mockingbird", "Harper Lee", 100);

book1.addBook();
book2.addBook();
console.log(library);
console.log(searchByTitle("20,000 Leagues Under the Sea"));
console.log(searchByAuthor("Harper Lee"));
console.log(filterBooksByPages());
console.log(mapBooks());


function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}
Account.prototype.deposit = function(depositAmount) {
    this.balance += depositAmount;
    return this.balance;
};


Account.prototype.withdraw = function(withdrawAmount) {
    if (withdrawAmount > this.balance) {
        console.log("Insufficient funds");
        return this.balance;
    }
    this.balance -= withdrawAmount;
    return this.balance;
};


Account.prototype.compoundInterest = function(interestRate) {
    this.balance += this.balance * interestRate;
    return this.balance;
};

let account1 = new Account("54321", 1000, "John Bro");

console.log("Initial Balance: " + account1.balance);
account1.deposit(500);
console.log("After Deposit: " + account1.balance);
account1.withdraw(200);
console.log("After Withdrawal: " + account1.balance);
account1.compoundInterest(0.05);
console.log("After Compound Interest: " + account1.balance);