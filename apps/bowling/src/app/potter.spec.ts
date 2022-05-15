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

});