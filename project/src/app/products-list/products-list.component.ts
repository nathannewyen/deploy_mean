import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  products = [];
  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }
}
