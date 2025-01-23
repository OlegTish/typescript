import { Cart } from '../Cart';
import { Movie } from '../Movie';

describe('Cart', () => {
  let cart: Cart;
  let movie1: Movie;
  let movie2: Movie;

  beforeEach(() => {
    cart = new Cart();
    movie1 = new Movie('Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137);
    movie2 = new Movie('Железный человек', 2008, 'США', 'I am Iron Man!', ['фантастика'], 126);
  });

  it('should add movies to the cart', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    cart.addToCart(movie1, 500);
    cart.addToCart(movie2, 700);

    expect(cart.items.length).toBe(2);
    expect(cart.items[0].movie).toEqual(movie1);
    expect(cart.items[1].movie).toEqual(movie2);
    expect(consoleSpy).toHaveBeenCalledWith('Добавлено в корзину: Мстители');
    expect(consoleSpy).toHaveBeenCalledWith('Добавлено в корзину: Железный человек');

    consoleSpy.mockRestore();
  });

  it('should remove a movie from the cart by id', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    cart.addToCart(movie1, 500);
    cart.addToCart(movie2, 700);

    cart.removeFromCart(0);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].movie).toEqual(movie2);
    expect(consoleSpy).toHaveBeenCalledWith('Элемент с id 0 удалён из корзины.');

    cart.removeFromCart(1);
    expect(cart.items.length).toBe(0);
    expect(consoleSpy).toHaveBeenCalledWith('Элемент с id 1 удалён из корзины.');

    consoleSpy.mockRestore();
  });

  it('should calculate the total cost without discount', () => {
    cart.addToCart(movie1, 500);
    cart.addToCart(movie2, 700);

    const total = cart.calculateTotal();
    expect(total).toBe(1200);
  });

  it('should calculate the total cost with discount', () => {
    cart.addToCart(movie1, 500);
    cart.addToCart(movie2, 700);

    const totalWithDiscount = cart.calculateTotalWithDiscount(20); // 20% скидка
    expect(totalWithDiscount).toBe(960);
  });

  it('should throw an error for invalid discount values', () => {
    cart.addToCart(movie1, 500);
    cart.addToCart(movie2, 700);

    expect(() => cart.calculateTotalWithDiscount(-10)).toThrow('Скидка должна быть в диапазоне от 0 до 100.');
    expect(() => cart.calculateTotalWithDiscount(110)).toThrow('Скидка должна быть в диапазоне от 0 до 100.');
  });

  it('should display the cart content', () => {
    cart.addToCart(movie1, 500);
    cart.addToCart(movie2, 700);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    cart.displayCart();

    expect(consoleSpy).toHaveBeenCalledWith('Содержимое корзины:');
    expect(consoleSpy).toHaveBeenCalledWith('0. Мстители (2012) - 500₽');
    expect(consoleSpy).toHaveBeenCalledWith('1. Железный человек (2008) - 700₽');

    consoleSpy.mockRestore();
  });
});
