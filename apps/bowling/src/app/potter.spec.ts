import { Potter } from './potter';

describe('Harry Potter book kata', function() {

  test('... a single book should cost 8 EUR', function() {
      const potter = new Potter();
      const number = 1;
      potter.addToBasket(potter.createBook(number));
      expect(potter.checkout()).toBe(8);
  });
});