import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "products", component: ProductsListComponent },
  { path: "products/new", component: NewComponent },
  { path: "products/:id/edit", component: EditComponent },
  { path: "products/:id", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
