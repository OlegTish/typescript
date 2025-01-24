import { Cart, CartItem } from './Cart';

const cart = new Cart();

const item1: CartItem = { id: 1, title: 'Мстители', price: 500 };
const item2: CartItem = { id: 2, title: 'Железный человек', price: 700 };

cart.addToCart(item1);
cart.addToCart(item2);

console.log('Содержимое корзины:', cart.getItems());

console.log('Общая стоимость без скидки:', cart.getTotalCost());

const discount = 10;
console.log(
  `Общая стоимость со скидкой (${discount}%):`,
  cart.getTotalCostWithDiscount(discount)
);

try {
  cart.removeFromCart(1);
  console.log('После удаления элемента:', cart.getItems());
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Произошла неизвестная ошибка');
  }
}

try {
  cart.removeFromCart(999);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Произошла неизвестная ошибка');
  }
}