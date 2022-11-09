import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { Product } from "../product";

@Component({
  selector: "app-menu-options",
  templateUrl: "./menu-options.component.html",
  styles: [],
})
export class MenuOptionsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private httpClient: HttpClient,
    public orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<Product[]>("http://localhost:3000/cardapio")
      .subscribe((products) => {
        this.products = products;
      });
  }
}
