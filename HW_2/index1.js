class library {
    #books=[];

    constructor(books = []) {
    // Проверяем, что массив книг не содержит дубликатов
    const uniqueBooks = [...new Set(books)];
    if (uniqueBooks.length !== books.length) {
        throw new Error("Начальный список книг содержит дубликаты");
    }
    this.#books = uniqueBooks;
    }

  // Геттер для получения всех книг
    get allBooks() {
    return this.#books;
    }

  // Метод для добавления книги
    addBook(title) {
    if (this.#books.includes(title)) {
        throw new Error(
        `Книга с названием "${title}" уже существует в библиотеке`
        );
    }
    this.#books.push(title);
    }

    // Метод для удаления книги
    removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
        throw new Error(`Книги с названием "${title}" нет в библиотеке`);
    }
    this.#books.splice(index, 1);
    }

  // Метод для проверки наличия книги
    hasBook(title) {
    return this.#books.includes(title);
    }
}

let lib = new library()
lib.addBook('Лолита')
lib.addBook('Анна Каренина')
lib.addBook('Преступление и наказание')
lib.removeBook('Лолита')

console.log(lib.allBooks);
console.log(lib.hasBook('Анна Каренина'));
console.log(lib.hasBook('Лолита'));