import { Potter } from './potter';

describe('Harry Potter book kata', function() {

  test('... a single book should cost 8 EUR', function() {
      const potter = new Potter();
      const number = 1;
      potter.addToBasket(potter.createBook(number));
      expect(potter.checkout()).toBe(8);
  });

  test('...the createBook method should return a book with expected number', function() {
    const potter = new Potter();
    const number = 2;
    expect(potter.createBook(number)).toMatchObject({ number });
  });

  test('...the addToBasket method should add books to the shopping basket', function() {
    const potter = new Potter();
    const book = potter.createBook(1);
    potter.addToBasket(book);
    expect(potter.basket).toHaveLength(1);
  });

  test('...x number of the same books should result in base price * x', function() {
    const potter = new Potter();
    const book = potter.createBook(1);
    potter.addToBasket(book);
    potter.addToBasket(book);
    expect(potter.checkout()).toBe(16);
    potter.addToBasket(book);
    expect(potter.checkout()).toBe(24);
  });

});