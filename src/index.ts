import { Cart } from './Cart';
import { Movie } from './Movie';

const cart = new Cart();

const avengers = new Movie(
  'Мстители',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик'],
  137
);

const ironMan = new Movie(
  'Железный человек',
  2008,
  'США',
  'I am Iron Man!',
  ['фантастика'],
  126
);

cart.addToCart(avengers, 500);
cart.addToCart(ironMan, 700);

cart.displayCart();

const total = cart.calculateTotal();
console.log(`Общая стоимость: ${total}₽`);

const discountTotal = cart.calculateTotalWithDiscount(10); // Скидка 10%
console.log(`Стоимость со скидкой 10%: ${discountTotal}₽`);

cart.removeFromCart(0);

cart.displayCart();