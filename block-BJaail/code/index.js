let ul = document.querySelector("ul");
class BookList {
  constructor(root, list = []) {
    this.books = list;
    this.root = root;
  }
  add(title, author, isbn) {
    let book = new Book(title, author, isbn);
    this.books.push(book);
    this.createUi();
    return this.books.length;
  }
  delete(id) {
    const deletedBook = this.books.findIndex((book) => book.id === id);
    this.books.splice(deletedBook, 1);
    this.createUi();
    return this.books.length;
  }
  createUi() {
    this.root.innerHTML = "";
    this.books.forEach((book) => {
      let ui = book.createUi();
      ui.querySelector("button").addEventListener(
        "click",
        this.delete.bind(this, book.id)
      );
      this.root.append(ui);
    });
  }
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.id = `id-${Date.now()}`;
  }
  handleClick() {
    this.isRead = !this.isRead;
    this.createUI();
  }
  handleDelete() {}

  createUi() {
    let li = document.createElement("li");
    li.className = "flex bg-gray-100 justify-between py-3 my-3";
    let p1 = document.createElement("p");
    p1.innerText = this.title;
    let p2 = document.createElement("p");
    p2.innerText = this.author;
    let p3 = document.createElement("p");
    p3.innerText = this.isbn;
    let button = document.createElement("button");
    button.innerText = "X";
    button.className = " bg-red-500 py-1 px-2 mr-4";
    li.append(p1, p2, p3, button);
    return li;
  }
}

let submit = document.querySelector(".add-btn");
let myBook = new BookList(document.querySelector(".books"));

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.getElementById("Title");
  let author = document.getElementById("Author");
  let isbn = document.getElementById("ISBN#");
  myBook.add(title.value, author.value, isbn.value);
  title.value = "";
  author.value = "";
  isbn.value = "";
});
