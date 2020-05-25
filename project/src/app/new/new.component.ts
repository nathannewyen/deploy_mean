import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
  products = [];
  newProduct: any;
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getProductsFromService();
    this.newProduct = { title: "", qty: 0, price: 0 };
  }

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors;
        this._router.navigate(["products/new"]);
      } else {
        this.getProductsFromService();
        this._router.navigate(["products"]);
      }
    });
  }
}
