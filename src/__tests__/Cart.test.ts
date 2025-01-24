import { Cart, CartItem } from '../Cart';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('should add items to the cart', () => {
    const item: CartItem = { id: 1, title: 'Movie A', price: 10 };
    cart.addToCart(item);
    expect(cart.getItems()).toContainEqual(item);
  });

  test('should remove items from the cart by id', () => {
    const item: CartItem = { id: 1, title: 'Movie A', price: 10 };
    cart.addToCart(item);
    cart.removeFromCart(1);
    expect(cart.getItems()).not.toContainEqual(item);
  });

  test('should throw an error when removing non-existent item', () => {
    expect(() => cart.removeFromCart(999)).toThrow('Item with id 999 not found');
  });

  test('should calculate total cost of items', () => {
    cart.addToCart({ id: 1, title: 'Movie A', price: 10 });
    cart.addToCart({ id: 2, title: 'Movie B', price: 20 });
    expect(cart.getTotalCost()).toBe(30);
  });

  test('should calculate total cost with discount', () => {
    cart.addToCart({ id: 1, title: 'Movie A', price: 100 });
    expect(cart.getTotalCostWithDiscount(10)).toBe(90);
  });

  test('should throw an error for invalid discount values', () => {
    cart.addToCart({ id: 1, title: 'Movie A', price: 100 });
    expect(() => cart.getTotalCostWithDiscount(-5)).toThrow(
      'Discount must be between 0 and 100'
    );
    expect(() => cart.getTotalCostWithDiscount(105)).toThrow(
      'Discount must be between 0 and 100'
    );
  });

  test('should handle empty cart correctly', () => {
    expect(cart.getTotalCost()).toBe(0);
    expect(cart.getTotalCostWithDiscount(20)).toBe(0);
  });
});