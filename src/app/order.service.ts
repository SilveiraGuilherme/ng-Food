import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  items: { product: Product; amount: number }[] = [];

  addProduct(product: Product) {
    const item = this.items.find(
      (item) => item.product.descricao === product.descricao
    );
    if (item) {
      item.amount++;
    } else {
      this.items.push({
        product: product,
        amount: 1,
      });
    }
  }

  clear() {
    this.items = [];
  }

  getTotalAmount(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.amount;
    }
    return total;
  }

  getFinalPrice(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.amount * item.product.preco;
    }
    return total;
  }
}
