import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";

@Component({
  selector: "app-order-options",
  templateUrl: "./order-options.component.html",
  styles: [],
})
export class OrderOptionsComponent implements OnInit {
  constructor(public orderService: OrderService) {}

  ngOnInit(): void {}
}
