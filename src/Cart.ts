import { Movie } from './Movie';

export class Cart {
  items: { id: number; movie: Movie; price: number }[] = [];
  private currentId = 0;

  addToCart(movie: Movie, price: number): void {
    if (!movie || typeof price !== 'number') {
      throw new Error('Movie and price must be provided.');
    }
    this.items.push({ id: this.currentId++, movie, price });
    console.log(`Добавлено в корзину: ${movie.title}`);
  }

  removeFromCart(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Элемент с id ${id} удалён из корзины.`);
    } else {
      console.log(`Элемент с id ${id} не найден.`);
    }
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  calculateTotalWithDiscount(discount: number): number {
    if (discount < 0 || discount > 100) {
      throw new Error('Скидка должна быть в диапазоне от 0 до 100.');
    }
    const total = this.calculateTotal();
    return total - (total * discount) / 100;
  }

  displayCart(): void {
    console.log('Содержимое корзины:');
    this.items.forEach((item) => {
      console.log(`${item.id}. ${item.movie.title} (${item.movie.year}) - ${item.price}₽`);
    });
  }
}