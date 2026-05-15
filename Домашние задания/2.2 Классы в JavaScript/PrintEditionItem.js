class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0){
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book"
  }
}

class NovelBook extends Book {
  constructor(author,name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel"
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library{
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value){
    return this.books.find(b => b[type] === value) || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(b => b.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

const library1 = new Library("Библиотека №1")

library1.addBook(new DetectiveBook("Конан Дойл", "Шерлок Холмс", 2019, 1008));
library1.addBook(new FantasticBook("Братья Стругацкие", "Пикник на обочине", 1972, 168));
library1.addBook(new Magazine("Наука и жизнь", 2021, 50));

let oldBook = library1.findBookBy("releaseDate", 1919);
if (!oldBook) {
  oldBook = new NovelBook("Неизвестный автор", "Забытая история", 1919, 350);
  library1.addBook(oldBook);
}

const givenBook = library1.giveBookByName("Пикник на обочине");
console.log(`Выдана книга: ${givenBook.name}`);

givenBook.fix();
console.log(`Состояние после починки: ${givenBook.state}`);

library1.addBook(givenBook);
console.log(`Книга вернулась в библиотеку: ${library1.findBookBy("name", "Пикник на обочине") !== null}`);