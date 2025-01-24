import { Movie } from './Movie';

export interface CartItem {
  id: number;
  title: string;
  price: number;
}

export class Cart {
  private items: CartItem[] = [];

  addToCart(item: CartItem): void {
    this.items.push(item);
  }

  removeFromCart(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error(`Item with id ${id} not found`);
    }
  }

  getTotalCost(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    if (discount < 0 || discount > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    const total = this.getTotalCost();
    return total - (total * discount) / 100;
  }

  getItems(): CartItem[] {
    return this.items;
  }
}