class Book {
    constructor(protected bookNumber: number) {}
}

export class Potter {
    basket: Book[] = [];

    price = 8;

    checkout(): number {
        return this.price * this.basket.length
    }

    createBook(bookNumber: number): Book {
        return new Book(bookNumber);
    }

    addToBasket(book: Book) {
        this.basket.push(book);
    }
}