import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuOptionsComponent } from "./menu-options/menu-options.component";
import { OrderOptionsComponent } from "./order-options/order-options.component";

const routes: Routes = [
  { path: "menu", component: MenuOptionsComponent },
  { path: "order", component: OrderOptionsComponent },
  {
    path: "",
    redirectTo: "menu",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
